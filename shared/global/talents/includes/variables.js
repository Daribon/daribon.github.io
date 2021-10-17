var talent = new Array();
var rank = new Array();
var tree = new Array();
var nltree = new Array();
var nltalent = new Array();
var rankBottom = new Array();
var minLevel = new Array();
var hasDependentTalents = new Array();
var treeStartStop = new Array();
var rankTop = new Array();
var pointsTree = new Array();
var maxTierArray = new Array();
maxTierArray[0] = 1;
maxTierArray[1] = 1;
maxTierArray[2] = 1;

var template = new Array();

var levelMax = 60;
var levelMin = 10;
var tierNum = 7;

var rankPoints = levelMax - levelMin + 1;
var rankPointsMax = rankPoints;
var levelCurrent = levelMax;

var theRequiredLevel = levelMin - 1;
/*
     FILE ARCHIVED ON 19:55:24 Aug 21, 2006 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:28:57 Oct 17, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/