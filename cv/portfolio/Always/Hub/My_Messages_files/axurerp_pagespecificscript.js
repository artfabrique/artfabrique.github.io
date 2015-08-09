for(var i = 0; i < 513; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

	SetPanelState('u9', 'pd0u9','none','',500,'none','',500);

	SetPanelState('u181', 'pd1u181','none','',500,'none','',500);

SetGlobalVariableValue('reply', '0');

}

});
gv_vAlignTable['u370'] = 'top';gv_vAlignTable['u488'] = 'center';gv_vAlignTable['u36'] = 'top';gv_vAlignTable['u136'] = 'top';u216.tabIndex = 0;

u216.style.cursor = 'pointer';
$axure.eventManager.click('u216', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Sent_Messages.html');

}
});
gv_vAlignTable['u194'] = 'center';gv_vAlignTable['u492'] = 'top';gv_vAlignTable['u72'] = 'center';gv_vAlignTable['u97'] = 'top';gv_vAlignTable['u450'] = 'center';u231.tabIndex = 0;

u231.style.cursor = 'pointer';
$axure.eventManager.click('u231', function(e) {

if (('' + (GetGlobalVariableValue('PageName')) + '') == ('Sent Messages')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Sent_Message_View.html');

}
else
if (('' + (GetGlobalVariableValue('PageName')) + '') == ('My Messages')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('My_Message_View.html');

}
});

$axure.eventManager.mouseout('u231', function(e) {
if (!IsTrueMouseOut('u231',e)) return;
if (true) {

	SetPanelStateNext('u219',true,'none','',500,'none','',500);

}
});
gv_vAlignTable['u347'] = 'top';u78.tabIndex = 0;

u78.style.cursor = 'pointer';
$axure.eventManager.click('u78', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Pillow_App.html');

}
});

u166.style.cursor = 'pointer';
$axure.eventManager.click('u166', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Create_Pillow.html');

}
});
gv_vAlignTable['u298'] = 'top';gv_vAlignTable['u464'] = 'center';gv_vAlignTable['u201'] = 'center';gv_vAlignTable['u1'] = 'center';u215.tabIndex = 0;

u215.style.cursor = 'pointer';
$axure.eventManager.click('u215', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u11'] = 'center';gv_vAlignTable['u413'] = 'top';gv_vAlignTable['u332'] = 'center';gv_vAlignTable['u151'] = 'top';gv_vAlignTable['u26'] = 'center';gv_vAlignTable['u165'] = 'top';gv_vAlignTable['u378'] = 'center';gv_vAlignTable['u138'] = 'center';gv_vAlignTable['u425'] = 'top';gv_vAlignTable['u100'] = 'center';gv_vAlignTable['u54'] = 'center';gv_vAlignTable['u236'] = 'center';gv_vAlignTable['u214'] = 'center';gv_vAlignTable['u192'] = 'center';gv_vAlignTable['u150'] = 'top';gv_vAlignTable['u436'] = 'top';gv_vAlignTable['u400'] = 'center';gv_vAlignTable['u24'] = 'center';u80.tabIndex = 0;

u80.style.cursor = 'pointer';
$axure.eventManager.click('u80', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Questions.html');

}
});
gv_vAlignTable['u462'] = 'top';gv_vAlignTable['u346'] = 'center';gv_vAlignTable['u476'] = 'center';gv_vAlignTable['u318'] = 'center';gv_vAlignTable['u85'] = 'top';gv_vAlignTable['u268'] = 'center';gv_vAlignTable['u330'] = 'top';gv_vAlignTable['u227'] = 'top';gv_vAlignTable['u42'] = 'top';gv_vAlignTable['u501'] = 'top';gv_vAlignTable['u326'] = 'top';gv_vAlignTable['u37'] = 'top';gv_vAlignTable['u112'] = 'top';u46.tabIndex = 0;

u46.style.cursor = 'pointer';
$axure.eventManager.click('u46', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Products.html');

}
});
gv_vAlignTable['u18'] = 'center';gv_vAlignTable['u424'] = 'center';gv_vAlignTable['u74'] = 'top';gv_vAlignTable['u486'] = 'center';u79.tabIndex = 0;

u79.style.cursor = 'pointer';
$axure.eventManager.click('u79', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Products.html');

}
});
gv_vAlignTable['u176'] = 'center';gv_vAlignTable['u149'] = 'top';gv_vAlignTable['u111'] = 'top';gv_vAlignTable['u391'] = 'top';gv_vAlignTable['u125'] = 'center';gv_vAlignTable['u342'] = 'top';gv_vAlignTable['u161'] = 'top';gv_vAlignTable['u512'] = 'top';
$axure.eventManager.mouseover('u437', function(e) {
if (!IsTrueMouseOver('u437',e)) return;
if (true) {

	SetPanelStateNext('u417',true,'none','',500,'none','',500);

}
});
gv_vAlignTable['u356'] = 'center';gv_vAlignTable['u148'] = 'center';gv_vAlignTable['u110'] = 'center';gv_vAlignTable['u348'] = 'top';gv_vAlignTable['u490'] = 'center';
$axure.eventManager.mouseover('u305', function(e) {
if (!IsTrueMouseOver('u305',e)) return;
if (true) {

	SetPanelStateNext('u285',true,'none','',500,'none','',500);

}
});

$axure.eventManager.mouseover('u283', function(e) {
if (!IsTrueMouseOver('u283',e)) return;
if (true) {

	SetPanelStateNext('u263',true,'none','',500,'none','',500);

}
});
gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u160'] = 'center';u297.tabIndex = 0;

u297.style.cursor = 'pointer';
$axure.eventManager.click('u297', function(e) {

if (('' + (GetGlobalVariableValue('PageName')) + '') == ('Sent Messages')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Sent_Message_View.html');

}
else
if (('' + (GetGlobalVariableValue('PageName')) + '') == ('My Messages')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('My_Message_View.html');

}
});

$axure.eventManager.mouseout('u297', function(e) {
if (!IsTrueMouseOut('u297',e)) return;
if (true) {

	SetPanelStateNext('u285',true,'none','',500,'none','',500);

}
});
gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u49'] = 'center';gv_vAlignTable['u474'] = 'top';gv_vAlignTable['u228'] = 'top';gv_vAlignTable['u304'] = 'top';gv_vAlignTable['u282'] = 'top';gv_vAlignTable['u123'] = 'top';gv_vAlignTable['u278'] = 'center';gv_vAlignTable['u296'] = 'center';gv_vAlignTable['u435'] = 'top';gv_vAlignTable['u254'] = 'top';gv_vAlignTable['u173'] = 'top';gv_vAlignTable['u422'] = 'center';u495.tabIndex = 0;

u495.style.cursor = 'pointer';
$axure.eventManager.click('u495', function(e) {

if (('' + (GetGlobalVariableValue('PageName')) + '') == ('Sent Messages')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Sent_Message_View.html');

}
else
if (('' + (GetGlobalVariableValue('PageName')) + '') == ('My Messages')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('My_Message_View.html');

}
});

$axure.eventManager.mouseout('u495', function(e) {
if (!IsTrueMouseOut('u495',e)) return;
if (true) {

	SetPanelStateNext('u483',true,'none','',500,'none','',500);

}
});
gv_vAlignTable['u303'] = 'top';gv_vAlignTable['u281'] = 'top';gv_vAlignTable['u94'] = 'center';gv_vAlignTable['u122'] = 'center';gv_vAlignTable['u358'] = 'center';gv_vAlignTable['u420'] = 'center';gv_vAlignTable['u5'] = 'top';gv_vAlignTable['u51'] = 'center';gv_vAlignTable['u434'] = 'center';u253.tabIndex = 0;

u253.style.cursor = 'pointer';
$axure.eventManager.click('u253', function(e) {

if (('' + (GetGlobalVariableValue('PageName')) + '') == ('Sent Messages')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Sent_Message_View.html');

}
else
if (('' + (GetGlobalVariableValue('PageName')) + '') == ('My Messages')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('My_Message_View.html');

}
});

$axure.eventManager.mouseout('u253', function(e) {
if (!IsTrueMouseOut('u253',e)) return;
if (true) {

	SetPanelStateNext('u241',true,'none','',500,'none','',500);

}
});
gv_vAlignTable['u172'] = 'top';gv_vAlignTable['u470'] = 'top';gv_vAlignTable['u410'] = 'center';gv_vAlignTable['u359'] = 'top';gv_vAlignTable['u472'] = 'center';gv_vAlignTable['u302'] = 'center';gv_vAlignTable['u280'] = 'center';gv_vAlignTable['u500'] = 'center';gv_vAlignTable['u414'] = 'top';gv_vAlignTable['u509'] = 'top';gv_vAlignTable['u316'] = 'top';gv_vAlignTable['u294'] = 'top';gv_vAlignTable['u135'] = 'top';gv_vAlignTable['u108'] = 'center';gv_vAlignTable['u252'] = 'center';gv_vAlignTable['u171'] = 'top';gv_vAlignTable['u447'] = 'top';gv_vAlignTable['u386'] = 'top';gv_vAlignTable['u266'] = 'center';gv_vAlignTable['u64'] = 'center';
$axure.eventManager.mouseover('u239', function(e) {
if (!IsTrueMouseOver('u239',e)) return;
if (true) {

	SetPanelStateNext('u219',true,'none','',500,'none','',500);

}
});
gv_vAlignTable['u120'] = 'center';gv_vAlignTable['u315'] = 'top';gv_vAlignTable['u293'] = 'top';gv_vAlignTable['u21'] = 'top';gv_vAlignTable['u134'] = 'center';gv_vAlignTable['u432'] = 'center';gv_vAlignTable['u170'] = 'center';gv_vAlignTable['u446'] = 'center';gv_vAlignTable['u82'] = 'center';gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u238'] = 'top';gv_vAlignTable['u502'] = 'top';gv_vAlignTable['u314'] = 'center';gv_vAlignTable['u292'] = 'center';gv_vAlignTable['u369'] = 'top';gv_vAlignTable['u250'] = 'top';gv_vAlignTable['u58'] = 'center';gv_vAlignTable['u34'] = 'center';gv_vAlignTable['u90'] = 'top';gv_vAlignTable['u444'] = 'center';gv_vAlignTable['u164'] = 'center';gv_vAlignTable['u368'] = 'center';gv_vAlignTable['u430'] = 'top';
$axure.eventManager.mouseover('u327', function(e) {
if (!IsTrueMouseOver('u327',e)) return;
if (true) {

	SetPanelStateNext('u307',true,'none','',500,'none','',500);

}
});
gv_vAlignTable['u146'] = 'center';gv_vAlignTable['u52'] = 'top';gv_vAlignTable['u426'] = 'top';gv_vAlignTable['u274'] = 'center';gv_vAlignTable['u388'] = 'center';u47.tabIndex = 0;

u47.style.cursor = 'pointer';
$axure.eventManager.click('u47', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Questions.html');

}
});
gv_vAlignTable['u212'] = 'center';u190.tabIndex = 0;

u190.style.cursor = 'pointer';
$axure.eventManager.click('u190', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Rules.html');

}
});
gv_vAlignTable['u510'] = 'top';u407.tabIndex = 0;

u407.style.cursor = 'pointer';
$axure.eventManager.click('u407', function(e) {

if (('' + (GetGlobalVariableValue('PageName')) + '') == ('Sent Messages')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Sent_Message_View.html');

}
else
if (('' + (GetGlobalVariableValue('PageName')) + '') == ('My Messages')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('My_Message_View.html');

}
});

$axure.eventManager.mouseout('u407', function(e) {
if (!IsTrueMouseOut('u407',e)) return;
if (true) {

	SetPanelStateNext('u395',true,'none','',500,'none','',500);

}
});
gv_vAlignTable['u28'] = 'center';gv_vAlignTable['u60'] = 'top';u118.tabIndex = 0;

u118.style.cursor = 'pointer';
$axure.eventManager.click('u118', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Questions.html');

}
});
gv_vAlignTable['u322'] = 'center';gv_vAlignTable['u457'] = 'top';gv_vAlignTable['u276'] = 'top';gv_vAlignTable['u249'] = 'top';gv_vAlignTable['u130'] = 'center';gv_vAlignTable['u406'] = 'center';gv_vAlignTable['u384'] = 'center';gv_vAlignTable['u22'] = 'top';gv_vAlignTable['u144'] = 'center';gv_vAlignTable['u442'] = 'center';
$axure.eventManager.mouseover('u261', function(e) {
if (!IsTrueMouseOver('u261',e)) return;
if (true) {

	SetPanelStateNext('u241',true,'none','',500,'none','',500);

}
});
gv_vAlignTable['u456'] = 'center';u275.tabIndex = 0;

u275.style.cursor = 'pointer';
$axure.eventManager.click('u275', function(e) {

if (('' + (GetGlobalVariableValue('PageName')) + '') == ('Sent Messages')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Sent_Message_View.html');

}
else
if (('' + (GetGlobalVariableValue('PageName')) + '') == ('My Messages')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('My_Message_View.html');

}
});

$axure.eventManager.mouseout('u275', function(e) {
if (!IsTrueMouseOut('u275',e)) return;
if (true) {

	SetPanelStateNext('u263',true,'none','',500,'none','',500);

}
});
gv_vAlignTable['u248'] = 'center';gv_vAlignTable['u210'] = 'center';gv_vAlignTable['u325'] = 'top';gv_vAlignTable['u30'] = 'center';gv_vAlignTable['u224'] = 'center';u341.tabIndex = 0;

u341.style.cursor = 'pointer';
$axure.eventManager.click('u341', function(e) {

if (('' + (GetGlobalVariableValue('PageName')) + '') == ('Sent Messages')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Sent_Message_View.html');

}
else
if (('' + (GetGlobalVariableValue('PageName')) + '') == ('My Messages')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('My_Message_View.html');

}
});

$axure.eventManager.mouseout('u341', function(e) {
if (!IsTrueMouseOut('u341',e)) return;
if (true) {

	SetPanelStateNext('u329',true,'none','',500,'none','',500);

}
});
gv_vAlignTable['u260'] = 'top';gv_vAlignTable['u59'] = 'top';u189.tabIndex = 0;

u189.style.cursor = 'pointer';
$axure.eventManager.click('u189', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Sent_Messages.html');

}
});
gv_vAlignTable['u35'] = 'top';gv_vAlignTable['u106'] = 'center';gv_vAlignTable['u404'] = 'top';gv_vAlignTable['u382'] = 'top';gv_vAlignTable['u142'] = 'center';gv_vAlignTable['u340'] = 'center';gv_vAlignTable['u396'] = 'top';gv_vAlignTable['u237'] = 'top';u156.tabIndex = 0;

u156.style.cursor = 'pointer';
$axure.eventManager.click('u156', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Questions.html');

}
});
gv_vAlignTable['u491'] = 'top';u188.tabIndex = 0;

u188.style.cursor = 'pointer';
$axure.eventManager.click('u188', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u354'] = 'center';gv_vAlignTable['u403'] = 'top';gv_vAlignTable['u381'] = 'top';gv_vAlignTable['u222'] = 'center';gv_vAlignTable['u458'] = 'top';u155.tabIndex = 0;

u155.style.cursor = 'pointer';
$axure.eventManager.click('u155', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Products.html');

}
});
gv_vAlignTable['u272'] = 'top';gv_vAlignTable['u402'] = 'center';gv_vAlignTable['u336'] = 'center';gv_vAlignTable['u104'] = 'center';gv_vAlignTable['u308'] = 'top';gv_vAlignTable['u259'] = 'top';gv_vAlignTable['u380'] = 'center';
$axure.eventManager.mouseover('u503', function(e) {
if (!IsTrueMouseOver('u503',e)) return;
if (true) {

	SetPanelStateNext('u483',true,'none','',500,'none','',500);

}
});
gv_vAlignTable['u13'] = 'center';u208.tabIndex = 0;

u208.style.cursor = 'pointer';
$axure.eventManager.click('u208', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Rules.html');

}
});
gv_vAlignTable['u352'] = 'top';gv_vAlignTable['u271'] = 'top';gv_vAlignTable['u312'] = 'center';gv_vAlignTable['u418'] = 'top';gv_vAlignTable['u366'] = 'center';gv_vAlignTable['u98'] = 'top';gv_vAlignTable['u158'] = 'center';gv_vAlignTable['u220'] = 'top';gv_vAlignTable['u3'] = 'top';u117.tabIndex = 0;

u117.style.cursor = 'pointer';
$axure.eventManager.click('u117', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Products.html');

}
});

$axure.eventManager.mouseover('u415', function(e) {
if (!IsTrueMouseOver('u415',e)) return;
if (true) {

	SetPanelStateNext('u395',true,'none','',500,'none','',500);

}
});

$axure.eventManager.mouseover('u393', function(e) {
if (!IsTrueMouseOver('u393',e)) return;
if (true) {

	SetPanelStateNext('u373',true,'none','',500,'none','',500);

}
});
gv_vAlignTable['u234'] = 'center';gv_vAlignTable['u73'] = 'top';gv_vAlignTable['u270'] = 'center';u199.tabIndex = 0;

u199.style.cursor = 'pointer';
$axure.eventManager.click('u199', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Rules.html');

}
});
u319.tabIndex = 0;

u319.style.cursor = 'pointer';
$axure.eventManager.click('u319', function(e) {

if (('' + (GetGlobalVariableValue('PageName')) + '') == ('Sent Messages')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Sent_Message_View.html');

}
else
if (('' + (GetGlobalVariableValue('PageName')) + '') == ('My Messages')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('My_Message_View.html');

}
});

$axure.eventManager.mouseout('u319', function(e) {
if (!IsTrueMouseOut('u319',e)) return;
if (true) {

	SetPanelStateNext('u307',true,'none','',500,'none','',500);

}
});
gv_vAlignTable['u92'] = 'center';gv_vAlignTable['u102'] = 'center';gv_vAlignTable['u56'] = 'center';gv_vAlignTable['u300'] = 'center';u116.tabIndex = 0;

u116.style.cursor = 'pointer';
$axure.eventManager.click('u116', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Pillow_App.html');

}
});
gv_vAlignTable['u392'] = 'top';gv_vAlignTable['u469'] = 'top';gv_vAlignTable['u87'] = 'center';gv_vAlignTable['u508'] = 'center';gv_vAlignTable['u68'] = 'center';gv_vAlignTable['u226'] = 'center';u198.tabIndex = 0;

u198.style.cursor = 'pointer';
$axure.eventManager.click('u198', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Sent_Messages.html');

}
});
gv_vAlignTable['u364'] = 'top';gv_vAlignTable['u452'] = 'top';gv_vAlignTable['u338'] = 'top';u385.tabIndex = 0;

u385.style.cursor = 'pointer';
$axure.eventManager.click('u385', function(e) {

if (('' + (GetGlobalVariableValue('PageName')) + '') == ('Sent Messages')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Sent_Message_View.html');

}
else
if (('' + (GetGlobalVariableValue('PageName')) + '') == ('My Messages')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('My_Message_View.html');

}
});

$axure.eventManager.mouseout('u385', function(e) {
if (!IsTrueMouseOut('u385',e)) return;
if (true) {

	SetPanelStateNext('u373',true,'none','',500,'none','',500);

}
});
gv_vAlignTable['u89'] = 'center';gv_vAlignTable['u113'] = 'top';gv_vAlignTable['u232'] = 'top';gv_vAlignTable['u468'] = 'center';gv_vAlignTable['u246'] = 'center';gv_vAlignTable['u62'] = 'center';u363.tabIndex = 0;

u363.style.cursor = 'pointer';
$axure.eventManager.click('u363', function(e) {

if (('' + (GetGlobalVariableValue('PageName')) + '') == ('Sent Messages')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Sent_Message_View.html');

}
else
if (('' + (GetGlobalVariableValue('PageName')) + '') == ('My Messages')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('My_Message_View.html');

}
});

$axure.eventManager.mouseout('u363', function(e) {
if (!IsTrueMouseOut('u363',e)) return;
if (true) {

	SetPanelStateNext('u351',true,'none','',500,'none','',500);

}
});
gv_vAlignTable['u448'] = 'top';gv_vAlignTable['u132'] = 'center';gv_vAlignTable['u290'] = 'center';gv_vAlignTable['u408'] = 'top';gv_vAlignTable['u187'] = 'center';gv_vAlignTable['u70'] = 'center';gv_vAlignTable['u412'] = 'center';gv_vAlignTable['u14'] = 'top';gv_vAlignTable['u362'] = 'center';gv_vAlignTable['u376'] = 'center';gv_vAlignTable['u75'] = 'top';gv_vAlignTable['u286'] = 'top';
$axure.eventManager.mouseover('u349', function(e) {
if (!IsTrueMouseOver('u349',e)) return;
if (true) {

	SetPanelStateNext('u329',true,'none','',500,'none','',500);

}
});
gv_vAlignTable['u168'] = 'center';gv_vAlignTable['u230'] = 'center';gv_vAlignTable['u127'] = 'center';gv_vAlignTable['u506'] = 'center';gv_vAlignTable['u484'] = 'top';gv_vAlignTable['u32'] = 'center';gv_vAlignTable['u244'] = 'center';gv_vAlignTable['u390'] = 'center';gv_vAlignTable['u310'] = 'center';gv_vAlignTable['u478'] = 'center';u207.tabIndex = 0;

u207.style.cursor = 'pointer';
$axure.eventManager.click('u207', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Sent_Messages.html');

}
});
gv_vAlignTable['u185'] = 'center';gv_vAlignTable['u324'] = 'center';gv_vAlignTable['u479'] = 'top';
$axure.eventManager.mouseover('u459', function(e) {
if (!IsTrueMouseOver('u459',e)) return;
if (true) {

	SetPanelStateNext('u439',true,'none','',500,'none','',500);

}
});
gv_vAlignTable['u360'] = 'top';u45.tabIndex = 0;

u45.style.cursor = 'pointer';
$axure.eventManager.click('u45', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Pillow_App.html');

}
});
gv_vAlignTable['u374'] = 'top';gv_vAlignTable['u428'] = 'center';u206.tabIndex = 0;

u206.style.cursor = 'pointer';
$axure.eventManager.click('u206', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u242'] = 'top';gv_vAlignTable['u96'] = 'center';gv_vAlignTable['u344'] = 'center';gv_vAlignTable['u496'] = 'top';gv_vAlignTable['u337'] = 'top';gv_vAlignTable['u256'] = 'center';gv_vAlignTable['u454'] = 'center';gv_vAlignTable['u174'] = 'top';gv_vAlignTable['u440'] = 'top';gv_vAlignTable['u205'] = 'center';gv_vAlignTable['u183'] = 'center';
$axure.eventManager.mouseover('u481', function(e) {
if (!IsTrueMouseOver('u481',e)) return;
if (true) {

	SetPanelStateNext('u461',true,'none','',500,'none','',500);

}
});
u197.tabIndex = 0;

u197.style.cursor = 'pointer';
$axure.eventManager.click('u197', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
u473.tabIndex = 0;

u473.style.cursor = 'pointer';
$axure.eventManager.click('u473', function(e) {

if (('' + (GetGlobalVariableValue('PageName')) + '') == ('Sent Messages')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Sent_Message_View.html');

}
else
if (('' + (GetGlobalVariableValue('PageName')) + '') == ('My Messages')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('My_Message_View.html');

}
});

$axure.eventManager.mouseout('u473', function(e) {
if (!IsTrueMouseOut('u473',e)) return;
if (true) {

	SetPanelStateNext('u461',true,'none','',500,'none','',500);

}
});
gv_vAlignTable['u39'] = 'center';gv_vAlignTable['u128'] = 'top';gv_vAlignTable['u288'] = 'center';gv_vAlignTable['u398'] = 'center';gv_vAlignTable['u66'] = 'center';gv_vAlignTable['u480'] = 'top';gv_vAlignTable['u178'] = 'center';gv_vAlignTable['u140'] = 'center';gv_vAlignTable['u498'] = 'center';gv_vAlignTable['u196'] = 'center';gv_vAlignTable['u494'] = 'center';u154.tabIndex = 0;

u154.style.cursor = 'pointer';
$axure.eventManager.click('u154', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Pillow_App.html');

}
});
gv_vAlignTable['u264'] = 'top';
$axure.eventManager.mouseover('u371', function(e) {
if (!IsTrueMouseOver('u371',e)) return;
if (true) {

	SetPanelStateNext('u351',true,'none','',500,'none','',500);

}
});
gv_vAlignTable['u466'] = 'center';u429.tabIndex = 0;

u429.style.cursor = 'pointer';
$axure.eventManager.click('u429', function(e) {

if (('' + (GetGlobalVariableValue('PageName')) + '') == ('Sent Messages')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Sent_Message_View.html');

}
else
if (('' + (GetGlobalVariableValue('PageName')) + '') == ('My Messages')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('My_Message_View.html');

}
});

$axure.eventManager.mouseout('u429', function(e) {
if (!IsTrueMouseOut('u429',e)) return;
if (true) {

	SetPanelStateNext('u417',true,'none','',500,'none','',500);

}
});
gv_vAlignTable['u203'] = 'center';gv_vAlignTable['u84'] = 'center';gv_vAlignTable['u258'] = 'center';gv_vAlignTable['u320'] = 'top';u217.tabIndex = 0;

u217.style.cursor = 'pointer';
$axure.eventManager.click('u217', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Rules.html');

}
});
gv_vAlignTable['u41'] = 'center';gv_vAlignTable['u334'] = 'center';gv_vAlignTable['u511'] = 'top';u451.tabIndex = 0;

u451.style.cursor = 'pointer';
$axure.eventManager.click('u451', function(e) {

if (('' + (GetGlobalVariableValue('PageName')) + '') == ('Sent Messages')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Sent_Message_View.html');

}
else
if (('' + (GetGlobalVariableValue('PageName')) + '') == ('My Messages')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('My_Message_View.html');

}
});

$axure.eventManager.mouseout('u451', function(e) {
if (!IsTrueMouseOut('u451',e)) return;
if (true) {

	SetPanelStateNext('u439',true,'none','',500,'none','',500);

}
});
