var i = 0;
var t = 0;

var className = "Rogue";

tree[i] = "Assassination"; i++;
tree[i] = "Combat"; i++;
tree[i] = "Subtlety"; i++;

i = 0;

talent[i] = [0, "Improved Eviscerate", 3, 1, 1]; i++;
talent[i] = [0, "Remorseless Attacks", 2, 2, 1]; i++;
talent[i] = [0, "Malice", 5, 3, 1]; i++;
talent[i] = [0, "Ruthlessness", 3, 1, 2]; i++; 
talent[i] = [0, "Murder", 2, 2, 2]; i++;
talent[i] = [0, "Improved Slice and Dice", 3, 4, 2]; i++;
talent[i] = [0, "Relentless Strikes", 1, 1, 3]; i++;
talent[i] = [0, "Improved Expose Armor", 2, 2, 3]; i++;
talent[i] = [0, "Lethality", 5, 3, 3, [getTalentID("Malice"),5]]; i++;
talent[i] = [0, "Vile Poisons", 5, 2, 4]; i++;
talent[i] = [0, "Improved Poisons", 5, 3, 4]; i++;
talent[i] = [0, "Cold Blood", 1, 2, 5]; i++;
talent[i] = [0, "Improved Kidney Shot", 3, 3, 5]; i++;
talent[i] = [0, "Seal Fate", 5, 2, 6, [getTalentID("Cold Blood"),1]]; i++;
talent[i] = [0, "Vigor", 1, 2, 7]; i++;

treeStartStop[t] = i -1;
t++;

//holy talents
talent[i] = [1, "Improved Gouge", 3, 1, 1]; i++;
talent[i] = [1, "Improved Sinister Strike", 2, 2, 1]; i++;
talent[i] = [1, "Lightning Reflexes", 5, 3, 1]; i++;
talent[i] = [1, "Improved Backstab", 3, 1, 2]; i++;
talent[i] = [1, "Deflection", 5, 2, 2]; i++;
talent[i] = [1, "Precision", 5, 3, 2]; i++;
talent[i] = [1, "Endurance", 2, 1, 3]; i++;
talent[i] = [1, "Riposte", 1, 2, 3, [getTalentID("Deflection"),5]]; i++;
talent[i] = [1, "Improved Sprint", 2, 4, 3]; i++;
talent[i] = [1, "Improved Kick", 2, 1, 4]; i++;
talent[i] = [1, "Dagger Specialization", 5, 2, 4]; i++;
talent[i] = [1, "Dual Wield Specialization", 5, 3, 4, [getTalentID("Precision"),5]]; i++;
talent[i] = [1, "Mace Specialization", 5, 1, 5]; i++;
talent[i] = [1, "Blade Flurry", 1, 2, 5]; i++;
talent[i] = [1, "Sword Specialization", 5, 3, 5]; i++;
talent[i] = [1, "Fist Weapon Specialization", 5, 4, 5]; i++;
talent[i] = [1, "Weapon Expertise", 2, 2, 6, [getTalentID("Blade Flurry"),1]]; i++;
talent[i] = [1, "Aggression", 3, 3, 6]; i++;
talent[i] = [1, "Adrenaline Rush", 1, 2, 7]; i++;

treeStartStop[t] = i -1;
t++;

//shadow talents
talent[i] = [2, "Master of Deception", 5, 2, 1]; i++;
talent[i] = [2, "Opportunity", 5, 3, 1]; i++;
talent[i] = [2, "Sleight of Hand", 2, 1, 2]; i++;
talent[i] = [2, "Elusiveness", 2, 2, 2]; i++;
talent[i] = [2, "Camouflage", 5, 3, 2]; i++;
talent[i] = [2, "Initiative", 3, 1, 3]; i++;
talent[i] = [2, "Ghostly Strike", 1, 2, 3]; i++;
talent[i] = [2, "Improved Ambush", 3, 3, 3]; i++;
talent[i] = [2, "Setup", 3, 1, 4]; i++;
talent[i] = [2, "Improved Sap", 3, 2, 4]; i++;
talent[i] = [2, "Serrated Blades", 3, 3, 4]; i++;
talent[i] = [2, "Heightened Senses", 2, 1, 5]; i++;
talent[i] = [2, "Preparation", 1, 2, 5]; i++;
talent[i] = [2, "Dirty Deeds", 2, 3, 5]; i++;
talent[i] = [2, "Hemorrhage", 1, 4, 5, [getTalentID("Serrated Blades"),3]]; i++;
talent[i] = [2, "Deadliness", 5, 3, 6]; i++;
talent[i] = [2, "Premeditation", 1, 2, 7, [getTalentID("Preparation"),1]]; i++;

treeStartStop[t] = i -1;
t++;

i = 0;


//Assassination Talents Begin

//Improved Eviscerate - Assassination
rank[i] = [
"Increases the damage done by your Eviscerate ability by 5%.",
"Increases the damage done by your Eviscerate ability by 10%.",
"Increases the damage done by your Eviscerate ability by 15%."
		];
i++;		
		
//Remorseless Attacks - Assassination
rank[i] = [
"After killing an opponent that yields experience, gives you a 20% increased critical strike chance on your next Sinister Strike, Backstab, Ambush, or Ghostly Strike. Lasts 20 sec.",
"After killing an opponent that yields experience, gives you a 40% increased critical strike chance on your next Sinister Strike, Backstab, Ambush, or Ghostly Strike. Lasts 20 sec."
		];
i++;		

//Malice - Assassination	
rank[i] = [
"Increases your critical strike chance by 1%.",
"Increases your critical strike chance by 2%.",
"Increases your critical strike chance by 3%.",
"Increases your critical strike chance by 4%.",
"Increases your critical strike chance by 5%."
		];
i++;		
		
//Ruthlessness - Assassination	
rank[i] = [
"Gives your finishing moves a 20% chance to add a combo point to your target.",
"Gives your finishing moves a 40% chance to add a combo point to your target.",
"Gives your finishing moves a 60% chance to add a combo point to your target."
		];
i++;		

//Murder - Assassination
rank[i] = [
"Increases all damage caused against Humanoid, Giant, Beast, and Dragonkin by 1%",
"Increases all damage caused against Humanoid, Giant, Beast, and Dragonkin by 2%"
		];
i++;		

//Improved Slice and Dice - Assassination
rank[i] = [
"Increases the duration of your Slice and Dice ability by 15%.",
"Increases the duration of your Slice and Dice ability by 30%.",
"Increases the duration of your Slice and Dice ability by 45%."
		];
i++;		
		
//Relentless Strikes - Assassination  	
rank[i] = [
"Your finishing moves have a 20% chance per combo point to restore 25 energy."
		];
i++;		


//Improved Expose Armor - Assassination	
rank[i] = [ 
"Increases the armor reduced by your Expose Armor ability by an additional 25%.",
"Increases the armor reduced by your Expose Armor ability by an additional 50%."
		];
i++;		

//Lethality - Assassination
rank[i] = [
"Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Ghostly Strike, and Hemorrhage abilites by 6%.",
"Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Ghostly Strike, and Hemorrhage abilites by 12%.",
"Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Ghostly Strike, and Hemorrhage abilites by 18%.",
"Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Ghostly Strike, and Hemorrhage abilites by 24%.",
"Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Ghostly Strike, and Hemorrhage abilites by 30%."
		];
i++;		

//Vile Poisons - Assassination
rank[i] = [
"Increases the damage dealt by your poisons by 4% and gives your poisons a 8% chance to resist dispel effects.",
"Increases the damage dealt by your poisons by 8% and gives your poisons a 16% chance to resist dispel effects.",
"Increases the damage dealt by your poisons by 12% and gives your poisons a 24% chance to resist dispel effects.",
"Increases the damage dealt by your poisons by 16% and gives your poisons a 32% chance to resist dispel effects.",
"Increases the damage dealt by your poisons by 20% and gives your poisons a 40% chance to resist dispel effects."
		];
i++;		

//Improved Instant Poison - Assassination	
rank[i] = [
"Increases the chance to apply poisons to your target by 2%.",
"Increases the chance to apply poisons to your target by 4%.",
"Increases the chance to apply poisons to your target by 6%.",
"Increases the chance to apply poisons to your target by 8%.",
"Increases the chance to apply poisons to your target by 10%."
		];
i++;		

//Cold Blood - Assassination
rank[i] = [
			"<span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>3 min cooldown</span><br>When activated, increases the critical strike chance of your next Sinister Strike, Backstab, Ambush, or Eviscerate by 100%."
		];
i++;		

//Improved Kidney Shot - Assassination
rank[i] = [
"While affected by your Kidney Shot ability, target receives an additional 3% damage from all sources.",
"While affected by your Kidney Shot ability, target receives an additional 6% damage from all sources.",
"While affected by your Kidney Shot ability, target receives an additional 9% damage from all sources."
		];
i++;		

//Seal Fate - Assassination		
rank[i] = [
"Your critical strikes from abilities that add combo points have a 20% chance to add an additional combo point.",
"Your critical strikes from abilities that add combo points have a 40% chance to add an additional combo point.",
"Your critical strikes from abilities that add combo points have a 60% chance to add an additional combo point.",
"Your critical strikes from abilities that add combo points have a 80% chance to add an additional combo point.",
"Your critical strikes from abilities that add combo points have a 100% chance to add an additional combo point."
		];
i++;		

//Vigor - Assassination
rank[i] = [
"Increases your maximum Energy by 10."
		];
i++;		













//Improved Gouge - Combat
rank[i] = [
"Increases the effect duration of your Gouge ability by 0.5 sec.",
"Increases the effect duration of your Gouge ability by 1 sec.",
"Increases the effect duration of your Gouge ability by 1.5 sec."
		];
i++;		

//Improved Sinister Strike - Combat 
rank[i] = [
"Reduces the Energy cost of your Sinister Strike ability by 3.",
"Reduces the Energy cost of your Sinister Strike ability by 5."
		];
i++;		

//Lightning Reflexes - Combat
rank[i] = [
"Increases your Dodge chance by 1%.",
"Increases your Dodge chance by 2%.",
"Increases your Dodge chance by 3%.",
"Increases your Dodge chance by 4%.",
"Increases your Dodge chance by 5%."
		];
i++;		

//Improved Backstab - Combat
rank[i] = [
"Increases the critical strike chance of your Backstab ability by 10%.",
"Increases the critical strike chance of your Backstab ability by 20%.",
"Increases the critical strike chance of your Backstab ability by 30%."
		];
i++;		
	
//Deflection - Combat	
rank[i] = [
"Increases your Parry chance by 1%.",
"Increases your Parry chance by 2%.",
"Increases your Parry chance by 3%.",
"Increases your Parry chance by 4%.",
"Increases your Parry chance by 5%."
		];
i++;		

//Precision - Combat 
rank[i] = [
"Increases your chance to hit with melee weapons by 1%.",
"Increases your chance to hit with melee weapons by 2%.",
"Increases your chance to hit with melee weapons by 3%.",
"Increases your chance to hit with melee weapons by 4%.",
"Increases your chance to hit with melee weapons by 5%."
		];
i++;		

//Endurance - Combat
rank[i] = [
"Reduces the cooldown of your Sprint and Evasion abilities by 45 sec",
"Reduces the cooldown of your Sprint and Evasion abilities by 1.5 min."
		];
i++;		

//Riposte - Combat
rank[i] = [
			"<span style=text-align:left;float:left;>10 Energy</span><span style=text-align:right;float:right;>5 yd range</span><br><span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>6 sec cooldown</span><br>A strike that becomes active after parrying an opponent's attack. This attack deals 150% weapon damage and disarms the target for 6 sec."
		];
i++;		

//Improved Sprint - Combat
rank[i] = [
"Gives a 50% chance to remove all movement imparing effects when you activate your Sprint ability.",
"Gives a 100% chance to remove all movement imparing effects when you activate your Sprint ability."
		];
i++;		

//Improved Kick - Combat 
rank[i] = [
"Gives your Kick ability a 50% chance to silence the target for 2 sec.",
"Gives your Kick ability a 100% chance to silence the target for 2 sec."
		];
i++;		

//Dagger Specialization - Combat  
rank[i] = [
"Increases your chance to get a critical strike with Daggers by 1%.",
"Increases your chance to get a critical strike with Daggers by 2%.",
"Increases your chance to get a critical strike with Daggers by 3%.",
"Increases your chance to get a critical strike with Daggers by 4%.",
"Increases your chance to get a critical strike with Daggers by 5%."
		];
i++;		


//Dual Wield Specialization - Combat  
rank[i] = [
"Increases the damage done by your offhand weapon by 10%.",
"Increases the damage done by your offhand weapon by 20%.",
"Increases the damage done by your offhand weapon by 30%.",
"Increases the damage done by your offhand weapon by 40%.",
"Increases the damage done by your offhand weapon by 50%."
		];
i++;		

//Mace Specialization - Combat 
rank[i] = [
"Increases your skill with Maces by 1, and gives you a 1% chance to stun your target for 3 sec with a mace.",
"Increases your skill with Maces by 2, and gives you a 2% chance to stun your target for 3 sec with a mace.",
"Increases your skill with Maces by 3, and gives you a 3% chance to stun your target for 3 sec with a mace.",
"Increases your skill with Maces by 4, and gives you a 4% chance to stun your target for 3 sec with a mace.",
"Increases your skill with Maces by 5, and gives you a 5% chance to stun your target for 3 sec with a mace."
		];
i++;
		
//Blade Flurry - Combat  
rank[i]=[
			"25 Energy<br><span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>2 min cooldown</span><br>Requires Melee Weapon<br>Increases your attack speed by 20%. In addition, attacks strike an additional nearby opponent. Lasts 15 sec."
			];
i++;			
			
//Sword Specialization - Combat
rank[i]=[
"Gives you a 1% chance to get an extra attack on the same target after dealing damage with your Sword.",
"Gives you a 2% chance to get an extra attack on the same target after dealing damage with your Sword.",
"Gives you a 3% chance to get an extra attack on the same target after dealing damage with your Sword.",
"Gives you a 4% chance to get an extra attack on the same target after dealing damage with your Sword.",
"Gives you a 5% chance to get an extra attack on the same target after dealing damage with your Sword."
		];
i++;		
		
//Fist Weapon Specialization - Combat 
rank[i]=[
"Increases your chance to get a critical strike with Fist Weapons by 1%.",
"Increases your chance to get a critical strike with Fist Weapons by 2%.",
"Increases your chance to get a critical strike with Fist Weapons by 3%.",
"Increases your chance to get a critical strike with Fist Weapons by 4%.",
"Increases your chance to get a critical strike with Fist Weapons by 5%."
		];
i++;		
		
//Weapon Expertise - Combat 
rank[i]=[
"Increases your skill with Swords, Fist, and Daggers by 3.",
"Increases your skill with Swords, Fist, and Daggers by 5."
		];
i++;		
		
//Aggression - Combat 
rank[i]=[
"Increases the damage of your Sinister Strike and Eviscerate abilities by 2%.",
"Increases the damage of your Sinister Strike and Eviscerate abilities by 4%.",
"Increases the damage of your Sinister Strike and Eviscerate abilities by 6%."
		];
i++;		
		
//Adrenaline Rush - Combat  
rank[i]=[
			"<span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>5 min cooldown</span><br>Increases your Energy regeneration rate by 100% for 15 sec."
		];
i++;		














		
//Master of Deception - Subtlety
rank[i]=[
"Reduces the chance enemies have to detect you while in Stealth mode.",
"Reduces the chance enemies have to detect you while in Stealth mode. More effective than Master of Deception (Rank 1).",
"Reduces the chance enemies have to detect you while in Stealth mode. More effective than Master of Deception (Rank 2).",
"Reduces the chance enemies have to detect you while in Stealth mode. More effective than Master of Deception (Rank 3).",
"Reduces the chance enemies have to detect you while in Stealth mode. More effective than Master of Deception (Rank 4)."
		];
i++;		

//Opportunity - Subtlety
rank[i]=[
"Increases the damage dealt when striking from behind with your Backstab, Garrote, or Ambush abilities by 4%.",
"Increases the damage dealt when striking from behind with your Backstab, Garrote, or Ambush abilities by 8%.",
"Increases the damage dealt when striking from behind with your Backstab, Garrote, or Ambush abilities by 12%.",
"Increases the damage dealt when striking from behind with your Backstab, Garrote, or Ambush abilities by 16%.",
"Increases the damage dealt when striking from behind with your Backstab, Garrote, or Ambush abilities by 20%."
		];
i++;		
		
//Sleight of Hand - Subtlety 
rank[i]=[
"Reduces the chance you are critically hit by melee and ranged attacks by 1% and increases the threat reduced by your Feint ability by 10%.",
"Reduces the chance you are critically hit by melee and ranged attacks by 2% and increases the threat reduced by your Feint ability by 20%."
		];
i++;				
		
//Elusiveness - Subtlety 
rank[i]=[
"Reduces the cooldown of your Vanish and Blind abilities by 45 sec.",
"Reduces the cooldown of your Vanish and Blind abilities by 1.5 min.",
"Reduces the cooldown of your Evasion, Vanish, and Blind abilities by 1.3 min."
		];
i++;		

//Camouflage - Subtlety 
rank[i]=[
"Increases your speed while stealthed by 3% and reduces the cooldown of your Stealth ability by 1 sec.",
"Increases your speed while stealthed by 6% and reduces the cooldown of your Stealth ability by 2 sec.",
"Increases your speed while stealthed by 9% and reduces the cooldown of your Stealth ability by 3 sec.",
"Increases your speed while stealthed by 12% and reduces the cooldown of your Stealth ability by 4 sec.",
"Increases your speed while stealthed by 15% and reduces the cooldown of your Stealth ability by 5 sec."
		];
i++;		
		
	
//Initiative - Subtlety 
rank[i]=[
"Gives you a 25% chance to add an additional combo point to your target when using your Ambush, Garrote, or Cheap Shot ability.",
"Gives you a 50% chance to add an additional combo point to your target when using your Ambush, Garrote, or Cheap Shot ability.",
"Gives you a 75% chance to add an additional combo point to your target when using your Ambush, Garrote, or Cheap Shot ability."
		];
i++;		
		
//Ghostly Strike - Subtlety
rank[i]=[
			"<span style=text-align:left;float:left;>40 Energy</span><span style=text-align:right;float:right;>5 yd range</span><br><span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>20 sec cooldown</span><br>A strike that deals 125% weapon damage and increases your chance to dodge by 15% for 7 sec. Awards 1 combo point."
		];
i++;		
		
//Improved Ambush - Subtlety
rank[i]=[
"Increases the critical strike chance of your Ambush ability by 15%.",
"Increases the critical strike chance of your Ambush ability by 30%.",
"Increases the critical strike chance of your Ambush ability by 45%."
		];
i++;
		
//Setup - Subtlety 
rank[i]=[
"Gives you a 15% chance to add a combo point to your target after dodging their attack or fully resisting one of their spells.",
"Gives you a 30% chance to add a combo point to your target after dodging their attack or fully resisting one of their spells.",
"Gives you a 45% chance to add a combo point to your target after dodging their attack or fully resisting one of their spells."
		];
i++;		
		
//Improved Sap - Subtlety
rank[i]=[
"Gives you a 30% chance to return to stealth mode after using your Sap ability.",
"Gives you a 60% chance to return to stealth mode after using your Sap ability.",
"Gives you a 90% chance to return to stealth mode after using your Sap ability."
		];
i++;		
		
//Serrated Blades - Subtlety
rank[i]=[
"Causes your attacks to ignore 1.67 armor/level of your target's Armor and increases the damage dealt by your Rupture ability by 10%.  The amount of Armor reduced increases with your level.",
"Causes your attacks to ignore 3.34 armor/level of your target's Armor and increases the damage dealt by your Rupture ability by 20%.  The amount of Armor reduced increases with your level.",
"Causes your attacks to ignore 5 armor/level of your target's Armor and increases the damage dealt by your Rupture ability by 30%.  The amount of Armor reduced increases with your level."
		];
i++;				
		
//Heightened Senses - Subtlety
rank[i]=[
"Increases your Stealth detection and reduces the chance you are hit by spells and ranged attacks by 2%.",
"Increases your Stealth detection and reduces the chance you are hit by spells and ranged attacks by 4%. More effective than Heightened Senses (Rank 1)."
		];
i++;			
		
//Preparation - Subtlety 
rank[i]=[
			"<span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>10 min cooldown</span><br>When activated, this ability immediately finishes the cooldown on your other Rogue abilities."
		];
i++;		
	
//Dirty Deeds - Subtlety 
rank[i]=[
			"Reduces the Energy Cost of your Cheap Shot and Garrote abilities by 10",
			"Reduces the Energy Cost of your Cheap Shot and Garrote abilities by 20"
		];
i++;	
		
//Hemorrhage - Subtlety 
rank[i]=[
			"<span style=text-align:left;float:left;>35 Energy</span><span style=text-align:right;float:right;>5 yd range</span><br>Instant<br>Requires Melee Weapon<br>An instant strike that damages the opponent and causes the target to hemorrhage, increasing any Physical damage dealt to the target by up to 3. Lasts 30 charges or 15 sec. Awards 1 combo point.<br><br>\
			&nbsp;Trainable Ranks Listed Below:<br>\
			&nbsp;Rank 2: 5 Damage<br>\
			&nbsp;Rank 3: 7 Damage"
		];
i++;		
		
		
//Deadliness - Subtlety
rank[i]=[
"Increases your Attack Power by 2%.",
"Increases your Attack Power by 4%.",
"Increases your Attack Power by 6%.",
"Increases your Attack Power by 8%.",
"Increases your Attack Power by 10%."
		];
i++;		
		
	
//Premeditation - Subtlety 
rank[i]=[
			"20 yd range<br><span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>2 min cooldown</span><br><span style=color:eb0504>Requires Stealth</span><br>When used, adds 2 combo points to your target. You must add to or use those combo points within 10 sec or the combo points are lost."
		];
i++;	
		
//Subtlety Talents End^^
/*
     FILE ARCHIVED ON 03:06:48 Oct 23, 2006 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:24:13 Oct 16, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1818.426
  exclusion.robots: 0.1
  exclusion.robots.policy: 0.093
  RedisCDXSource: 0.972
  esindex: 0.007
  LoadShardBlock: 1795.575 (3)
  PetaboxLoader3.datanode: 1732.718 (4)
  CDXLines.iter: 19.708 (3)
  load_resource: 64.251
  PetaboxLoader3.resolve: 44.967
*/