var i = 0;
var t = 0;


var className = "Paladin Talents";
var talentPath = "/info/basics/talents/";


tree[i] = "Holy"; i++;
tree[i] = "Protection"; i++;
tree[i] = "Retribution"; i++;

i = 0;

talent[i] = [0, "Divine Strength", 5, 2, 1]; i++;
talent[i] = [0, "Divine Intellect", 5, 3, 1]; i++;
talent[i] = [0, "Spiritual Focus", 5, 2, 2]; i++;
talent[i] = [0, "Improved Seal of Righteousness", 5, 3, 2]; i++; 
talent[i] = [0, "Healing Light", 3, 1, 3]; i++;
talent[i] = [0, "Consecration", 1, 2, 3]; i++;
talent[i] = [0, "Improved Lay on Hands", 2, 3, 3]; i++;
talent[i] = [0, "Unyielding Faith", 2, 4, 3]; i++;
talent[i] = [0, "Illumination", 5, 2, 4]; i++;
talent[i] = [0, "Improved Blessing of Wisdom", 2, 3, 4]; i++;
talent[i] = [0, "Divine Favor", 1, 2, 5, [getTalentID("Illumination"),5]]; i++;
talent[i] = [0, "Lasting Judgement", 3, 3, 5]; i++;
talent[i] = [0, "Holy Power", 5, 3, 6]; i++;
talent[i] = [0, "Holy Shock", 1, 2, 7, [getTalentID("Divine Favor"),1]]; i++;

treeStartStop[t] = i -1;
t++;

//protection talents
talent[i] = [1, "Improved Devotion Aura", 5, 2, 1]; i++;
talent[i] = [1, "Redoubt", 5, 3, 1]; i++;
talent[i] = [1, "Precision", 3, 1, 2]; i++;
talent[i] = [1, "Guardian's Favor", 2, 2, 2]; i++;
talent[i] = [1, "Toughness", 5, 4, 2]; i++;
talent[i] = [1, "Blessing of Kings", 1, 1, 3]; i++;
talent[i] = [1, "Improved Righteous Fury", 3, 2, 3]; i++;
talent[i] = [1, "Shield Specialization", 3, 3, 3, [getTalentID("Redoubt"),5]]; i++;
talent[i] = [1, "Anticipation", 5, 4, 3]; i++;
talent[i] = [1, "Improved Hammer of Justice", 3, 2, 4]; i++;
talent[i] = [1, "Improved Concentration Aura", 3, 3, 4]; i++;
talent[i] = [1, "Blessing of Sanctuary", 1, 2, 5]; i++;
talent[i] = [1, "Reckoning", 5, 3, 5]; i++;
talent[i] = [1, "One-Handed Weapon Specialization", 5, 3, 6]; i++;
talent[i] = [1, "Holy Shield", 1, 2, 7, [getTalentID("Blessing of Sanctuary"),1]]; i++;

treeStartStop[t] = i -1;
t++;

//retribution talents
talent[i] = [2, "Improved Blessing of Might", 5, 2, 1]; i++;
talent[i] = [2, "Benediction", 5, 3, 1]; i++;
talent[i] = [2, "Improved Judgement", 2, 1, 2]; i++;
talent[i] = [2, "Improved Seal of the Crusader", 3, 2, 2]; i++;
talent[i] = [2, "Deflection", 5, 3, 2]; i++;
talent[i] = [2, "Vindication", 3, 1, 3]; i++;
talent[i] = [2, "Conviction", 5, 2, 3]; i++;
talent[i] = [2, "Seal of Command", 1, 3, 3]; i++;
talent[i] = [2, "Pursuit of Justice", 2, 4, 3]; i++;
talent[i] = [2, "Eye for an Eye", 2, 1, 4]; i++;
talent[i] = [2, "Improved Retribution Aura", 2, 3, 4]; i++;
talent[i] = [2, "Two-Handed Weapon Specialization", 3, 1, 5]; i++;
talent[i] = [2, "Sanctity Aura", 1, 3, 5]; i++;
talent[i] = [2, "Vengeance", 5, 2, 6, [getTalentID("Conviction"),5]]; i++;
talent[i] = [2, "Repentance", 1, 2, 7]; i++;

treeStartStop[t] = i -1;
t++;

i = 0;


//Holy Talents Begin

//Divine Strength - Holy
rank[i] = [
"Increases your Strength by 2%",
"Increases your Strength by 4%",
"Increases your Strength by 6%",
"Increases your Strength by 8%",
"Increases your Strength by 10%"
		];
i++;		
		
//Divine Intellect - Holy
rank[i] = [
"Increases your total Intellect by 2%.",
"Increases your total Intellect by 4%.",
"Increases your total Intellect by 6%.",
"Increases your total Intellect by 8%.",
"Increases your total Intellect by 10%."
		];
i++;		

//Spiritual Focus - Holy
rank[i] = [
"Gives your Flash of Light and Holy Light spells a 14% chance to not lose casting time when you take damage.",
"Gives your Flash of Light and Holy Light spells a 28% chance to not lose casting time when you take damage.",
"Gives your Flash of Light and Holy Light spells a 42% chance to not lose casting time when you take damage.",
"Gives your Flash of Light and Holy Light spells a 56% chance to not lose casting time when you take damage.",
"Gives your Flash of Light and Holy Light spells a 70% chance to not lose casting time when you take damage."
		];
i++;		
		
//Improved Seal of Righteousness - Holy
rank[i] = [
"Increases the damage done by your Seal of Righteousness by 3%.",
"Increases the damage done by your Seal of Righteousness by 6%.",
"Increases the damage done by your Seal of Righteousness by 9%.",
"Increases the damage done by your Seal of Righteousness by 12%.",
"Increases the damage done by your Seal of Righteousness by 15%."
		];
i++;		

//Healing Light - Holy
rank[i] = [
"Increases the amount healed by your Holy Light and Flash of Light spells by 4%.",
"Increases the amount healed by your Holy Light and Flash of Light spells by 8%.",
"Increases the amount healed by your Holy Light and Flash of Light spells by 12%."
		];
i++;		

//Consecration - Retribution 
rank[i]=[
"135 Mana<br><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>8 sec cooldown</span><br>Consecrates the land beneath the Paladin, doing 64 Holy damage over 8 sec to enemies who enter the area.<br><br>\
&nbsp;Trainable Ranks Listed Below:<br>\
&nbsp;Rank 2: 235 Mana, 120 Holy damage<br>\
&nbsp;Rank 3: 320 Mana, 192 Holy damage<br>\
&nbsp;Rank 4: 435 Mana, 280 Holy damage<br>\
&nbsp;Rank 5: 565 Mana, 384 Holy damage"
  ];
i++;  
	
//Improved Lay on Hands - Holy
rank[i] = [
		"Gives the target of your Lay on Hands spell a 15% bonus to their armor value from items for 2 min. In addition, the cooldown for your Lay on Hands spell is reduced by 10 min.",
		"Gives the target of your Lay on Hands spell a 30% bonus to their armor value from items for 2 min. In addition, the cooldown for your Lay on Hands spell is reduced by 20 min."
		];		
i++;		


//Unyielding Faith - Holy
rank[i] = [ 
"Increases your chance to resist Fear and Disorient effects by an additional 5%.",
"Increases your chance to resist Fear and Disorient effects by an additional 10%."
		];
i++;		

//Illumination - Holy
rank[i] = [
"After getting a critical effect from your Flash of Light, Holy Light or Holy Shock heal spell, gives you a 20% chance to gain Mana equal to the base cost of the spell.",
"After getting a critical effect from your Flash of Light, Holy Light or Holy Shock heal spell, gives you a 40% chance to gain Mana equal to the base cost of the spell.",
"After getting a critical effect from your Flash of Light, Holy Light or Holy Shock heal spell, gives you a 60% chance to gain Mana equal to the base cost of the spell.",
"After getting a critical effect from your Flash of Light, Holy Light or Holy Shock heal spell, gives you a 80% chance to gain Mana equal to the base cost of the spell.",
"After getting a critical effect from your Flash of Light, Holy Light or Holy Shock heal spell, gives you a 100% chance to gain Mana equal to the base cost of the spell."
		];
i++;		

//Improved Blessing of Wisdom - Holy 
rank[i] = [
"Increases the effect of your Blessing of Wisdom spell by 10%.",
"Increases the effect of your Blessing of Wisdom spell by 20%."
		];
i++;		

//Divine Favor - Holy 
rank[i] = [
		"60 Mana<br><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>2 min cooldown</span><br>When activated, gives your next Flash of Light or Holy Light spell a 100% critical effect chance."
		];
i++;		

//Lasting Judgement - Holy
rank[i] = [
		"Increases the duration of your Judgement of Light and Judgement of Wisdom by 10 sec.",
		"Increases the duration of your Judgement of Light and Judgement of Wisdom by 20 sec.",
		"Increases the duration of your Judgement of Light and Judgement of Wisdom by 30 sec."		
		];
i++;		

//Holy Power - Holy
rank[i] = [
"Increases the critical effect chance of your Holy spells by 1%.",
"Increases the critical effect chance of your Holy spells by 2%.",
"Increases the critical effect chance of your Holy spells by 3%.",
"Increases the critical effect chance of your Holy spells by 4%.",
"Increases the critical effect chance of your Holy spells by 5%."
		];
i++;		

//Holy Shock - Holy   
rank[i] = [
  "<span style=text-align:left;float:left;>255 Mana</span><span style=text-align:right;float:right;>20 yd range</span><br><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>30 sec cooldown</span><br>Blasts the target with Holy energy, causing 204 to 220 Holy damage to an enemy, or 204 to 220 healing to an ally.<br><br>\
  &nbsp;Trainable Ranks Listed Below<br>\
  &nbsp;Rank 2: 275 Mana, 279-302 Damage<br>\
  &nbsp;Rank 3: 325 Mana, 365-396 Damage"
  ];	

i++;


//Improved Devotion Aura - Protection 
rank[i] = [
"Increases the armor bonus of your Devotion Aura by 5%.",
"Increases the armor bonus of your Devotion Aura by 10%.",
"Increases the armor bonus of your Devotion Aura by 15%.",
"Increases the armor bonus of your Devotion Aura by 20%.",
"Increases the armor bonus of your Devotion Aura by 25%."
		];
i++;		

//Redoubt - Protection
rank[i] = [
"Increases your chance to block attacks with your shield by 6% after being the victim of a critical strike. Lasts 10 sec or 5 blocks.",
"Increases your chance to block attacks with your shield by 12% after being the victim of a critical strike. Lasts 10 sec or 5 blocks.",
"Increases your chance to block attacks with your shield by 18% after being the victim of a critical strike. Lasts 10 sec or 5 blocks.",
"Increases your chance to block attacks with your shield by 24% after being the victim of a critical strike. Lasts 10 sec or 5 blocks.",
"Increases your chance to block attacks with your shield by 30% after being the victim of a critical strike. Lasts 10 sec or 5 blocks."
		];
i++;

//Precision - Protection
rank[i] = [
"Increases your chance to hit with melee weapons by 1%.",
"Increases your chance to hit with melee weapons by 2%.",
"Increases your chance to hit with melee weapons by 3%."
		];
i++;		

//Guardian's Favor - Protection 
rank[i] = [
"Reduces the cooldown of your Blessing of Protection by 60 sec and increases the duration of your Blessing of Freedom 3 sec.",
"Reduces the cooldown of your Blessing of Protection by 120 sec and increases the duration of your Blessing of Freedom 6 sec."
		];		
i++;		

//Toughness - Protection 
rank[i] = [
		"Increases your armor value from items by 2%.",
		"Increases your armor value from items by 4%.",
		"Increases your armor value from items by 6%.",
		"Increases your armor value from items by 8%.",
		"Increases your armor value from items by 10%."		
		];
i++;		

//Blessing of Kings - Retribution 
rank[i]=[
		"<span style=text-align:left;float:left;>75 Mana</span><span style=text-align:right;float:right;>30 yd range</span><br>Instant cast<br>Places a Blessing on the friendly target, increasing total stats by 10% for 5 min. Players may only have one Blessing on them per Paladin at any one time."
		];
i++;	

//Improved Righteous Fury - Protection 
rank[i] = [
"Increases the amount of threat generated by your Righteous Fury spell by 16%.",
"Increases the amount of threat generated by your Righteous Fury spell by 33%.",
"Increases the amount of threat generated by your Righteous Fury spell by 50%."
		];
i++;		

//Shield Specialization - Protection 
rank[i] = [
"Increases the amount of damage absorbed by your shield by 10%.",
"Increases the amount of damage absorbed by your shield by 20%.",
"Increases the amount of damage absorbed by your shield by 30%."
		];
i++;		

//Anticipation - Protection
rank[i] = [
"Increases your Defense skill by 2.",
"Increases your Defense skill by 4.",
"Increases your Defense skill by 6.",
"Increases your Defense skill by 8.",
"Increases your Defense skill by 10.",
		];
i++;		

//Improved Hammer of Justice - Protection 
rank[i] = [
"Decreases the cooldown of your Hammer of Justice spell by 5 sec.",
"Decreases the cooldown of your Hammer of Justice spell by 10 sec.",
"Decreases the cooldown of your Hammer of Justice spell by 15 sec."
		];
i++;		

//Improved Concentration Aura - Protection
rank[i] = [
"Increases the effect of your Concentration Aura by an additional 5% and gives all group members affected by the aura an additional 5% chance to resist Silence and Interrupt effects.",
"Increases the effect of your Concentration Aura by an additional 10% and gives all group members affected by the aura an additional 10% chance to resist Silence and Interrupt effects.",
"Increases the effect of your Concentration Aura by an additional 15% and gives all group members affected by the aura an additional 15% chance to resist Silence and Interrupt effects."
		];i++;		


//Blessing of Sanctuary - Protection 
rank[i] = [
  "<span style=text-align:left;float:left;>60 Mana</span><span style=text-align:right;float:right;>30 yd range</span><br>Instant cast<br>Places a Blessing on the friendly target, reducing damage dealt from all sources by up to 7 for 5 min.  In addition, when the target blocks a melee attack the attacker will take 14 Holy damage. Players may only have one Blessing on them per Paladin at any one time.<br><br>\
  &nbsp;Trainable Ranks Listed Below:<br>\
  &nbsp;Rank 2: 85 Mana, 10 Damage Reduction<br>\
  &nbsp;Rank 3: 110 Mana, 14 Damage Reduction<br>\
  &nbsp;Rank 4: 145 Mana, 19 Damage Reduction<br>\
  &nbsp;Greater (Raid): 270 Mana, 24 Damage Reduction"
  ];
i++;  
	

//Reckoning - Protection
rank[i] = [
		"Gives you a 20% chance to gain an extra attack after being the victim of a critical strike.",
		"Gives you a 40% chance to gain an extra attack after being the victim of a critical strike.",
		"Gives you a 60% chance to gain an extra attack after being the victim of a critical strike.",
		"Gives you a 80% chance to gain an extra attack after being the victim of a critical strike.",
		"Gives you a 100% chance to gain an extra attack after being the victim of a critical strike."						
		];
i++;

//One-Handed Weapon Specialization - Protection
rank[i]=[
"Increases the damage you deal with one-handed melee weapons by 2%.",
"Increases the damage you deal with one-handed melee weapons by 4%.",
"Increases the damage you deal with one-handed melee weapons by 6%.",
"Increases the damage you deal with one-handed melee weapons by 8%.",
"Increases the damage you deal with one-handed melee weapons by 10%."
			];
i++;			
			
//Holy Shield - Protection
rank[i] = [
  "175 Mana<br><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>10 sec cooldown</span><br>Requires Shields<br>Increases chance to block by 30% for 10 sec and deals 50 Holy damage for each attack blocked while active. Each block expends a charge. 4 charges.<br><br>\
  &nbsp;Trainable Ranks Listed Below:<br>\
  &nbsp;Rank 2: 195 Mana, 95 Damage<br>\
  &nbsp;Rank 3: 240 Mana, 130 Damage"
  ];
i++;




		
//Improved Blessing of Might - Retribution
rank[i]=[
"Increases the Attack Power bonus of your Blessing of Might by 4%.",
"Increases the Attack Power bonus of your Blessing of Might by 8%.",
"Increases the Attack Power bonus of your Blessing of Might by 12%.",
"Increases the Attack Power bonus of your Blessing of Might by 16%.",
"Increases the Attack Power bonus of your Blessing of Might by 20%."
		];
i++;		
		
//Benediction - Retribution  
rank[i]=[
"Reduces the Mana cost of your Judgement and Seal spells by 3%.",
"Reduces the Mana cost of your Judgement and Seal spells by 6%.",
"Reduces the Mana cost of your Judgement and Seal spells by 9%.",
"Reduces the Mana cost of your Judgement and Seal spells by 12%.",
"Reduces the Mana cost of your Judgement and Seal spells by 15%."
		];
i++;		
		
//Improved Judgement - Retribution 
rank[i]=[
"Decreases the cooldown of your Judgement spell by 1 sec.",
"Decreases the cooldown of your Judgement spell by 2 sec."
		];
i++;		
		
//Improved Seal of the Crusader - Retribution  
rank[i]=[
"Increases the Attack Power bonus of your Seal of the Crusader and the Holy damage increase of your Judgement of the Crusader by 5%.",
"Increases the Attack Power bonus of your Seal of the Crusader and the Holy damage increase of your Judgement of the Crusader by 10%.",
"Increases the Attack Power bonus of your Seal of the Crusader and the Holy damage increase of your Judgement of the Crusader by 15%."
		];
i++;		
		
//Deflection - Retribution
rank[i]=[
"Increases your Parry chance by 1%.",
"Increases your Parry chance by 2%.",
"Increases your Parry chance by 3%.",
"Increases your Parry chance by 4%.",
"Increases your Parry chance by 5%."
		];
i++;		
		
//Vindication - Retribution
rank[i]=[
"Gives the Paladin's damaging melee attacks a chance to reduce the target's Strength and Agility by 5% for 10 sec.",
"Gives the Paladin's damaging melee attacks a chance to reduce the target's Strength and Agility by 10% for 10 sec.",
"Gives the Paladin's damaging melee attacks a chance to reduce the target's Strength and Agility by 15% for 10 sec."
		];
i++;		
	
//Conviction - Retribution
rank[i]=[
		"Increases your chance to get a critical strike with melee weapons by 1%.",
		"Increases your chance to get a critical strike with melee weapons by 2%.",
		"Increases your chance to get a critical strike with melee weapons by 3%.",
		"Increases your chance to get a critical strike with melee weapons by 4%.",
		"Increases your chance to get a critical strike with melee weapons by 5%."				
		];
i++;	
		
//Seal of Command - Retribution
rank[i]=[
		"65 Mana<br>Instant cast<br>Gives the Paladin a chance to deal additional Holy damage equal to 70% of the damage of the attack. Only one Seal can be active on the Paladin at any one time. Lasts 30 sec.<br><br>Unleashing this Seal's energy will judge an enemy, instantly causing 68 to 74 Holy damage, 137 to 147 if the target is stunned."
		];
i++;		
		
//Pursuit of Justice - Retribution
rank[i]=[
"Increases movement and mounted movement speed by 4%. This does not stack with other movement speed increasing effects.",
"Increases movement and mounted movement speed by 8%. This does not stack with other movement speed increasing effects."
		];
i++;		
		
//Eye for an Eye - Retribution  
rank[i]=[
"All spell criticals against you cause 15% of the damage taken to the caster as well. The damage caused by Eye for an Eye will not exceed 50% of the Paladin's total health.",
"All spell criticals against you cause 30% of the damage taken to the caster as well. The damage caused by Eye for an Eye will not exceed 50% of the Paladin's total health."
		];
i++;		
		
//Improved Retribution Aura - Retribution  
rank[i]=[
"Increases the damage done by your Retribution Aura by 25%.",
"Increases the damage done by your Retribution Aura by 50%."
		];
i++;	

//Two-Handed Weapon Specialization - Retribution 
rank[i]=[
		"Increases the damage you deal with two-handed melee weapons by 2%.",
		"Increases the damage you deal with two-handed melee weapons by 4%.",
		"Increases the damage you deal with two-handed melee weapons by 6%."
		];
i++;	


//Sanctity Aura - Holy
rank[i] = [
		"Instant<br>Increases Holy damage done by party members within 30 yards by 10%. Players may only have one Aura on them per Paladin at any one time."
		];
i++;		
		
//Vengeance - Retribution  
rank[i]=[
"Gives you a 3% bonus to Physical and Holy damage you deal for 8 sec after dealing a critical strike from a swing, spell or ability.",
"Gives you a 6% bonus to Physical and Holy damage you deal for 8 sec after dealing a critical strike from a swing, spell or ability.",
"Gives you a 9% bonus to Physical and Holy damage you deal for 8 sec after dealing a critical strike from a swing, spell or ability.",
"Gives you a 12% bonus to Physical and Holy damage you deal for 8 sec after dealing a critical strike from a swing, spell or ability.",
"Gives you a 15% bonus to Physical and Holy damage you deal for 8 sec after dealing a critical strike from a swing, spell or ability."
		];
i++;	


//Repentance - Protection
rank[i]=[
		"<span style=text-align:left;float:left;>60 Mana</span><span style=text-align:right;float:right;>20 yd range</span><br><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>1 min cooldown</span><br>Puts the enemy target in a state of meditation for up to 6 sec. Any damage caused will awaken the target. Only works against Humanoids."
		];
i++;		


//Retribution Talents End^^


/*
     FILE ARCHIVED ON 16:08:03 Jul 18, 2006 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:40:05 Sep 20, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots.policy: 0.137
  load_resource: 166.331
  exclusion.robots: 0.148
  captures_list: 109.384
  CDXLines.iter: 28.225 (3)
  PetaboxLoader3.resolve: 43.238
  LoadShardBlock: 75.263 (3)
  RedisCDXSource: 1.338
  esindex: 0.015
  PetaboxLoader3.datanode: 140.874 (4)
*/