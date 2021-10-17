var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");



function tree(pageId) {

	var treeArray = new Array();
	treeArray = pageId.split('_');
	var treeString = "";
	NoOffFirstLineMenus = treeArray.length;

	for (i = 0; i < treeArray.length; i++ ) {

		treeString = treeString + treeArray[i];

		if (i != 0)
			copyBranch(treeString,'_');
		
		treeString = treeString + "_";
	
	}
	
	if (eval('Menu' + pageId + '[3]') == 0) {
		NoOffFirstLineMenus = treeArray.length + 1;
		eval('Menu' + NoOffFirstLineMenus + '=new Array("<div style = position:absolute><img src = /shared/wow-com/images/subnav/dot.gif></div>","#","/shared/wow-com/images/subnav/button_bg.gif",0,15,13);');
	}


}



var menuNum;
var result;

function copyBranch(startPoint, init) {
	var branchLength = eval('Menu' + startPoint + '[3]');
	var sourcePoint = new Array();
	sourcePoint = startPoint.split('_');
	var middle = init;

	if (middle == '_') {
		
		menuNum = sourcePoint.length;
		eval("Menu" + menuNum + "=Menu" + startPoint);
		eval("Menu" + menuNum + "[2]='/shared/wow-com/images/subnav/button_bg.gif'");
		
		//eval("Menu" + menuNum + "[2].length");
	}

	for (var i=1; i <= branchLength; i++) {
		
		
		destString = menuNum + middle + i;
		

		eval("Menu" + destString + "=Menu" + startPoint + "_" + i);

		
		
		if (eval('Menu' + startPoint + "_" + i + '[3]') != 0)
			copyBranch(startPoint + "_" + i,middle + i + '_');

	}

}

var urlString = document.location.href;

var urlStringMax = urlString.length;
	
urlString = urlString.substring(urlString.indexOf("//")+2, urlStringMax);
urlString = urlString.substring(urlString.indexOf("/"), urlStringMax);

if (urlString.indexOf("index.") != -1)
	urlStringMax = urlString.indexOf("index.");
else if (urlString.indexOf(".") != -1)
	urlStringMax = urlString.indexOf(".");
else
	urlStringMax = urlString.length;

urlString = urlString.substring(0, urlStringMax);

function findNode(startPoint, init, searchString) {

	var branchLength = eval('Menu' + startPoint + '[3]');
	var sourcePoint = new Array();
	sourcePoint = startPoint.split('_');
	var middle = init;
	var nodeUrl;
	
	if (searchString == "Game Guide") {
		result = "1";
		return;
	}
	
	
	
	if (middle == '_') {
		menuNum = sourcePoint.length;
	}

	for (var i=1; i <= branchLength; i++) {	
		
		destString = menuNum + middle + i;
		
		nodeUrl = eval("Menu" + startPoint + "_" + i + "[1]");
		
		if (nodeUrl.indexOf("index.") != -1)
			urlStringMax = nodeUrl.indexOf("index.");
		else if (nodeUrl.indexOf(".") != -1)
			urlStringMax = nodeUrl.indexOf(".");
		else
			urlStringMax = nodeUrl.length;
			
		nodeUrl = nodeUrl.substring(0, urlStringMax);
		
		
		if((eval("Menu" + startPoint + "_" + i + "[0]") == searchString) && (nodeUrl == urlString)) {
			result = startPoint + "_" + i;
			return;
		}
		
		
		if (eval('Menu' + startPoint + "_" + i + '[3]') != 0)
			findNode(startPoint + "_" + i,middle + i + '_',searchString);

	}

}findNode('1','_',pageId);

function printSubNav(treeId, mode) {

	var navLength;
	eval("navLength=Menu" + treeId + "[3]")
	
	if(mode == 1) {
		
		for (i=1; i <= navLength; i++) {
			document.write("<a href = '" + eval("Menu" + treeId + "_" + i + "[1]") + "' class = 'nav'>" + eval("Menu" + treeId + "_" + i + "[0]") + "</a>")
			if (i < navLength)
				document.write(" | ");
		}
		
		
		
	}
	
	if(mode == 2) {
	
	
		if (navLength>0){
			
			
			document.write("<a href = '" + eval("Menu" + treeId + "[1]") + "'>" + eval("Menu" + treeId + "[0]") + "</a> > ")
			for (i=1; i <= navLength; i++) {
				if (eval("Menu" + treeId + "_" + i + "[0]") != pageId) {
					document.write("<a href = '" + eval("Menu" + treeId + "_" + i + "[1]") + "'>" + eval("Menu" + treeId + "_" + i + "[0]") + "</a>")
					if (i < navLength)
						document.write(" | ");
				}
			}
			document.write("<p>");
		}
	
	
	}
	
	if(mode == 3) {
	
	
		if (navLength>0){
			
			
			if (eval("Menu" + treeId + "[0]") != pageId)
				document.write("<a href = '" + eval("Menu" + treeId + "[1]") + "' class = 'nav'>" + eval("Menu" + treeId + "[0]") + "</a> > ")
			else
				document.write("<span style = 'font-family:verdana, arial, sans-serif; font-size:10px; font-weight:bold; color:white;'>" + eval("Menu" + treeId + "[0]") + "</span> > ")
			for (i=1; i <= navLength; i++) {
				if (eval("Menu" + treeId + "_" + i + "[0]") != pageId) {
					document.write("<a href = '" + eval("Menu" + treeId + "_" + i + "[1]") + "' class = 'nav'>" + eval("Menu" + treeId + "_" + i + "[0]") + "</a>")
					if (i < navLength)
						document.write(" | ");
				} else {
				
					document.write("<span style = 'font-family:verdana, arial, sans-serif; font-size:10px; font-weight:bold; color:white;'>" + eval("Menu" + treeId + "_" + i + "[0]") + "</span>")
					if (i < navLength)
						document.write(" | ");
				
				}
			}

		}
	
	
	}	
	

}

function printRelatedLinks(treeId) {
	
	
	var treeArray = new Array();
	treeArray = treeId.split('_');
	var treeString = "";
	
	for (i = 0; i < treeArray.length-1; i++ ) {

		treeString = treeString + treeArray[i];

		if (i != treeArray.length-2)
			treeString = treeString + "_";
	
	}	
	
	printSubNav(treeString,2);

}



function printSubNav2(treeId) {
	
	
	var treeArray = new Array();
	treeArray = treeId.split('_');
	var treeString = "";
	
	for (i = 0; i < treeArray.length-1; i++ ) {

		treeString = treeString + treeArray[i];

		if (i != treeArray.length-2)
			treeString = treeString + "_";
	
	}	
	
	if (eval("Menu" + treeId + "[3]") == 0)
		printSubNav(treeString,3);
	else
		printSubNav(result,3);

}

tree(result);

}
/*
     FILE ARCHIVED ON 00:07:01 Jul 12, 2007 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:40:36 Oct 16, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 149.217
  exclusion.robots: 0.097
  exclusion.robots.policy: 0.074
  RedisCDXSource: 1.646
  esindex: 0.005
  LoadShardBlock: 124.109 (3)
  PetaboxLoader3.datanode: 114.413 (4)
  CDXLines.iter: 20.564 (3)
  load_resource: 106.011
  PetaboxLoader3.resolve: 54.112
*/