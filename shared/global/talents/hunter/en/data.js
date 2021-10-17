var i = 0;


var t = 0;


var className = "Hunter";

tree[i] = "Beast Mastery"; i++;
tree[i] = "Marksmanship"; i++;
tree[i] = "Survival"; i++;

i = 0;

talent[i] = [0, "Improved Aspect of the Hawk", 5, 2, 1]; i++;
talent[i] = [0, "Endurance Training", 5, 3, 1]; i++;
talent[i] = [0, "Improved Eyes of the Beast", 2, 1, 2]; i++;
talent[i] = [0, "Improved Aspect of the Monkey", 5, 2, 2]; i++; 
talent[i] = [0, "Thick Hide", 3, 3, 2]; i++;
talent[i] = [0, "Improved Revive Pet", 2, 4, 2]; i++;
talent[i] = [0, "Pathfinding", 2, 1, 3]; i++;
talent[i] = [0, "Bestial Swiftness", 1, 2, 3]; i++;
talent[i] = [0, "Unleashed Fury", 5, 3, 3]; i++;
talent[i] = [0, "Improved Mend Pet", 2, 2, 4]; i++;
talent[i] = [0, "Ferocity", 5, 3, 4]; i++;
talent[i] = [0, "Spirit Bond", 2, 1, 5]; i++;
talent[i] = [0, "Intimidation", 1, 2, 5]; i++;
talent[i] = [0, "Bestial Discipline", 2, 4, 5]; i++;
talent[i] = [0, "Frenzy", 5, 3, 6, [getTalentID("Ferocity"),5]]; i++;
talent[i] = [0, "Bestial Wrath", 1, 2, 7, [getTalentID("Intimidation"),1]]; i++;

treeStartStop[t] = i -1;
t++;

//marksmanship talents
talent[i] = [1, "Improved Concussive Shot", 5, 2, 1]; i++;
talent[i] = [1, "Efficiency", 5, 3, 1]; i++;
talent[i] = [1, "Improved Hunter's Mark", 5, 2, 2]; i++;
talent[i] = [1, "Lethal Shots", 5, 3, 2]; i++;
talent[i] = [1, "Aimed Shot", 1, 1, 3]; i++;
talent[i] = [1, "Improved Arcane Shot", 5, 2, 3]; i++;
talent[i] = [1, "Hawk Eye", 3, 4, 3]; i++;
talent[i] = [1, "Improved Serpent Sting", 5, 2, 4]; i++;
talent[i] = [1, "Mortal Shots", 5, 3, 4, [getTalentID("Lethal Shots"),5]]; i++;
talent[i] = [1, "Scatter Shot", 1, 1, 5]; i++;
talent[i] = [1, "Barrage", 3, 2, 5]; i++;
talent[i] = [1, "Improved Scorpid Sting", 3, 3, 5]; i++;
talent[i] = [1, "Ranged Weapon Specialization", 5, 3, 6]; i++;
talent[i] = [1, "Trueshot Aura", 1, 2, 7, [getTalentID("Barrage"),3]]; i++;


treeStartStop[t] = i -1;
t++;

//survival talents
talent[i] = [2, "Monster Slaying", 3, 1, 1]; i++;
talent[i] = [2, "Humanoid Slaying", 3, 2, 1]; i++;
talent[i] = [2, "Deflection", 5, 3, 1]; i++;
talent[i] = [2, "Entrapment", 5, 1, 2]; i++;
talent[i] = [2, "Savage Strikes", 2, 2, 2]; i++;
talent[i] = [2, "Improved Wing Clip", 5, 3, 2]; i++;
talent[i] = [2, "Clever Traps", 2, 1, 3]; i++;
talent[i] = [2, "Survivalist", 5, 2, 3]; i++;
talent[i] = [2, "Deterrence", 1, 3, 3]; i++;
talent[i] = [2, "Trap Mastery", 2, 1, 4]; i++;
talent[i] = [2, "Surefooted", 3, 2, 4]; i++;
talent[i] = [2, "Improved Feign Death", 2, 4, 4]; i++;
talent[i] = [2, "Killer Instinct", 3, 2, 5]; i++;
talent[i] = [2, "Counterattack", 1, 3, 5, [getTalentID("Deterrence"),1]]; i++;
talent[i] = [2, "Lightning Reflexes", 5, 3, 6]; i++;
talent[i] = [2, "Wyvern Sting", 1, 2, 7, [getTalentID("Killer Instinct"),3]]; i++;

treeStartStop[t] = i -1;
t++;

i = 0;


//Beast Mastery Talents Begin

//Improved Aspect of the Hawk - Beast Mastery
rank[i] = [
"While Aspect of the Hawk is active, all normal ranged attacks have a 1% chance of increasing ranged attack speed by 30% for 12 sec.",
"While Aspect of the Hawk is active, all normal ranged attacks have a 2% chance of increasing ranged attack speed by 30% for 12 sec.",
"While Aspect of the Hawk is active, all normal ranged attacks have a 3% chance of increasing ranged attack speed by 30% for 12 sec.",
"While Aspect of the Hawk is active, all normal ranged attacks have a 4% chance of increasing ranged attack speed by 30% for 12 sec.",
"While Aspect of the Hawk is active, all normal ranged attacks have a 5% chance of increasing ranged attack speed by 30% for 12 sec."
		];
i++;		
		
//Endurance Training - Beast Mastery
rank[i] = [
"Increases the Health of your pets by 3%.",
"Increases the Health of your pets by 6%.",
"Increases the Health of your pets by 9%.",
"Increases the Health of your pets by 12%.",
"Increases the Health of your pets by 15%."
		];
i++;		

//Improved Eyes of the Beast - Beast Mastery
rank[i] = [
"Increases the duration of your Eyes of the Beast by 30 sec.",
"Increases the duration of your Eyes of the Beast by 60 sec."
		];
i++;		
		
//Improved Aspect of the Monkey - Beast Mastery
rank[i] = [
"Increases the Dodge bonus of your Aspect of the Monkey by 1%.",
"Increases the Dodge bonus of your Aspect of the Monkey by 2%.",
"Increases the Dodge bonus of your Aspect of the Monkey by 3%.",
"Increases the Dodge bonus of your Aspect of the Monkey by 4%.",
"Increases the Dodge bonus of your Aspect of the Monkey by 5%."
		];
i++;		

//Thick Hide - Beast Mastery
rank[i] = [
"Increases the Armor rating of your pets by 10%.",
"Increases the Armor rating of your pets by 20%.",
"Increases the Armor rating of your pets by 30%."

		];
i++;		

//Improved Revive Pet - Beast Mastery
rank[i] = [
"Revive Pet's casting time is reduced by 3 sec, mana cost is reduced by 20%, and increases the health your pet returns with by an additional 15%.",
"Revive Pet's casting time is reduced by 6 sec, mana cost is reduced by 40%, and increases the health your pet returns with by an additional 30%."
		];
i++;		


//Pathfinding - Beast Mastery
rank[i] = [
"Increases the speed bonus of your Aspect of the Cheetah and Aspect of the Pack by 3%.",
"Increases the speed bonus of your Aspect of the Cheetah and Aspect of the Pack by 6%."
		];
i++;	

		
//Bestial Swiftness - Beast Mastery
rank[i] = [
"Increases the outdoor movement speed of your pets by 30%."
		];		
i++;		


//Unleashed Fury - Beast Mastery
rank[i] = [ 
"Increases the damage done by your pets by 4%.",
"Increases the damage done by your pets by 8%.",
"Increases the damage done by your pets by 12%.",
"Increases the damage done by your pets by 16%.",
"Increases the damage done by your pets by 20%."
		];
i++;		
	

//Improved Mend Pet - Beast Mastery
rank[i] = [ 
"Gives the Mend Pet spell a 15% chance of cleansing 1 Curse, Disease, Magic or Poison effect from the pet each tick.",
"Gives the Mend Pet spell a 50% chance of cleansing 1 Curse, Disease, Magic or Poison effect from the pet each tick."
		];
i++;	

//Ferocity - Beast Mastery
rank[i] = [
"Increases the critical strike chance of your pets by 3%.",
"Increases the critical strike chance of your pets by 6%.",
"Increases the critical strike chance of your pets by 9%.",
"Increases the critical strike chance of your pets by 12%.",
"Increases the critical strike chance of your pets by 15%."

		];
i++;		

//Spirit Bond - Beast Mastery 
rank[i] = [
"While your pet is active, you and your pet will regenerate 1% of total health every 10 sec.",
"While your pet is active, you and your pet will regenerate 2% of total health every 10 sec."
		];
i++;

//Intimidation - Beast Mastery
rank[i] = [
		"<span style=text-align:left;float:left;>137 Mana</span><span style=text-align:right;float:right;>100 yd range</span><br><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>1 min cooldown</span><br>Command your pet to intimidate the target on the next successful melee attack, causing a high amount of threat and stunning the target for 3 sec."
		];
i++;		

//Bestial Discipline - Beast Mastery
rank[i] = [
"Increases the Focus regeneration of your pets by 10%.",
"Increases the Focus regeneration of your pets by 20%."
		];
i++;		

//Frenzy - Beast Mastery
rank[i] = [
"Gives your pet a 20% chance to gain a 30% attack speed increase for 8 sec after dealing a critical strike.",
"Gives your pet a 40% chance to gain a 30% attack speed increase for 8 sec after dealing a critical strike.",
"Gives your pet a 60% chance to gain a 30% attack speed increase for 8 sec after dealing a critical strike.",
"Gives your pet a 80% chance to gain a 30% attack speed increase for 8 sec after dealing a critical strike.",
"Gives your pet a 100% chance to gain a 30% attack speed increase for 8 sec after dealing a critical strike."

		];		
i++;		

//Bestial Wrath - Beast Mastery			
rank[i] = [
		"<span style=text-align:left;float:left;>12% of Base Mana</span><span style=text-align:right;float:right;>100 yd range</span><br><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>2 min cooldown</span><br>Send your pet into a rage causing 50% additional damage for 18 sec. While enraged, the beast cannot be stopped unless killed."
		];
i++;		













//Improved Concussive Shot - Marksmanship
rank[i] = [
"Gives your Concussive Shot a 4% chance to stun the target for 3 sec.",
"Gives your Concussive Shot a 8% chance to stun the target for 3 sec.",
"Gives your Concussive Shot a 12% chance to stun the target for 3 sec.",
"Gives your Concussive Shot a 16% chance to stun the target for 3 sec.",
"Gives your Concussive Shot a 20% chance to stun the target for 3 sec."
		];
i++;		

//Efficiency - Marksmanship
rank[i] = [
"Reduces the Mana cost of your Shots and Stings by 2%.",
"Reduces the Mana cost of your Shots and Stings by 4%.",
"Reduces the Mana cost of your Shots and Stings by 6%.",
"Reduces the Mana cost of your Shots and Stings by 8%.",
"Reduces the Mana cost of your Shots and Stings by 10%."
		];
i++;

//Improved Hunter's Mark - Marksmanship
rank[i] = [
"Increases the Ranged Attack Power bonus of your Hunter's Mark spell by 3%.",
"Increases the Ranged Attack Power bonus of your Hunter's Mark spell by 6%.",
"Increases the Ranged Attack Power bonus of your Hunter's Mark spell by 9%.",
"Increases the Ranged Attack Power bonus of your Hunter's Mark spell by 12%.",
"Increases the Ranged Attack Power bonus of your Hunter's Mark spell by 15%."
		];
i++;		

//Lethal Shots - Marksmanship 
rank[i] = [
"Increases your critical strike chance with ranged weapons by 1%.",
"Increases your critical strike chance with ranged weapons by 2%.",
"Increases your critical strike chance with ranged weapons by 3%.",
"Increases your critical strike chance with ranged weapons by 4%.",
"Increases your critical strike chance with ranged weapons by 5%."
		];		
i++;		

//Aimed Shot - Marksmanship 
rank[i] = [
		"<span style=text-align:left;float:left;>68 Mana</span><span style=text-align:right;float:right;>8-35 yd range</span><br><span style=text-align:left;float:left;>3 sec cast</span><span style=text-align:right;float:right;>6 sec cooldown</span><br>Requires Ranged Weapon<br>An aimed shot that increases ranged damage by 70.<br><br>\
		&nbsp;Trainable Ranks Listed Below:<br>\
		&nbsp;Rank 2: 115 Mana, 125 Damage<br>\
		&nbsp;Rank 3: 160 Mana, 200 Damage<br>\
		&nbsp;Rank 4: 210 Mana, 330 Damage<br>\
		&nbsp;Rank 5: 260 Mana, 460 Damage<br>\
		&nbsp;Rank 6: 310 Mana, 600 Damage"
		];
i++;		

//Improved Arcane Shot - Marksmanship
rank[i] = [
		"Reduces the cooldown of your Arcane Shot by 0.2 sec.",
		"Reduces the cooldown of your Arcane Shot by 0.4 sec.",
		"Reduces the cooldown of your Arcane Shot by 0.6 sec.",
		"Reduces the cooldown of your Arcane Shot by 0.8 sec.",
		"Reduces the cooldown of your Arcane Shot by 1 sec."
		];
i++;		

//Hawk Eye - Marksmanship
rank[i] = [
		"Increases the range of your ranged weapons by 2 yards.",
		"Increases the range of your ranged weapons by 4 yards.",
		"Increases the range of your ranged weapons by 6 yards."
		];
i++;		

//Improved Serpent Sting - Marksmanship
rank[i] = [
"Increases the damage done by your Serpent Sting by 2%.",
"Increases the damage done by your Serpent Sting by 4%.",
"Increases the damage done by your Serpent Sting by 6%.",
"Increases the damage done by your Serpent Sting by 8%.",
"Increases the damage done by your Serpent Sting by 10%."
		];
i++;		

//Mortal Shots - Marksmanship
rank[i] = [
"Increases your ranged weapon critical strike damage bonus by 6%.",
"Increases your ranged weapon critical strike damage bonus by 12%.",
"Increases your ranged weapon critical strike damage bonus by 18%.",
"Increases your ranged weapon critical strike damage bonus by 24%.",
"Increases your ranged weapon critical strike damage bonus by 30%."
		];i++;		

//Scatter Shot - Marksmanship 
rank[i] = [
		"<span style=text-align:left;float:left;>123 Mana</span><span style=text-align:right;float:right;>15 yd range</span><br><span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>30 sec cooldown</span><br>Requires Ranged Weapon<br>A short-range shot that deals 50% weapon damage and confuses the target for 4 sec. Any damage caused will remove the effect."
		];
i++;		

//Barrage - Marksmanship
rank[i] = [
"Increases the damage done by your Multi-Shot and Volley spells by 5%.",
"Increases the damage done by your Multi-Shot and Volley spells by 10%.",
"Increases the damage done by your Multi-Shot and Volley spells by 15%."
		];
i++;

//Improved Scorpid Sting - Marksmanship

rank[i] = [
		"Reduces the Stamina of targets affected by your Scorpid Sting by 10% of the amount of Strength reduced.",
		"Reduces the Stamina of targets affected by your Scorpid Sting by 20% of the amount of Strength reduced.",
		"Reduces the Stamina of targets affected by your Scorpid Sting by 30% of the amount of Strength reduced."
		];
i++;
		
//Ranged Weapon Specialization - Marksmanship 
rank[i]=[
"Increases the damage you deal with ranged weapons by 1%.",
"Increases the damage you deal with ranged weapons by 2%.",
"Increases the damage you deal with ranged weapons by 3%.",
"Increases the damage you deal with ranged weapons by 4%.",
"Increases the damage you deal with ranged weapons by 5%."
		];
i++;			
			
//Trueshot Aura - Marksmanship 
rank[i]=[
		"325 Mana<br>Instant cast<br>Increases the Ranged and Melee Attack Power of party members within 45 yards by 50. Lasts 30 min.<br><br>\
		&nbsp;Trainable Ranks Listed Below:<br>\
		&nbsp;Rank 2: 425 Mana, 75 Attack Power<br>\
		&nbsp;Rank 3: 525 Mana, 100 Attack Power"
		];
i++;		













		
//Monster Slaying - Survival
rank[i]=[
"Increases all damage caused against Beast, Giants and Dragonkin targets by 1% and increases critical damage caused against Beasts, Giants, and Dragonkin targets by an additional 1%.",
"Increases all damage caused against Beast, Giants and Dragonkin targets by 2% and increases critical damage caused against Beasts, Giants, and Dragonkin targets by an additional 2%.",
"Increases all damage caused against Beast, Giants and Dragonkin targets by 3% and increases critical damage caused against Beasts, Giants, and Dragonkin targets by an additional 3%."
		];
i++;		
		
//Humanoid Slaying - Survival
rank[i]=[
"Increases all damage caused against Humanoid targets by 1% and increases critical damage caused against Humanoid targets by an additional 1%.",
"Increases all damage caused against Humanoid targets by 2% and increases critical damage caused against Humanoid targets by an additional 2%.",
"Increases all damage caused against Humanoid targets by 3% and increases critical damage caused against Humanoid targets by an additional 3%."
		];
i++;		
		
//Deflection - Survival
rank[i]=[
"Increases your Parry chance by 1%.",
"Increases your Parry chance by 2%.",
"Increases your Parry chance by 3%.",
"Increases your Parry chance by 4%.",
"Increases your Parry chance by 5%."
		];
i++;		
		
//Entrapment - Survival
rank[i]=[
"Gives your Immolation Trap, Frost Trap, and Explosive Trap a 5% chance to entrap the target, preventing them from moving for 5 sec.",
"Gives your Immolation Trap, Frost Trap, and Explosive Trap a 10% chance to entrap the target, preventing them from moving for 5 sec.",
"Gives your Immolation Trap, Frost Trap, and Explosive Trap a 15% chance to entrap the target, preventing them from moving for 5 sec.",
"Gives your Immolation Trap, Frost Trap, and Explosive Trap a 20% chance to entrap the target, preventing them from moving for 5 sec.",
"Gives your Immolation Trap, Frost Trap, and Explosive Trap a 25% chance to entrap the target, preventing them from moving for 5 sec."
		];
i++;		
		
//Savage Strikes - Survival
rank[i]=[
"Increases the critical strike chance of Raptor Strike and Mongoose Bite by 10%.",
"Increases the critical strike chance of Raptor Strike and Mongoose Bite by 20%."
		];
i++;		
		
//Improved Wing Clip - Survival
rank[i]=[
"Gives your Wing Clip ability a 4% chance to immobilize the target for 5 sec.",
"Gives your Wing Clip ability a 8% chance to immobilize the target for 5 sec.",
"Gives your Wing Clip ability a 12% chance to immobilize the target for 5 sec.",
"Gives your Wing Clip ability a 16% chance to immobilize the target for 5 sec.",
"Gives your Wing Clip ability a 20% chance to immobilize the target for 5 sec."
		];
i++;		
		
//Trap Efficiency - Survival
rank[i]=[
"Increases the duration of Freezing and Frost trap effects by 15% and the damage of Immolation and Explosive trap effects by 15%.",
"Increases the duration of Freezing and Frost trap effects by 30% and the damage of Immolation and Explosive trap effects by 30%."
		];
i++;		
		
//Survivalist - Survival
rank[i]=[
"Increases total health by 2%.",
"Increases total health by 4%.",
"Increases total health by 6%.",
"Increases total health by 8%.",
"Increases total health by 10%."
		];
i++;		
		
//Deterrence - Survival
rank[i]=[
		"<span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>5 min cooldown</span><br>When activated, increases your Dodge and Parry chance by 25% for 10 sec."
		];
i++;		
		
//Trap Mastery - Survival 
rank[i]=[
"Decreases the chance enemies will resist trap effects by 5%.",
"Decreases the chance enemies will resist trap effects by 10%."
		];
i++;	
		
//Surefooted - Survival 
rank[i]=[
"Increases hit chance by 1% and increases the chance movement impairing effects will be resisted by 5%.",
"Increases hit chance by 2% and increases the chance movement impairing effects will be resisted by 10%.",
"Increases hit chance by 3% and increases the chance movement impairing effects will be resisted by 15%."
		];
i++;	


//Improved Feign Death - Survival
rank[i]=[
"Reduces the chance your Feign Death ability will be resisted by 2%.",
"Reduces the chance your Feign Death ability will be resisted by 4%."
		];
i++;	


//Killer Instinct - Survival
rank[i]=[
"Increases your critical strike chance with all attacks by 1%.",
"Increases your critical strike chance with all attacks by 2%.",
"Increases your critical strike chance with all attacks by 3%."
		];
i++;	


//Counterattack - Survival
rank[i]=[
		"<span style=text-align:left;float:left;>45 Mana</span><span style=text-align:right;float:right;>5 yd range</span><br><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>5 sec cooldown</span><br>A strike that becomes active after parrying an opponent's attack. This attack deals 40 damage and immobilizes the target for 5 sec. Counterattack cannot be blocked, dodged, or parried.<br><br>\
		&nbsp;Trainable Ranks Listed Below<br>\
		&nbsp;Rank 2: 65 Mana, 70 Damage<br>\
		&nbsp;Rank 3: 85 Mana, 110 Damage"
		];
i++;	


//Lightning Reflexes - Survival
rank[i]=[
"Increases your Agility by 3%.",
"Increases your Agility by 6%.",
"Increases your Agility by 9%.",
"Increases your Agility by 12%.",
"Increases your Agility by 15%."
		];
i++;	

//Wyvern Sting - Survival
rank[i]=[
		"<span style=text-align:left;float:left;>115 Mana</span><span style=text-align:right;float:right;>8-35 yd range</span><br><span style=text-align:left;float:left;>Attack speed</span><span style=text-align:right;float:right;>2 min cooldown</span><br>A stinging shot that puts the target to sleep for 12 sec. Any damage will cancel the effect. When the target wakes up, the Sting causes 300 Nature damage over 12 sec. Only usable out of combat. Only one Sting per Hunter can be active on the target at a time.<br><br>\
		&nbsp;Trainable Ranks Listed Below:<br>\
		&nbsp;Rank 2: 155 Mana, 420 Damage<br>\
		&nbsp;Rank 3: 255 Mana, 600 Damage"
		];
i++;	
		
//Survival Talents End^^
/*
     FILE ARCHIVED ON 03:28:20 Nov 11, 2006 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:21:53 Oct 16, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 92.934
  exclusion.robots: 0.158
  exclusion.robots.policy: 0.144
  RedisCDXSource: 2.461
  esindex: 0.01
  LoadShardBlock: 66.433 (3)
  PetaboxLoader3.datanode: 123.333 (4)
  CDXLines.iter: 21.027 (3)
  load_resource: 159.815
  PetaboxLoader3.resolve: 88.003
*/