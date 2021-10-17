var i = 0;
var t = 0;

var className = "Mage Talents";
var talentPath = "/info/basics/talents/";

tree[i] = "Arcane"; i++;
tree[i] = "Fire"; i++;
tree[i] = "Frost"; i++;

i = 0;

talent[i] = [0, "Arcane Subtlety", 2, 1, 1]; i++;
talent[i] = [0, "Arcane Focus", 5, 2, 1]; i++;
talent[i] = [0, "Improved Arcane Missiles", 5, 3, 1]; i++;
talent[i] = [0, "Wand Specialization", 2, 1, 2]; i++; 
talent[i] = [0, "Magic Absorption", 5, 2, 2]; i++;
talent[i] = [0, "Arcane Concentration", 5, 3, 2]; i++;
talent[i] = [0, "Magic Attunement", 2, 1, 3]; i++;
talent[i] = [0, "Improved Arcane Explosion", 3, 2, 3]; i++;
talent[i] = [0, "Arcane Resilience", 1, 3, 3]; i++;
talent[i] = [0, "Improved Mana Shield", 2, 1, 4]; i++;
talent[i] = [0, "Improved Counterspell", 2, 2, 4]; i++;
talent[i] = [0, "Arcane Meditation", 3, 4, 4]; i++;
talent[i] = [0, "Presence of Mind", 1, 2, 5]; i++;
talent[i] = [0, "Arcane Mind", 5, 3, 5, [getTalentID("Arcane Resilience"),1]]; i++;
talent[i] = [0, "Arcane Instability", 3, 2, 6, [getTalentID("Presence of Mind"),1]]; i++;
talent[i] = [0, "Arcane Power", 1, 2, 7, [getTalentID("Arcane Instability"),3]]; i++;

treeStartStop[t] = i -1;
t++;

//fire talents
talent[i] = [1, "Improved Fireball", 5, 2, 1]; i++;
talent[i] = [1, "Impact", 5, 3, 1]; i++;
talent[i] = [1, "Ignite", 5, 1, 2]; i++;
talent[i] = [1, "Flame Throwing", 2, 2, 2]; i++;
talent[i] = [1, "Improved Fire Blast", 3, 3, 2]; i++;
talent[i] = [1, "Incinerate", 2, 1, 3]; i++;
talent[i] = [1, "Improved Flamestrike", 3, 2, 3]; i++;
talent[i] = [1, "Pyroblast", 1, 3, 3]; i++;
talent[i] = [1, "Burning Soul", 2, 4, 3]; i++;
talent[i] = [1, "Improved Scorch", 3, 1, 4]; i++;
talent[i] = [1, "Improved Fire Ward", 2, 2, 4]; i++;
talent[i] = [1, "Master of Elements", 3, 4, 4]; i++;
talent[i] = [1, "Critical Mass", 3, 2, 5]; i++;
talent[i] = [1, "Blast Wave", 1, 3, 5, [getTalentID("Pyroblast"),1]]; i++;
talent[i] = [1, "Fire Power", 5, 3, 6]; i++;
talent[i] = [1, "Combustion", 1, 2, 7, [getTalentID("Critical Mass"),3]]; i++;

treeStartStop[t] = i -1;
t++;

//frost talents
talent[i] = [2, "Frost Warding", 2, 1, 1]; i++;
talent[i] = [2, "Improved Frostbolt", 5, 2, 1]; i++;
talent[i] = [2, "Elemental Precision", 3, 3, 1]; i++;
talent[i] = [2, "Ice Shards", 5, 1, 2]; i++;
talent[i] = [2, "Frostbite", 3, 2, 2]; i++;
talent[i] = [2, "Improved Frost Nova", 2, 3, 2]; i++;
talent[i] = [2, "Perma Frost", 3, 4, 2]; i++;
talent[i] = [2, "Piercing Ice", 3, 1, 3]; i++;
talent[i] = [2, "Cold Snap", 1, 2, 3]; i++;
talent[i] = [2, "Improved Blizzard", 3, 4, 3]; i++;
talent[i] = [2, "Arctic Reach", 2, 1, 4]; i++;
talent[i] = [2, "Frost Channeling", 3, 2, 4]; i++;
talent[i] = [2, "Shatter", 5, 3, 4, [getTalentID("Improved Frost Nova"),2]]; i++;
talent[i] = [2, "Ice Block", 1, 2, 5]; i++;
talent[i] = [2, "Improved Cone of Cold", 3, 3, 5]; i++;
talent[i] = [2, "Winter's Chill", 5, 3, 6]; i++;
talent[i] = [2, "Ice Barrier", 1, 2, 7, [getTalentID("Ice Block"),1]]; i++;

treeStartStop[t] = i -1;
t++;

i = 0;

//Arcane Talents Begin

//Arcane Subtlety - Arcane
rank[i] = [
		"Reduces your target's resistance to all your spells by 5 and reduces threat of Arcane spells by 20%.",
		"Reduces your target's resistance to all your spells by 10 and reduces threat of Arcane spells by 40%.",
		];
i++;		
		
//Arcane Focus - Arcane
rank[i] = [
		"Reduces the chance that the opponent can resist your Arcane spells by 2%.",
		"Reduces the chance that the opponent can resist your Arcane spells by 4%.",
		"Reduces the chance that the opponent can resist your Arcane spells by 6%.",
		"Reduces the chance that the opponent can resist your Arcane spells by 8%.",
		"Reduces the chance that the opponent can resist your Arcane spells by 10%."
		];
i++;		

//Improved Arcane Missiles - Arcane
rank[i] = [
		"Gives you a 20% chance to avoid interruption caused by damage while channeling Arcane Missiles.",
		"Gives you a 40% chance to avoid interruption caused by damage while channeling Arcane Missiles.",
		"Gives you a 60% chance to avoid interruption caused by damage while channeling Arcane Missiles.",
		"Gives you a 80% chance to avoid interruption caused by damage while channeling Arcane Missiles.",
		"Gives you a 100% chance to avoid interruption caused by damage while channeling Arcane Missiles."
		];
i++;		
		
//Wand Specialization - Arcane	
rank[i] = [
		"Increases your damage with Wands by 13%.",
		"Increases your damage with Wands by 25%."
		];
i++;		

//Magic Absorption - Arcane	
rank[i] = [
		"Increases all resistances by 2 and causes all spells you resist to restore 1% of your total mana.",
		"Increases all resistances by 4 and causes all spells you resist to restore 2% of your total mana.",
		"Increases all resistances by 6 and causes all spells you resist to restore 3% of your total mana.",
		"Increases all resistances by 8 and causes all spells you resist to restore 4% of your total mana.",
		"Increases all resistances by 10 and causes all spells you resist to restore 5% of your total mana."
		];
i++;	

//Arcane Concentration - Arcane	
rank[i] = [
	"Gives you a 2% chance of entering a Clearcasting state after any damage spell hits a target. The Clearcasting state reduces the mana cost of your next damage	spell by 100%.",
	"Gives you a 4% chance of entering a Clearcasting state after any damage spell hits a target. The Clearcasting state reduces the mana cost of your next damage spell by 100%.",
	"Gives you a 6% chance of entering a Clearcasting state after any damage spell hits a target. The Clearcasting state reduces the mana cost of your next damage spell by 100%.",
	"Gives you a 8% chance of entering a Clearcasting state after any damage spell hits a target. The Clearcasting state reduces the mana cost of your next damage spell by 100%.",
	"Gives you a 10% chance of entering a Clearcasting state after any damage spell hits a target. The Clearcasting state reduces the mana cost of your next damage spell by 100%."
		];
i++;		

//Improved Dampen Magic - Arcane
rank[i] = [
		"Increases the effect of your Amplify Magic and Dampen Magic spells by 25%.",
		"Increases the effect of your Amplify Magic and Dampen Magic spells by 50%."
		];
i++;		
		
//Improved Arcane Explosion - Arcane	
rank[i] = [
		"Increases the critical strike chance of your Arcane Explosion spell by an additional 2%",
		"Increases the critical strike chance of your Arcane Explosion spell by an additional 4%",
		"Increases the critical strike chance of your Arcane Explosion spell by an additional 6%"
		];		
i++;		

//Arcane Explosion - Arcane		
rank[i] = [ 
		"Increases your armor by an amount equal to 50% of your Intellect."
		];
i++;	

//Improved Mana Shield - Arcane		
rank[i] = [
		"Decreases the mana lost per point of damage taken when Mana Shield is active by 10%.",
		"Decreases the mana lost per point of damage taken when Mana Shield is active by 20%."
		];
i++;		

//Improved Counterspell - Arcane	
rank[i] = [
		"Gives your Counterspell a 50% chance to silence the target for 4 sec.",
		"Gives your Counterspell a 100% chance to silence the target for 4 sec."
		];
i++;		

//Arcane Meditation - Arcane		
rank[i] = [
		"Allows 5% of your Mana regeneration to continue while casting.",
		"Allows 10% of your Mana regeneration to continue while casting.",
		"Allows 15% of your Mana regeneration to continue while casting."
		];
i++;		

//Presence of Mind - Arcane
rank[i] = [
		"<span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>3 min cooldown</span><br>When activated, your next Mage spell with a casting time less than 10 sec becomes an instant cast spell."
		];
i++;		

//Arcane Mind - Arcane		
rank[i] = [
		"Increases your maximum Mana by 2%.",
		"Increases your maximum Mana by 4%.",
		"Increases your maximum Mana by 6%.",
		"Increases your maximum Mana by 8%.",
		"Increases your maximum Mana by 10%."
		];
i++;		

//Arcane Instability - Arcane		
rank[i] = [
		"Increases your spell damage and critical strike chance by 1%.",
		"Increases your spell damage and critical strike chance by 2%.",
		"Increases your spell damage and critical strike chance by 3%."
		];		
i++;		

//Arcane Power - Arcane				
rank[i] = [
		"<span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>3 min cooldown</span><br>When activated, your spells deal 30% more damage while costing 30% more mana to cast. This effect lasts 15 sec."
		];
i++;		










//Improved Fireball - Fire	
rank[i] = [
			"Reduces the casting time of your Fireball spell by 0.1 sec.",
			"Reduces the casting time of your Fireball spell by 0.2 sec.",
			"Reduces the casting time of your Fireball spell by 0.3 sec.",
			"Reduces the casting time of your Fireball spell by 0.4 sec.",
			"Reduces the casting time of your Fireball spell by 0.5 sec."
		];
i++;



//Impact - Fire			
rank[i] = [
			"Gives your Fire spells a 2% chance to stun the target for 2 sec.",
			"Gives your Fire spells a 4% chance to stun the target for 2 sec.",
			"Gives your Fire spells a 6% chance to stun the target for 2 sec.",
			"Gives your Fire spells a 8% chance to stun the target for 2 sec.",
			"Gives your Fire spells a 10% chance to stun the target for 2 sec."
		];
i++;

//Ignite - Fire		
rank[i] = [
			"Your critical strikes from Fire damage spells cause the target to burn for an additional 8% of your spell's damage over 4 sec.",
			"Your critical strikes from Fire damage spells cause the target to burn for an additional 16% of your spell's damage over 4 sec.",
			"Your critical strikes from Fire damage spells cause the target to burn for an additional 24% of your spell's damage over 4 sec.",
			"Your critical strikes from Fire damage spells cause the target to burn for an additional 32% of your spell's damage over 4 sec.",
			"Your critical strikes from Fire damage spells cause the target to burn for an additional 40% of your spell's damage over 4 sec."
		];		
i++;		

//Flame Throwing - Fire	
rank[i] = [
			"Increases the range of your fire spells by 3 yards.",
			"Increases the range of your fire spells by 6 yards."
		];
i++;

//Improved Fire Blast - Fire	
rank[i] = [
			"Reduces the cooldown of your Fire Blast spell by 0.5 sec.",
			"Reduces the cooldown of your Fire Blast spell by 1 sec.",
			"Reduces the cooldown of your Fire Blast spell by 1.5 sec."
		];
i++;		


//Incinerate - Fire			
rank[i] = [
			"Increases the critical strike chance of your Fire Blast and Scorch spells by 2%.",
			"Increases the critical strike chance of your Fire Blast and Scorch spells by 4%."
		];
i++;		

//Improved Flamestrike - Fire		
rank[i] = [
			"Increases the critical strike chance of your Flamestrike spell by 5%.",
			"Increases the critical strike chance of your Flamestrike spell by 10%.",
			"Increases the critical strike chance of your Flamestrike spell by 15%."
		];
i++;		

//Pyroblast - Fire	
rank[i] = [
		"<span style=text-align:left;float:left;>125 Mana</span><span style=text-align:right;float:right;>35 yd range</span><br><span style=text-align:left;float:left;>6 sec cast</span><br>Hurls an immense fiery boulder that causes 148 to 195 Fire damage and an additional 56 Fire damage over 12 sec.<br><br>\
		&nbsp;Trainable Ranks Listed Below:<br>\
		&nbsp;Rank 2: 150 Mana, 180-236 Damage, 72/12 sec<br>\
		&nbsp;Rank 3: 195 Mana, 255-327 Damage, 96/12 sec<br>\
		&nbsp;Rank 4: 240 Mana, 329-419 Damage, 124/12 sec<br>\
		&nbsp;Rank 5: 285 Mana, 407-515 Damage, 156/12 sec<br>\
		&nbsp;Rank 6: 335 Mana, 503-631 Damage, 188/12 sec<br>\
		&nbsp;Rank 7: 385 Mana, 600-700 Damage, 228/12 sec<br>\
		&nbsp;Rank 8: 440 Mana, 716-890 Damage, 268/12 sec"
		];		
i++;


//Burning Soul - Fire
rank[i] = [
			"Gives your fire spells a 35% chance to not lose casting time when you take damage and reduces the threat caused by your Fire spells by 15%.",
			"Gives your fire spells a 70% chance to not lose casting time when you take damage and reduces the threat caused by your Fire spells by 30%."
		];
i++;		

//Improved Scorch - Fire	
rank[i] = [
			"Your Scorch spells have a 33% chance to cause your target to be vulnerable to Fire damage. This vulnerability increases the Fire damage dealt to your target by 3% and lasts 30 sec.  Stacks up to 5 times.",
			"Your Scorch spells have a 66% chance to cause your target to be vulnerable to Fire damage. This vulnerability increases the Fire damage dealt to your target by 3% and lasts 30 sec.  Stacks up to 5 times.",
			"Your Scorch spells have a 100% chance to cause your target to be vulnerable to Fire damage. This vulnerability increases the Fire damage dealt to your target by 3% and lasts 30 sec.  Stacks up to 5 times."
		];
i++;		

//Improved Fire Ward - Fire	
rank[i] = [
			"Causes your Fire Ward to have a 10% chance to reflect Fire spells while active.",
			"Causes your Fire Ward to have a 20% chance to reflect Fire spells while active."
		];
i++;		

//Master of Elements - Fire	
rank[i] = [
			"Your Fire and Frost spell criticals will refund 10% of the mana cost.",
			"Your Fire and Frost spell criticals will refund 20% of the mana cost.",
			"Your Fire and Frost spell criticals will refund 30% of the mana cost."
		]; i++;

//Critical Mass - Fire	
rank[i] = [
			"Increases the critical strike chance of your fire spells by 2%.",
			"Increases the critical strike chance of your fire spells by 4%.",
			"Increases the critical strike chance of your fire spells by 6%."
		];i++;		

//Blast Wave - Fire	
rank[i] = [
			"215 Mana<br><span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>45 sec cooldown</span><br>A wave of flame radiates outward from the caster, damaging all enemies caught within the blast for 160 to 192 Fire damage, and dazing them for 6 sec.<br><br>\
&nbsp;Trainable Ranks Listed Below:<br>\
&nbsp;Rank 2: 270 Mana, 208-249 Fire damage<br>\
&nbsp;Rank 3: 355 Mana, 285-338 Fire damage<br>\
&nbsp;Rank 4: 450 Mana, 374-443 Fire damage<br>\
&nbsp;Rank 5: 545 Mana, 462-544 Fire damage<br>\
&nbsp;Rank 6: 545 Mana, 462-544 Fire damage"
		];
i++;		

//Fire Power - Fire	
rank[i] = [
			"Increases the damage done by your fire spells by 2%.",
			"Increases the damage done by your fire spells by 4%.",
			"Increases the damage done by your fire spells by 6%.",
			"Increases the damage done by your fire spells by 8%.",
			"Increases the damage done by your fire spells by 10%."		
		]; i++;

//Combustion - Fire

rank[i] = [
		"<span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>3 min cooldown</span><br>When activated, this spell causes each Fire damage spell you cast to increase your critical strike chance with Fire damage spells by 10%. This effect lasts until you have caused 3 critical strikes with Fire spells."
		];
i++;
		
		
		
		
		
		
		
		
		
//Frost Warding - Frost
rank[i]=[
"Increases the armor and resistances given by your Frost Armor and Ice Armor spells by 15%. In addition, gives your Frost Ward a 10% chance to reflect Frost spells and effects while active.",
"Increases the armor and resistances given by your Frost Armor and Ice Armor spells by 30%. In addition, gives your Frost Ward a 20% chance to reflect Frost spells and effects while active."
		];
i++;	


//Improved Frost Bolt - Frost
rank[i]=[
			"Reduces the casting time of your Frostbolt spell by 0.1 sec.",
			"Reduces the casting time of your Frostbolt spell by 0.2 sec.",
			"Reduces the casting time of your Frostbolt spell by 0.3 sec.",
			"Reduces the casting time of your Frostbolt spell by 0.4 sec.",
			"Reduces the casting time of your Frostbolt spell by 0.5 sec."
			];
i++;


//Elemental Precision
rank[i]=[
"Reduces the chance that an opponent can resist your Fire and Frost spells by 2%.",
"Reduces the chance that an opponent can resist your Fire and Frost spells by 4%.",
"Reduces the chance that an opponent can resist your Fire and Frost spells by 6%.",
		];
i++;				

//Ice Shards - Frost
rank[i]=[
"Increases the critical strike damage bonus of your Frost spells by 20%.",
"Increases the critical strike damage bonus of your Frost spells by 40%.",
"Increases the critical strike damage bonus of your Frost spells by 60%.",
"Increases the critical strike damage bonus of your Frost spells by 80%.",
"Increases the critical strike damage bonus of your Frost spells by 100%."
		];
i++;

//Frostbite - Frost
rank[i]=[
"Gives your Chill effects a 5% chance to freeze the target for 5 sec.",
"Gives your Chill effects a 10% chance to freeze the target for 5 sec.",
"Gives your Chill effects a 15% chance to freeze the target for 5 sec."
		];
i++;	

//Improved Frost Nova - Frost
rank[i]=[
"Reduces the cooldown of your Frost Nova spell by 2 sec.",
"Reduces the cooldown of your Frost Nova spell by 4 sec."
		];
i++;
			
//Permafrost - Frost
rank[i]=[
			"Increases the duration of your Chill effects by 1 sec and reduces the target's speed by an additional 4%.",
			"Increases the duration of your Chill effects by 2 sec and reduces the target's speed by an additional 7%.",
			"Increases the duration of your Chill effects by 3 sec and reduces the target's speed by an additional 10%."
		];
i++;		


//Piercing Ice - Frost
rank[i]=[
"Increases the damage done by your Frost spells by 2%.",
"Increases the damage done by your Frost spells by 4%.",
"Increases the damage done by your Frost spells by 6%."
		];
i++;		

//Cold Snap - Frost
rank[i]=[
		"<span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>10 min cooldown</span><br>When activated, this spell finishes the cooldown on all of your Frost spells."
		];
i++;		

//Improved Blizzard - Frost
rank[i]=[
"Adds a chill effect to your Blizzard spell. This effect lowers the target's movement speed by 30%. Lasts 4.50 sec.",
"Adds a chill effect to your Blizzard spell. This effect lowers the target's movement speed by 50%. Lasts 4.50 sec.",
"Adds a chill effect to your Blizzard spell. This effect lowers the target's movement speed by 65%. Lasts 4.50 sec."
		];
i++;		

//Arctic Reach - Frost
rank[i]=[
"Increases the range of your Frostbolt and Blizzard spells and the radius of your Frost Nova and Cone of Cold spells by 10%.",
"Increases the range of your Frostbolt and Blizzard spells and the radius of your Frost Nova and Cone of Cold spells by 20%."
		];
i++;		
		

//Frost Channeling - Frost
rank[i]=[
"Reduces the mana cost of your frost spells by 5% and reduces the threat caused by your Frost spells by 10%.",
"Reduces the mana cost of your frost spells by 10% and reduces the threat caused by your Frost spells by 20%.",
"Reduces the mana cost of your frost spells by 15% and reduces the threat caused by your Frost spells by 30%."
		];
i++;		
		
//Shatter - Frost
rank[i]=[
"Increases the critical strike chance of all your spells against frozen targets by 10%.",
"Increases the critical strike chance of all your spells against frozen targets by 20%.",
"Increases the critical strike chance of all your spells against frozen targets by 30%.",
"Increases the critical strike chance of all your spells against frozen targets by 40%.",
"Increases the critical strike chance of all your spells against frozen targets by 50%."
		];
i++;		

//Ice Block - Frost
rank[i]=[
		"<span style=text-align:left;float:left;>15 Mana</span><br><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>5 min cooldown</span><br>You become encased in a block of ice, protecting you from all physical attacks and spells for 10 sec, but during that time you cannot attack, move or cast spells."
		];
i++;		
		
	
//Improved Cone of Cold - Frost
rank[i]=[
"Increases the damage dealt by your Cone of Cold spell by 15%.",
"Increases the damage dealt by your Cone of Cold spell by 25%.",
"Increases the damage dealt by your Cone of Cold spell by 35%."
		];
i++;		
		

//Winter's Chill - Frost
rank[i]=[
"Gives your Frost damage spells a 20% chance to apply the Winter's Chill effect, which increases the chance a Frost spell will critically hit the target by 2%. Stacks up to 5 times.",
"Gives your Frost damage spells a 40% chance to apply the Winter's Chill effect, which increases the chance a Frost spell will critically hit the target by 2%. Stacks up to 5 times.",
"Gives your Frost damage spells a 60% chance to apply the Winter's Chill effect, which increases the chance a Frost spell will critically hit the target by 2%. Stacks up to 5 times.",
"Gives your Frost damage spells a 80% chance to apply the Winter's Chill effect, which increases the chance a Frost spell will critically hit the target by 2%. Stacks up to 5 times.",
"Gives your Frost damage spells a 100% chance to apply the Winter's Chill effect, which increases the chance a Frost spell will critically hit the target by 2%. Stacks up to 5 times."
		];
i++;		

//Ice Barrier - Frost
rank[i]=[
		"<span style=text-align:left;float:left;>305 Mana</span><br><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>30 sec cooldown</span><br>Instantly shields you, absorbing 438 damage. Lasts 1 min. While the shield holds, spells will not be interrupted.<br><br>\
		&nbsp;Trainable Ranks Listed Below:<br>\
		&nbsp;Rank 2: Absorbs 549 Damage<br>\
		&nbsp;Rank 3: Absorbs 678 Damage<br>\
		&nbsp;Rank 4: Absorbs 818 Damage"
		];
i++;	
		
//Frost Talents End^^
jsLoaded=true;//needed for ajax script loading
/*
     FILE ARCHIVED ON 00:53:56 Jul 18, 2006 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:26:47 Sep 08, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots.policy: 0.21
  PetaboxLoader3.resolve: 161.358 (4)
  LoadShardBlock: 175.466 (3)
  esindex: 0.008
  CDXLines.iter: 23.536 (3)
  load_resource: 172.86
  PetaboxLoader3.datanode: 84.839 (4)
  captures_list: 216.114
  exclusion.robots: 0.226
  RedisCDXSource: 12.784
*/