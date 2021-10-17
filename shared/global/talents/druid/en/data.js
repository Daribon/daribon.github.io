var i = 0;
var t = 0;


var className = "Druid Talents";
var talentPath = "/info/basics/talents/";

tree[i] = "Balance"; i++;
tree[i] = "Feral Combat"; i++;
tree[i] = "Restoration"; i++;

i = 0;

talent[i] = [0, "Improved Wrath", 5, 1, 1]; i++;
talent[i] = [0, "Nature's Grasp", 1, 2, 1]; i++;
talent[i] = [0, "Improved Nature's Grasp", 4, 3, 1, [getTalentID("Nature's Grasp"),1]]; i++;
talent[i] = [0, "Improved Entangling Roots", 3, 1, 2]; i++; 
talent[i] = [0, "Improved Moonfire", 5, 2, 2]; i++;
talent[i] = [0, "Natural Weapons", 5, 3, 2]; i++;
talent[i] = [0, "Natural Shapeshifter", 3, 4, 2]; i++;
talent[i] = [0, "Improved Thorns", 3, 1, 3]; i++;
talent[i] = [0, "Omen of Clarity", 1, 3, 3, [getTalentID("Natural Weapons"),5]]; i++;
talent[i] = [0, "Nature's Reach", 2, 4, 3]; i++;
talent[i] = [0, "Vengeance", 5, 2, 4, [getTalentID("Improved Moonfire"),5]]; i++;
talent[i] = [0, "Improved Starfire", 5, 3, 4]; i++;
talent[i] = [0, "Nature's Grace", 1, 2, 5]; i++;
talent[i] = [0, "Moonglow", 3, 3, 5]; i++;
talent[i] = [0, "Moonfury", 5, 2, 6, [getTalentID("Nature's Grace"),1]]; i++;
talent[i] = [0, "Moonkin Form", 1, 2, 7]; i++;

treeStartStop[t] = i -1;
t++;

//feral combat talents
talent[i] = [1, "Ferocity", 5, 2, 1]; i++;
talent[i] = [1, "Feral Aggression", 5, 3, 1]; i++;
talent[i] = [1, "Feral Instinct", 5, 1, 2]; i++;
talent[i] = [1, "Brutal Impact", 2, 2, 2]; i++;
talent[i] = [1, "Thick Hide", 5, 3, 2]; i++;
talent[i] = [1, "Feline Swiftness", 2, 1, 3]; i++;
talent[i] = [1, "Feral Charge", 1, 2, 3]; i++;
talent[i] = [1, "Sharpened Claws", 3, 3, 3]; i++;
talent[i] = [1, "Improved Shred", 2, 1, 4]; i++;
talent[i] = [1, "Predatory Strikes", 3, 2, 4]; i++;
talent[i] = [1, "Blood Frenzy", 2, 3, 4, [getTalentID("Sharpened Claws"),3]]; i++;
talent[i] = [1, "Primal Fury", 2, 4, 4, [getTalentID("Sharpened Claws"),3]]; i++;
talent[i] = [1, "Savage Fury", 2, 1, 5]; i++;
talent[i] = [1, "Faerie Fire (Feral)", 1, 3, 5]; i++;
talent[i] = [1, "Heart of the Wild", 5, 2, 6, [getTalentID("Predatory Strikes"),3]]; i++;
talent[i] = [1, "Leader of the Pack", 1, 2, 7]; i++;

treeStartStop[t] = i -1;
t++;

//restoration talents
talent[i] = [2, "Improved Mark of the Wild", 5, 2, 1]; i++;
talent[i] = [2, "Furor", 5, 3, 1]; i++;
talent[i] = [2, "Improved Healing Touch", 5, 1, 2]; i++;
talent[i] = [2, "Nature's Focus", 5, 2, 2]; i++;
talent[i] = [2, "Improved Enrage", 2, 3, 2]; i++;
talent[i] = [2, "Reflection", 3, 2, 3]; i++;
talent[i] = [2, "Insect Swarm", 1, 3, 3]; i++;
talent[i] = [2, "Subtlety", 5, 4, 3]; i++;
talent[i] = [2, "Tranquil Spirit", 5, 2, 4]; i++;
talent[i] = [2, "Improved Rejuvenation", 3, 4, 4]; i++;
talent[i] = [2, "Nature's Swiftness", 1, 1, 5, [getTalentID("Improved Healing Touch"),5]]; i++;
talent[i] = [2, "Gift of Nature", 5, 3, 5, [getTalentID("Insect Swarm"),1]]; i++;
talent[i] = [2, "Improved Tranquility", 2, 4, 5]; i++;
talent[i] = [2, "Improved Regrowth", 5, 3, 6]; i++;
talent[i] = [2, "Innervate", 1, 2, 7, [getTalentID("Tranquil Spirit"),5]]; i++;

treeStartStop[t] = i -1;
t++;

i = 0;


//Balance Talents Begin

//Improved Wrath - Balance
rank[i] = [
"Reduces the cast time of your Wrath spell by 0.1 sec.",
"Reduces the cast time of your Wrath spell by 0.2 sec.",
"Reduces the cast time of your Wrath spell by 0.3 sec.",
"Reduces the cast time of your Wrath spell by 0.4 sec.",
"Reduces the cast time of your Wrath spell by 0.5 sec."
		];
i++;		
		
//Nature's Grasp - Balance
rank[i] = [
		"50 Mana<br><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>1 min cooldown</span><br>While active, any time an enemy strikes the caster they have a 35% chance to become afflicted by Entangling Roots (Rank 1).  Only useable outdoors. 1 charge. Lasts 45 sec."
		];
i++;		

//Improved Nature's Grasp - Balance
rank[i] = [
"Increases the chance for your Nature's Grasp to entangle an enemy by 15%.",
"Increases the chance for your Nature's Grasp to entangle an enemy by 30%.",
"Increases the chance for your Nature's Grasp to entangle an enemy by 45%.",
"Increases the chance for your Nature's Grasp to entangle an enemy by 65%."
		];
i++;		
		
//Improved Entangling Roots - Balance
rank[i] = [
"Gives you a 40% chance to avoid interruption caused by damage while casting Entangling Roots.",
"Gives you a 70% chance to avoid interruption caused by damage while casting Entangling Roots.",
"Gives you a 100% chance to avoid interruption caused by damage while casting Entangling Roots."
		];
i++;		

//Improved Moonfire - Balance
rank[i] = [
"Increases the damage and critical strike chance of your Moonfire spell by 2%.",
"Increases the damage and critical strike chance of your Moonfire spell by 4%.",
"Increases the damage and critical strike chance of your Moonfire spell by 6%.",
"Increases the damage and critical strike chance of your Moonfire spell by 8%.",
"Increases the damage and critical strike chance of your Moonfire spell by 10%."
		];
i++;		

//Natural Weapons - Balance
rank[i] = [
"Increases the damage you deal with physical attacks in all forms by 2%.",
"Increases the damage you deal with physical attacks in all forms by 4%.",
"Increases the damage you deal with physical attacks in all forms by 6%.",
"Increases the damage you deal with physical attacks in all forms by 8%.",
"Increases the damage you deal with physical attacks in all forms by 10%."
		];
i++;		
		
//Natural Shapeshifter - Balance 
rank[i] = [
"Reduces the mana cost of shapeshifting by 10%",
"Reduces the mana cost of shapeshifting by 20%",
"Reduces the mana cost of shapeshifting by 30%"
		];		
i++;		


//Improved Thorns - Balance
rank[i] = [ 
"Increases damage caused by your Thorns spell by 25%",
"Increases damage caused by your Thorns spell by 50%",
"Increases damage caused by your Thorns spell by 75%"
		];
i++;		


//Omen of Clarity - Balance 
rank[i] = [
		"120 Mana<br><span style=text-align:left;float:left;>Instant cast</span><br>Imbues the Druid with natural energy. Each of the druid's melee attacks has a chance of causing the caster to enter a Clearcasting state. The Clearcasting state reduces the Mana, Rage or Energy cost of your next damage or healing spell or offensive ability by 100%. Lasts 5 min."
		];
i++;		

//Nature's Reach - Balance
rank[i] = [
"Increases the range of your Wrath, Entangling Roots, Faerie Fire, Moonfire, Starfire, and Hurricane spells by 10%.",
"Increases the range of your Wrath, Entangling Roots, Faerie Fire, Moonfire, Starfire, and Hurricane spells by 20%."
		];
i++;		

//Vengeance - Balance
rank[i] = [
"Increases the critical strike damage bonus of your Starfire, Moonfire, and Wrath spells by 20%.",
"Increases the critical strike damage bonus of your Starfire, Moonfire, and Wrath spells by 40%.",
"Increases the critical strike damage bonus of your Starfire, Moonfire, and Wrath spells by 60%.",
"Increases the critical strike damage bonus of your Starfire, Moonfire, and Wrath spells by 80%.",
"Increases the critical strike damage bonus of your Starfire, Moonfire, and Wrath spells by 100%."
		];
i++;		

//Improved Starfire - Balance  
rank[i] = [
"Reduces the cast time of Starfire by .1 sec and has a 3% chance to stun the target for 3 sec.",
"Reduces the cast time of Starfire by .2 sec and has a 6% chance to stun the target for 3 sec.",
"Reduces the cast time of Starfire by .3 sec and has a 9% chance to stun the target for 3 sec.",
"Reduces the cast time of Starfire by .4 sec and has a 12% chance to stun the target for 3 sec.",
"Reduces the cast time of Starfire by .5 sec and has a 15% chance to stun the target for 3 sec."
		];
i++;		

//Nature's Grace - Balance
rank[i] = [
		"All spell criticals grace you with a blessing of nature, reducing the casting time of your next spell by 0.5 sec."
		];
i++;		

//Moonglow - Balance
rank[i] = [
"Reduces the Mana cost of your Moonfire, Starfire, Wrath, Healing Touch, Regrowth and Rejuvenation spells by 3%.",
"Reduces the Mana cost of your Moonfire, Starfire, Wrath, Healing Touch, Regrowth and Rejuvenation spells by 6%.",
"Reduces the Mana cost of your Moonfire, Starfire, Wrath, Healing Touch, Regrowth and Rejuvenation spells by 9%."
		];		
i++;		

//Moonfury - Balance  			
rank[i] = [
"Increases the damage done by your Starfire, Moonfire and Wrath spells by 2%.",
"Increases the damage done by your Starfire, Moonfire and Wrath spells by 4%.",
"Increases the damage done by your Starfire, Moonfire and Wrath spells by 6%.",
"Increases the damage done by your Starfire, Moonfire and Wrath spells by 8%.",
"Increases the damage done by your Starfire, Moonfire and Wrath spells by 10%."
		];
i++;		


//Moonkin Form - Balance  
rank[i] = [
		"684 Mana<br><span style=text-align:left;float:left;>Instant cast</span><br>Transforms the druid into Moonkin Form. While in this form armor is increased by 360% and all party members within 30 yards have their spell critical chance increased by 3%. The Moonkin can only cast Balance spells while shapeshifted.<br><br>The act of shapeshifting frees the caster of Polymorph and Movement Impairing effects."
		];
i++;










//Ferocity - Feral 
rank[i] = [
"Reduces the cost of your Maul, Swipe, Claw, and Rake abilities by 1 Rage or Energy.",
"Reduces the cost of your Maul, Swipe, Claw, and Rake abilities by 2 Rage or Energy.",
"Reduces the cost of your Maul, Swipe, Claw, and Rake abilities by 3 Rage or Energy.",
"Reduces the cost of your Maul, Swipe, Claw, and Rake abilities by 4 Rage or Energy.",
"Reduces the cost of your Maul, Swipe, Claw, and Rake abilities by 5 Rage or Energy."
		];
i++;

//Feral Aggression - Feral
rank[i] = [
"Increases the Attack Power reduction of your Demoralizing Roar by 8% and the damage caused by your Ferocious Bite by 3%.",
"Increases the Attack Power reduction of your Demoralizing Roar by 16% and the damage caused by your Ferocious Bite by 6%.",
"Increases the Attack Power reduction of your Demoralizing Roar by 24% and the damage caused by your Ferocious Bite by 9%.",
"Increases the Attack Power reduction of your Demoralizing Roar by 32% and the damage caused by your Ferocious Bite by 12%.",
"Increases the Attack Power reduction of your Demoralizing Roar by 40% and the damage caused by your Ferocious Bite by 15%."
		];
i++;

//Feral Instinct - Feral
rank[i] = [
"Increases threat caused in Bear and Dire Bear Form by 3% and reduces the chance enemies have to detect you while Prowling.",
"Increases threat caused in Bear and Dire Bear Form by 6% and reduces the chance enemies have to detect you while Prowling.",
"Increases threat caused in Bear and Dire Bear Form by 9% and reduces the chance enemies have to detect you while Prowling.",
"Increases threat caused in Bear and Dire Bear Form by 12% and reduces the chance enemies have to detect you while Prowling.",
"Increases threat caused in Bear and Dire Bear Form by 15% and reduces the chance enemies have to detect you while Prowling."
		];
i++;		

//Brutal Impact - Feral
rank[i] = [
"Increases the stun duration of your Bash and Pounce abilities by 0.5 sec.",
"Increases the stun duration of your Bash and Pounce abilities by 1 sec."
		];
i++;		

//Thick Hide - Feral 
rank[i] = [
"Increases your Armor contribution from items by 2%.",
"Increases your Armor contribution from items by 4%.",
"Increases your Armor contribution from items by 6%.",
"Increases your Armor contribution from items by 8%.",
"Increases your Armor contribution from items by 10%."
		];		
i++;		

//Feline Swiftness - Feral
rank[i] = [
"Increases your movement speed by 15% while outdoors in Cat Form and increases your chance to dodge while in Cat Form by 2%.",
"Increases your movement speed by 30% while outdoors in Cat Form and increases your chance to dodge while in Cat Form by 4%."
		];
i++;		

//Feral Charge - Feral 
rank[i] = [
		"<span style=text-align:left;float:left;>5 Rage</span><span style=text-align:right;float:right;>8-25 yd range</span><br><span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>15 sec cooldown</span><br>Requires Bear Form, Dire Bear Form<br>Causes you to charge an enemy, immobilizing and interrupting any spell being cast for 4 sec."
		];
i++;		

//Sharpened Claws - Feral  
rank[i] = [
"Increases your critical strike chance while in Bear, Dire Bear or Cat Form by 2%.",
"Increases your critical strike chance while in Bear, Dire Bear or Cat Form by 4%.",
"Increases your critical strike chance while in Bear, Dire Bear or Cat Form by 6%."
		];
i++;		

//Improved Shred - Feral 
rank[i] = [
"Reduces the Energy cost of your Shred ability by 6.",
"Reduces the Energy cost of your Shred ability by 12."
		];
i++;		

//Predatory Strikes - Feral  
rank[i] = [
"Increases your Attack Power in Cat, Bear and Dire Bear Forms by 50% of your level.",
"Increases your Attack Power in Cat, Bear and Dire Bear Forms by 100% of your level.",
"Increases your Attack Power in Cat, Bear and Dire Bear Forms by 150% of your level."
		];
i++;				

//Blood Frenzy - Feral 
rank[i] = [
"Your critical strikes from Cat Form abilities that add combo points have a 50% chance to add an additional combo point.",
"Your critical strikes from Cat Form abilities that add combo points have a 100% chance to add an additional combo point."
		];
i++;		
		
//Primal Fury - Feral 
rank[i] = [
"Gives you a 50% chance to gain an additional 5 Rage anytime you get a critical strike while in Bear and Dire Bear Form.",
"Gives you a 100% chance to gain an additional 5 Rage anytime you get a critical strike while in Bear and Dire Bear Form."
		];
i++;		

//Savage Fury - Feral 
rank[i] = [
		"Increases the damage caused by your Claw, Rake, Maul and Swipe abilities by 10%.",
		"Increases the damage caused by your Claw, Rake, Maul and Swipe abilities by 20%."		
		];
i++;		
		
//Faerie Fire (Feral) - Feral 

rank[i] = [
		"30 yd range<br><span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>6 sec cooldown</span><br>Requires Cat Form, Bear Form, Dire Bear Form<br>Decrease the armor of the target by 175 for 40 sec. While affected, the target cannot stealth or turn invisible.\
		<br><br>&nbsp;Trainable Ranks Listed Below:<br>\
		&nbsp;Rank 2: -285 Armor<br>\
		&nbsp;Rank 3: -395 Armor<br>\
		&nbsp;Rank 4: -505 Armor"
		];
i++;
	
//Heart of the Wild - Feral
rank[i]=[
"Increases your Intellect by 4%. In addition, while in Bear or Dire Bear Form your Stamina is increased by 4% and while in Cat Form your Strength is increased by 4%.",
"Increases your Intellect by 8%. In addition, while in Bear or Dire Bear Form your Stamina is increased by 8% and while in Cat Form your Strength is increased by 8%.",
"Increases your Intellect by 12%. In addition, while in Bear or Dire Bear Form your Stamina is increased by 12% and while in Cat Form your Strength is increased by 12%.",
"Increases your Intellect by 16%. In addition, while in Bear or Dire Bear Form your Stamina is increased by 16% and while in Cat Form your Strength is increased by 16%.",
"Increases your Intellect by 20%. In addition, while in Bear or Dire Bear Form your Stamina is increased by 20% and while in Cat Form your Strength is increased by 20%."
		];
i++;		
		
//Leader of the Pack - Feral
rank[i]=[
"While in Cat, Bear or Dire Bear Form, the Leader of the Pack increases ranged and melee critical chance of all party members within 45 yards by 3%."
		];
i++;		



		
//Improved Mark of the Wild - Restoration
rank[i]=[
"Increases the effects of your Mark of the Wild and Gift of the Wild spells by 7%.",
"Increases the effects of your Mark of the Wild and Gift of the Wild spells by 14%.",
"Increases the effects of your Mark of the Wild and Gift of the Wild spells by 21%.",
"Increases the effects of your Mark of the Wild and Gift of the Wild spells by 28%.",
"Increases the effects of your Mark of the Wild and Gift of the Wild spells by 35%."
		];
i++;		
		
//Furor - Restoration
rank[i]=[
"Gives you a 20% chance to gain 10 Rage when you shapeshift into Bear and Dire Bear Form or 40 Energy when you shapeshift into Cat Form.",
"Gives you a 40% chance to gain 10 Rage when you shapeshift into Bear and Dire Bear Form or 40 Energy when you shapeshift into Cat Form.",
"Gives you a 60% chance to gain 10 Rage when you shapeshift into Bear and Dire Bear Form or 40 Energy when you shapeshift into Cat Form.",
"Gives you a 80% chance to gain 10 Rage when you shapeshift into Bear and Dire Bear Form or 40 Energy when you shapeshift into Cat Form.",
"Gives you a 100% chance to gain 10 Rage when you shapeshift into Bear and Dire Bear Form or 40 Energy when you shapeshift into Cat Form."
		];
i++;		

//Improved Healing Touch - Restoration
rank[i]=[
"Reduces the cast time of your Healing Touch spell by 0.1 sec.",
"Reduces the cast time of your Healing Touch spell by 0.2 sec.",
"Reduces the cast time of your Healing Touch spell by 0.3 sec.",
"Reduces the cast time of your Healing Touch spell by 0.4 sec.",
"Reduces the cast time of your Healing Touch spell by 0.5 sec."
		];
i++;		
		
//Nature's Focus - Restoration 
rank[i]=[
"Gives you a 14% chance to avoid interruption caused by damage while casting the Healing Touch, Regrowth and Tranquility spells.",
"Gives you a 28% chance to avoid interruption caused by damage while casting the Healing Touch, Regrowth and Tranquility spells.",
"Gives you a 42% chance to avoid interruption caused by damage while casting the Healing Touch, Regrowth and Tranquility spells.",
"Gives you a 56% chance to avoid interruption caused by damage while casting the Healing Touch, Regrowth and Tranquility spells.",
"Gives you a 70% chance to avoid interruption caused by damage while casting the Healing Touch, Regrowth and Tranquility spells."
		];
i++;		
	
//Improved Enrage - Restoration
rank[i]=[
"The Enrage ability now instantly generates 5 Rage",
"The Enrage ability now instantly generates 10 Rage"
		];
i++;		
		
//Reflection - Restoration 
rank[i]=[
"Allows 5% of your Mana regeneration to continue while casting",
"Allows 10% of your Mana regeneration to continue while casting",
"Allows 15% of your Mana regeneration to continue while casting"
		];
i++;		
		
//Insect Swarm - Restoration
rank[i]=[
		"<span style=text-align:left;float:left;>45 Mana</span><span style=text-align:right;float:right;>30 yd range</span><br>Instant Cast<br>The enemy target is swarmed by insects, decreasing their chance to hit by 2% and causing 66 Nature damage over 12 sec.<br><br>\
		&nbsp;Trainable Ranks Listed Below:<br>\
		&nbsp;Rank 2: 85 Mana, 138 Damage<br>\
		&nbsp;Rank 3: 100 Mana, 174 Damage<br>\
		&nbsp;Rank 4: 140 Mana, 264 Damage<br>\
		&nbsp;Rank 5: 160 Mana, 324 Damage"
		];
i++;	
		
//Subtlety - Restoration
rank[i]=[
"Reduces the threat generated by your Healing spells by 4%.",
"Reduces the threat generated by your Healing spells by 8%.",
"Reduces the threat generated by your Healing spells by 12%.",
"Reduces the threat generated by your Healing spells by 16%.",
"Reduces the threat generated by your Healing spells by 20%."
		];
i++;		
		
//Tranquil Spirit - Restoration  
rank[i]=[
"Reduces the mana cost of your Healing Touch and Tranquility spells by 2%.",
"Reduces the mana cost of your Healing Touch and Tranquility spells by 4%.",
"Reduces the mana cost of your Healing Touch and Tranquility spells by 6%.",
"Reduces the mana cost of your Healing Touch and Tranquility spells by 8%.",
"Reduces the mana cost of your Healing Touch and Tranquility spells by 10%."
		];
i++;		
		
//Improved Rejuvenation - Restoration   
rank[i]=[
"Increases the effect of your Rejuvenation spell by 5%.",
"Increases the effect of your Rejuvenation spell by 10%.",
"Increases the effect of your Rejuvenation spell by 15%."
		];
i++;	
		
//Nature's Swiftness - Restoration   
rank[i]=[
		"<span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>3 min cooldown</span><br>When activated, your next Nature spell becomes an instant cast spell."
		];
i++;	


//Gift of Nature - Restoration 
rank[i]=[
"Increases the effect of all healing spells by 2%",
"Increases the effect of all healing spells by 4%",
"Increases the effect of all healing spells by 6%",
"Increases the effect of all healing spells by 8%",
"Increases the effect of all healing spells by 10%"
		];
i++;	


//Improved Tranquility - Restoration
rank[i]=[
"Reduces threat caused by Tranquility by 40%",
"Reduces threat caused by Tranquility by 80%"
		];
i++;	


//Improved Regrowth - Restoration 
rank[i]=[
"Increases the critical effect chance of your Regrowth spell by 10%.",
"Increases the critical effect chance of your Regrowth spell by 20%.",
"Increases the critical effect chance of your Regrowth spell by 30%.",
"Increases the critical effect chance of your Regrowth spell by 40%.",
"Increases the critical effect chance of your Regrowth spell by 50%."
		];
i++;	


//Innervate - Restoration 
rank[i]=[
		"<span style=text-align:left;float:left;>62 Mana</span><span style=text-align:right;float:right;>30 yd range</span><br><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>6 min cooldown</span><br>Increases the target's Mana regeneration by 400% and allows 100% of the target's Mana regeneration to continue while casting. Lasts 20 sec."
		];
i++;
	
//Restoration Talents End^^
/*
     FILE ARCHIVED ON 18:11:02 Jun 20, 2006 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:23:07 Oct 04, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 183.091
  exclusion.robots: 0.111
  exclusion.robots.policy: 0.103
  RedisCDXSource: 41.894
  esindex: 0.014
  LoadShardBlock: 118.468 (3)
  PetaboxLoader3.datanode: 155.025 (4)
  CDXLines.iter: 19.557 (3)
  load_resource: 371.688
  PetaboxLoader3.resolve: 259.498
*/