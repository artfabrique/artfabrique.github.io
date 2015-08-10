CV_Init();

var CV_ready = false;
var CV_rss2load = 3;
var CV_rssLoaded = 0;

function CV_checkPreload() {
	console.log("CV_checkPreload");
	CV_ready = (CV_rss2load == CV_rssLoaded);
}

function CV_OnAxure_Loaded() {
	console.log("CV_OnAxure_Loaded");
	$axure.setGlobalVariable("ready",(CV_ready?"1":"0"));
}

function CV_Init() {
	console.log("CV_Init");
	$("head").append('<link type="text/css" rel="stylesheet" href="cv/cv_style.css">');
	$.getScript("cv/soundmanager/soundmanager2.js").done(CV_InitSoundManager);
	$('[data-label*="^"]').css('pointer-events', 'none');
	//$("head").append('<script type="text/javascript" src="http://artfabrique.github.io/_cv/soundmanager/soundmanager2.js"></script>');
}

function CV_InitSoundManager() {
	console.log("CV_InitSoundManager");
	//alert("CV_InitSoundManager");
	soundManager.setup({
		url: 'cv/soundmanager/swf',
		//preferFlash: true,
		flashVersion: 9, // optional: shiny features (default = 8)
		// optional: ignore Flash where possible, use 100% HTML5 mode
		// preferFlash: false,
		onready: function() {

			console.log("CV_InitSoundManager: On Ready");
			console.log("soundManager = "+soundManager);


			soundManager.fadeTo = function(id, dur, toVol, callback){
				dur      = dur || 1000;
				toVol    = toVol || 0;
				callback = typeof callback == 'function' ? callback : function(){};
				var s    = soundManager.getSoundById(id),
				    k    = s.volume,
				    t    = dur/Math.abs(k - toVol);
				if(s.playState==0&toVol>0) s.play();
				var i    = setInterval(function(){
					        k = k > toVol ? k - 1 : k + 1;
					        console.log("soundManager.fadeTo: "+k);
					        s.setVolume(k);
					        if(k == toVol){ 
					            callback.call(this);
						        clearInterval(i);
						        i = null;
						        if(toVol==0) s.stop();
					        }
					}, t);	
					console.log("soundManager.fadeTo: "+s);
			}
			console.log("soundManager.fadeTo = "+soundManager.fadeTo);


			soundManager.createSound({
				id: 'music_1',
				url: 'cv/sound/C418 – Minecraft.mp3',
				autoLoad: true,
				loops:999,
				autoPlay: true,
				onload: function() {
					CV_rssLoaded++;
					CV_checkPreload();
				//alert('The sound '+this.id+' loaded!');
				},
				volume: 50
			});
			soundManager.createSound({
				id: 'campfire',
				url: 'cv/sound/62487_sagetyrtle_1103campfire1.mp3',
				autoLoad: true,
				autoPlay: false,
				loops:999,
				multiShot:true,
				onload: function() {
					CV_rssLoaded++;
					CV_checkPreload();
				//alert('The sound '+this.id+' loaded!');
				},
				volume: 50
			});
			soundManager.createSound({
				id: 'heroSteps',
				url: 'cv/sound/267499_purplewalrus23_footsteps-on-rough-gravel-26.mp3',
				autoLoad: true,
				autoPlay: false,
				loops:999,
				multiShot:true,
				onload: function() {
					CV_rssLoaded++;
					CV_checkPreload();
				//alert('The sound '+this.id+' loaded!');
				},
				volume: 20
			});



		}
	});

	
	
}

function CV_FlipObject(refName,dir){
	var ref = $('*[data-label="^'+refName+'"]').filter(":first");
	if(dir) {
		if(!$(ref).hasClass("cv-flip")) {
			$(ref).addClass("cv-flip");
		} 
	}else {
		if($(ref).hasClass("cv-flip")) {
			$(ref).removeClass("cv-flip");
		}
	}
}



function CV_wiggleOpacityDo(refName, speed, min, max) {
	var ref = $('*[data-label="'+refName+'"]').filter(":first");
	if($(ref).hasClass("cv-wiggle")) {
		$(ref).fadeTo(speed, (Math.random()*(max-min)+min), function() {
			CV_OnWiggleComplete (refName, speed, min, max);
		});
	}
}
function CV_OnWiggleComplete(refName, speed, min, max) {
	CV_wiggleOpacityDo(refName, speed, min, max);
}

function CV_wiggleOpacityStop(refName) {
	var ref = $('*[data-label="'+refName+'"]').filter(":first");
	if($(ref).hasClass("cv-wiggle")) {
		$(ref).removeClass("cv-wiggle");
	}
}
function CV_wiggleOpacityStart(refName, speed, min, max) {
	var ref = $('*[data-label="'+refName+'"]').filter(":first");
	if(!$(ref).hasClass("cv-wiggle")) {
		$(ref).addClass("cv-wiggle");
		CV_wiggleOpacityDo(refName, speed, min, max);
	}
}

