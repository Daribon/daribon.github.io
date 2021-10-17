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

if (variableIsSite)
	query = window.location.search.substring(1);

var vars = query;

var saveTemplate = new Array();

for (var e=0;e<vars.length;e++) {
//    var saveTemplate = vars[e].split(",");
    saveTemplate[e] = vars.charAt(e);
}



for (var treeLoop = 0; treeLoop<tree.length; treeLoop++){
	pointsTree[treeLoop] = 0;
}

var numberOfTrees = tree.length;

var pointsTier=new Array(numberOfTrees);
for (i=0; i <numberOfTrees; i++)
	pointsTier[i]=new Array(tierNum);

var tierLoop = 0;

while (tierLoop < tierNum) {
	for (var treeLoop = 0; treeLoop < numberOfTrees; treeLoop++) {
		pointsTier[treeLoop][tierLoop] = 0;
	}
	tierLoop++;	
}

tierLoop = 0;
		
var talentInsertID = 0;

//filling in new arrays:
//minLevel array: minimum level required for the talent
//rankBottom array: array used to display info about the ranks for the talents displayed at the bottom of the page

if (query) {



	while (talent[talentInsertID]) {
		minLevel[talentInsertID] = getMinLevel(talentInsertID); //fill in the minLevel array
		rankBottom[talentInsertID] = [1, rank[talentInsertID][0]];	


		talentValue = eval(saveTemplate[talentInsertID]);
		if (!talentValue)
			savedRank = 0;		
		else
			savedRank = talentValue;
		
		savedRankCurrent = savedRank - 1;
		savedRankNext = savedRank + 1;
		
		if (savedRankCurrent < 0)
			savedRankCurrent = 0;
		
		if (talent[talentInsertID][2] != 1)	
			rankTop[talentInsertID] = [savedRank, rank[talentInsertID][savedRankCurrent], rank[talentInsertID][savedRankNext]];	
		else
			rankTop[talentInsertID] = [savedRank, rank[talentInsertID][0]];	
		
		pointsInDaTree = talent[talentInsertID][0];
		pointsTree[pointsInDaTree] += savedRank;
		pointsTier[pointsInDaTree][talent[talentInsertID][4]-1] += savedRank;

		rankPoints -= savedRank;
		theRequiredLevel += savedRank;
	
		talentInsertID++;
	}

	var q = 0;

while (q < talent.length){
		hasDependentTalents[q] = 0;;
	q++;

}

q=0;

while (q < talent.length){
	if (talent[q][5])
		hasDependentTalents[talent[q][5][0]]++;
	q++;
}
	
maxTierArray[0] = getMaxTier(0);
maxTierArray[1] = getMaxTier(1);
maxTierArray[2] = getMaxTier(2); 
	
} else {

	while (talent[talentInsertID]) {
		minLevel[talentInsertID] = getMinLevel(talentInsertID); //fill in the minLevel array
		rankBottom[talentInsertID] = [1, rank[talentInsertID][0]];	
		
		if (talent[talentInsertID][2] != 1)	
			rankTop[talentInsertID] = [0, rank[talentInsertID][0], rank[talentInsertID][1]];	
		else
			rankTop[talentInsertID] = [0, rank[talentInsertID][0]];	
			
		talentInsertID++;
	}

var q = 0;

while (q < talent.length){
		hasDependentTalents[q] = 0;;
	q++;
}

q=0;

while (q < talent.length){
	if (talent[q][5])
		hasDependentTalents[talent[q][5][0]]++;
	q++;
}





}
jsLoaded=true;//needed for ajax script loading


}
/*
     FILE ARCHIVED ON 16:39:52 Oct 13, 2007 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:06:16 Sep 08, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 996.388
  exclusion.robots: 0.086
  exclusion.robots.policy: 0.078
  RedisCDXSource: 682.142
  esindex: 0.008
  LoadShardBlock: 294.927 (3)
  PetaboxLoader3.resolve: 107.784 (4)
  PetaboxLoader3.datanode: 219.014 (4)
  CDXLines.iter: 16.818 (3)
  load_resource: 55.803
*/