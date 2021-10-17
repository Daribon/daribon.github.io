var i = 0;


var t = 0;


var className = "Warlock";
var talentPath = "/info/basics/talents/";


tree[i] = "Affliction"; i++;
tree[i] = "Demonology"; i++;
tree[i] = "Destruction"; i++;

i = 0;

talent[i] = [0, "Suppression", 5, 2, 1]; i++;
talent[i] = [0, "Improved Corruption", 5, 3, 1]; i++;
talent[i] = [0, "Improved Curse of Weakness", 3, 1, 2]; i++;
talent[i] = [0, "Improved Drain Soul", 2, 2, 2]; i++; 
talent[i] = [0, "Improved Life Tap", 2, 3, 2]; i++;
talent[i] = [0, "Improved Life Drain", 5, 4, 2]; i++;
talent[i] = [0, "Improved Curse of Agony", 3, 1, 3]; i++;
talent[i] = [0, "Fel Concentration", 5, 2, 3]; i++;
talent[i] = [0, "Amplify Curse", 1, 3, 3]; i++;
talent[i] = [0, "Grim Reach", 2, 1, 4]; i++;
talent[i] = [0, "Nightfall", 2, 2, 4]; i++;
talent[i] = [0, "Improved Drain Mana", 2, 4, 4]; i++;
talent[i] = [0, "Siphon Life", 1, 2, 5]; i++;
talent[i] = [0, "Curse of Exhaustion", 1, 3, 5, [getTalentID("Amplify Curse"),1]]; i++;
talent[i] = [0, "Improved Curse of Exhaustion", 4, 4, 5, [getTalentID("Curse of Exhaustion"),1]]; i++;
talent[i] = [0, "Shadow Mastery", 5, 2, 6, [getTalentID("Siphon Life"),1]]; i++;
talent[i] = [0, "Dark Pact", 1, 2, 7]; i++;

treeStartStop[t] = i -1;
t++;

//demonology talents
talent[i] = [1, "Improved Healthstone", 2, 1, 1]; i++;
talent[i] = [1, "Improved Imp", 3, 2, 1]; i++;
talent[i] = [1, "Demonic Embrace", 5, 3, 1]; i++;
talent[i] = [1, "Improved Health Funnel", 2, 1, 2]; i++;
talent[i] = [1, "Improved Voidwalker", 3, 2, 2]; i++;
talent[i] = [1, "Fel Intellect", 5, 3, 2]; i++;
talent[i] = [1, "Improved Succubus", 3, 1, 3]; i++;
talent[i] = [1, "Fel Domination", 1, 2, 3]; i++;
talent[i] = [1, "Fel Stamina", 5, 3, 3]; i++;
talent[i] = [1, "Master Summoner", 2, 2, 4, [getTalentID("Fel Domination"),1]]; i++;
talent[i] = [1, "Unholy Power", 5, 3, 4]; i++;
talent[i] = [1, "Improved Enslave Demon", 5, 1, 5]; i++;
talent[i] = [1, "Demonic Sacrifice", 1, 2, 5]; i++;
talent[i] = [1, "Improved Firestone", 2, 4, 5]; i++;
talent[i] = [1, "Master Demonologist", 5, 3, 6, [getTalentID("Unholy Power"),5]]; i++;
talent[i] = [1, "Soul Link", 1, 2, 7, [getTalentID("Demonic Sacrifice"),1]]; i++;
talent[i] = [1, "Improved Spellstone", 2, 3, 7]; i++;

treeStartStop[t] = i -1;
t++;

//destruction talents
talent[i] = [2, "Improved Shadow Bolt", 5, 2, 1]; i++;
talent[i] = [2, "Cataclysm", 5, 3, 1]; i++;
talent[i] = [2, "Bane", 5, 2, 2]; i++;
talent[i] = [2, "Aftermath", 5, 3, 2]; i++;
talent[i] = [2, "Improved Firebolt", 2, 1, 3]; i++;
talent[i] = [2, "Improved Lash of Pain", 2, 2, 3]; i++;
talent[i] = [2, "Devastation", 5, 3, 3]; i++;
talent[i] = [2, "Shadowburn", 1, 4, 3]; i++;
talent[i] = [2, "Intensity", 2, 1, 4]; i++;
talent[i] = [2, "Destructive Reach", 2, 2, 4]; i++;
talent[i] = [2, "Improved Searing Pain", 5, 4, 4]; i++;
talent[i] = [2, "Pyroclasm", 2, 1, 5, [getTalentID("Intensity"),2]]; i++;
talent[i] = [2, "Improved Immolate", 5, 2, 5]; i++;
talent[i] = [2, "Ruin", 1, 3, 5, [getTalentID("Devastation"),5]]; i++;
talent[i] = [2, "Emberstorm", 5, 3, 6]; i++;
talent[i] = [2, "Conflagrate", 1, 2, 7, [getTalentID("Improved Immolate"),5]]; i++;

treeStartStop[t] = i -1;
t++;

i = 0;


//Affliction Talents Begin

//Suppression - Affliction
rank[i] = [
"Reduces the chance for enemies to resist your Affliction spells by 2%.",
"Reduces the chance for enemies to resist your Affliction spells by 4%.",
"Reduces the chance for enemies to resist your Affliction spells by 6%.",
"Reduces the chance for enemies to resist your Affliction spells by 8%.",
"Reduces the chance for enemies to resist your Affliction spells by 10%."
		];
i++;		
		
//Improved Corruption - Affliction
rank[i] = [
"Reduces the casting time of your Corruption spell by 0.4 sec.",
"Reduces the casting time of your Corruption spell by 0.8 sec.",
"Reduces the casting time of your Corruption spell by 1.2 sec.",
"Reduces the casting time of your Corruption spell by 1.6 sec.",
"Reduces the casting time of your Corruption spell by 2 sec."
		];
i++;		

//Improved Curse of Weakness - Affliction
rank[i] = [
"Increases the effect of your Curse of Weakness by 6%.",
"Increases the effect of your Curse of Weakness by 13%.",
"Increases the effect of your Curse of Weakness by 20%."
		];
i++;		
		
//Improved Drain Soul - Affliction
rank[i] = [
"Gives you a 50% chance to get a 100% increase to your Mana regeneration for 10 sec if the target dies while you drain its soul. In addition your Mana may continue to regenerate while casting at 50% of normal.",
"Gives you a 100% chance to get a 100% increase to your Mana regeneration for 10 sec if the target dies while you drain its soul. In addition your Mana may continue to regenerate while casting at 50% of normal."
		];
i++;		

//Improved Life Tap - Affliction
rank[i] = [
"Increases the amount of Mana awarded by your Life Tap spell by 10%.",
"Increases the amount of Mana awarded by your Life Tap spell by 20%."
		];
i++;		

//Improved Life Drain - Affliction
rank[i] = [
"Increases the Health drained by your Life Drain spell by 2%.",
"Increases the Health drained by your Life Drain spell by 4%.",
"Increases the Health drained by your Life Drain spell by 6%.",
"Increases the Health drained by your Life Drain spell by 8%.",
"Increases the Health drained by your Life Drain spell by 10%."
		];
i++;		
		
//Improved Curse of Agony - Affliction
rank[i] = [
"Increases the damage done by your Curse of Agony by 2%.",
"Increases the damage done by your Curse of Agony by 4%.",
"Increases the damage done by your Curse of Agony by 6%."
		];		
i++;		


//Fel Concentration - Affliction
rank[i] = [ 
"Gives you a 14% chance to avoid interruption caused by damage while channeling the Drain Life, Drain Mana, or Drain Soul spell.",
"Gives you a 28% chance to avoid interruption caused by damage while channeling the Drain Life, Drain Mana, or Drain Soul spell.",
"Gives you a 42% chance to avoid interruption caused by damage while channeling the Drain Life, Drain Mana, or Drain Soul spell.",
"Gives you a 56% chance to avoid interruption caused by damage while channeling the Drain Life, Drain Mana, or Drain Soul spell.",
"Gives you a 70% chance to avoid interruption caused by damage while channeling the Drain Life, Drain Mana, or Drain Soul spell."
		];
i++;		


//Amplify Curse - Affliction
rank[i] = [
		"<span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>3 min cooldown</span><br>Increases the effect of your next Curse of Weakness or Curse of Agony by 50%, or your next Curse of Exhaustion by 20%."
		];
i++;		

//Grim Reach - Affliction
rank[i] = [
"Increases the range of your Affliction spells by 10%.",
"Increases the range of your Affliction spells by 20%."
		];
i++;		

//Nightfall - Affliction	
rank[i] = [
"Gives your Corruption and Drain Life spells a 2% chance to cause you to enter a Shadow Trance state after damaging the opponent. The Shadow Trance state reduces the casting time of your next Shadow Bolt spell by 100%.",
"Gives your Corruption and Drain Life spells a 4% chance to cause you to enter a Shadow Trance state after damaging the opponent. The Shadow Trance state reduces the casting time of your next Shadow Bolt spell by 100%."
		];
i++;		

//Improved Drain Mana - Affliction
rank[i] = [
"Causes 15% of the Mana drained by your Drain Mana spell to damage the opponent.",
"Causes 30% of the Mana drained by your Drain Mana spell to damage the opponent."
		];
i++;		

//Siphon Life - Affliction
rank[i] = [
		"<span style=text-align:left;float:left;>150 Mana</span><span style=text-align:right;float:right;>30 yd range</span><br>Instant cast<br>Transfers 15 health from the target to the caster every 3 sec. Lasts 30 sec."
		];
i++;		

//Curse of Exhaustion - Affliction
rank[i] = [
		"<span style=text-align:left;float:left;>108 Mana</span><span style=text-align:right;float:right;>30 yd range</span><br>Instant cast<br>Reduces the target's speed to 90% of normal for 12 sec. Only one Curse per Warlock can be active on any one target."
		];		
i++;		

//Improved Curse of Exhaustion - Affliction			
rank[i] = [
"Increases the speed reduction of your Curse of Exhaustion by 5%.",
"Increases the speed reduction of your Curse of Exhaustion by 10%.",
"Increases the speed reduction of your Curse of Exhaustion by 15%.",
"Increases the speed reduction of your Curse of Exhaustion by 20%."
		];
i++;		


//Shadow Mastery - Affliction
rank[i] = [
"Increases the damage dealt or life drained by your Shadow spells by 2%.",
"Increases the damage dealt or life drained by your Shadow spells by 4%.",
"Increases the damage dealt or life drained by your Shadow spells by 6%.",
"Increases the damage dealt or life drained by your Shadow spells by 8%.",
"Increases the damage dealt or life drained by your Shadow spells by 10%."
		];
i++;



//Dark Pact - Affliction
rank[i] = [
		"20 yd range<br>Instant<br>Drains 150 of your pet's Mana, returning 100% to you."
		];
i++;






















//Improved Healthstone - Demonology
rank[i] = [
"Increases the amount of Health restored by your Healthstone by 10%.",
"Increases the amount of Health restored by your Healthstone by 20%."
		];
i++;		

//Improved Imp - Demonology
rank[i] = [
"Increases the effect of your Imp's Firebolt, Fire Shield, and Blood Pact spells by 10%.",
"Increases the effect of your Imp's Firebolt, Fire Shield, and Blood Pact spells by 20%.",
"Increases the effect of your Imp's Firebolt, Fire Shield, and Blood Pact spells by 30%."
		];
i++;

//Demonic Embrace - Demonology
rank[i] = [
"Increases your total Stamina by 3% but reduces your total Spirit by 1%.",
"Increases your total Stamina by 6% but reduces your total Spirit by 2%.",
"Increases your total Stamina by 9% but reduces your total Spirit by 3%.",
"Increases your total Stamina by 12% but reduces your total Spirit by 4%.",
"Increases your total Stamina by 15% but reduces your total Spirit by 5%."
		];
i++;		

//Improved Health Funnel - Demonology
rank[i] = [
"Increases the amount of Health transfered by your Health Funnel spell by 10%.",
"Increases the amount of Health transfered by your Health Funnel spell by 20%."
		];		
i++;		

//Improved Voidwalker - Demonology
rank[i] = [

"Increases the effectiveness of your Voidwalker's Torment, Consume Shadows, Sacrifice and Suffering spells by 10%.",
"Increases the effectiveness of your Voidwalker's Torment, Consume Shadows, Sacrifice and Suffering spells by 20%.",
"Increases the effectiveness of your Voidwalker's Torment, Consume Shadows, Sacrifice and Suffering spells by 30%."
		];
i++;		

//Fel Intellect - Demonology
rank[i] = [
"Increases the maximum Mana of your Imp, Voidwalker, Succubus, and Felhunter by 3%.",
"Increases the maximum Mana of your Imp, Voidwalker, Succubus, and Felhunter by 6%.",
"Increases the maximum Mana of your Imp, Voidwalker, Succubus, and Felhunter by 9%.",
"Increases the maximum Mana of your Imp, Voidwalker, Succubus, and Felhunter by 12%.",
"Increases the maximum Mana of your Imp, Voidwalker, Succubus, and Felhunter by 15%."
		];
i++;		

//Improved Succubus - Demonology
rank[i] = [
"Increases the effect of your Succubus' Lash of Pain and Soothing Kiss spells by 10%, and increases the duration of your Succubus' Seduction and Lesser Invisibility spells by 10%.",
"Increases the effect of your Succubus' Lash of Pain and Soothing Kiss spells by 20%, and increases the duration of your Succubus' Seduction and Lesser Invisibility spells by 20%.",
"Increases the effect of your Succubus' Lash of Pain and Soothing Kiss spells by 30%, and increases the duration of your Succubus' Seduction and Lesser Invisibility spells by 30%."
		];
i++;		

//Fel Domination - Demonology
rank[i] = [
		"<span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>15 min cooldown</span><br>Your next Imp, Voidwalker, Succubus, or Felhunter Summon spell has its casting time reduced by 5 sec and its Mana cost reduced by 50%."
		];
i++;		

//Fel Stamina - Demonology
rank[i] = [
"Increases the maximum Health of your Imp, Voidwalker, Succubus, and Felhunter by 3%.",
"Increases the maximum Health of your Imp, Voidwalker, Succubus, and Felhunter by 6%.",
"Increases the maximum Health of your Imp, Voidwalker, Succubus, and Felhunter by 9%.",
"Increases the maximum Health of your Imp, Voidwalker, Succubus, and Felhunter by 12%.",
"Increases the maximum Health of your Imp, Voidwalker, Succubus, and Felhunter by 15%."
		];i++;		

//Master Summoner - Demonology 
rank[i] = [
"Reduces the casting time of your Imp, Voidwalker, Succubus, and Felhunter Summoning spells by 2 sec and the Mana cost by 20%.",
"Reduces the casting time of your Imp, Voidwalker, Succubus, and Felhunter Summoning spells by 4 sec and the Mana cost by 40%."
		];
i++;		

//Unholy Power - Demonology 
rank[i] = [
"Increases the damage done by your Voidwalker, Succubus, and Felhunter's melee attacks by 4%.",
"Increases the damage done by your Voidwalker, Succubus, and Felhunter's melee attacks by 8%.",
"Increases the damage done by your Voidwalker, Succubus, and Felhunter's melee attacks by 12%.",
"Increases the damage done by your Voidwalker, Succubus, and Felhunter's melee attacks by 16%.",
"Increases the damage done by your Voidwalker, Succubus, and Felhunter's melee attacks by 20%."
		];
i++;

//Improved Enslave Demon - Demonology

rank[i] = [
"Reduces the Attack Speed and Casting Speed penalty of your Enslave Demon spell by 2% and reduces the resist chance by 2%.",
"Reduces the Attack Speed and Casting Speed penalty of your Enslave Demon spell by 4% and reduces the resist chance by 4%.",
"Reduces the Attack Speed and Casting Speed penalty of your Enslave Demon spell by 6% and reduces the resist chance by 6%.",
"Reduces the Attack Speed and Casting Speed penalty of your Enslave Demon spell by 8% and reduces the resist chance by 8%.",
"Reduces the Attack Speed and Casting Speed penalty of your Enslave Demon spell by 10% and reduces the resist chance by 10%."
		];
i++;
		
//Demonic Sacrifice - Demonology 
rank[i]=[
		"100 yd range<br>Instant<br>When activated, sacrifices your summoned demon to grant you an effect that lasts 30 min. The effect is canceled if any Demon is summoned.<br><br>Imp: Increases your Fire damage by 15%.<br><br>Voidwalker: Restores 3% of total Health every 4 sec.<br><br>Succubus: Increases your Shadow damage by 15%.<br><br>Felhunter: Restores 2% of total Mana every 4 sec."
			];
i++;			
			
//Improved Firestone - Demonology
rank[i]=[
"Increases the bonus Fire damage from Firestones and the Firestone effect by 15%.",
"Increases the bonus Fire damage from Firestones and the Firestone effect by 30%."
		];
i++;		
		
//Master Demonologist - Demonology
rank[i]=[
"Grants both the Warlock and the summoned demon an effect as long as that demon is active. Imp - Reduces threat caused by 4%. Voidwalker - Reduces physical damage taken by 2%. Succubus - Increases all damage caused by 2%. Felhunter - Increases all resistances by .2 per level.",
"Grants both the Warlock and the summoned demon an effect as long as that demon is active. Imp - Reduces threat caused by 8%. Voidwalker - Reduces physical damage taken by 4%. Succubus - Increases all damage caused by 4%. Felhunter - Increases all resistances by .4 per level.",
"Grants both the Warlock and the summoned demon an effect as long as that demon is active. Imp - Reduces threat caused by 12%. Voidwalker - Reduces physical damage taken by 6%. Succubus - Increases all damage caused by 6%. Felhunter - Increases all resistances by .6 per level.",
"Grants both the Warlock and the summoned demon an effect as long as that demon is active. Imp - Reduces threat caused by 16%. Voidwalker - Reduces physical damage taken by 8%. Succubus - Increases all damage caused by 8%. Felhunter - Increases all resistances by .8 per level.",
"Grants both the Warlock and the summoned demon an effect as long as that demon is active. Imp - Reduces threat caused by 20%. Voidwalker - Reduces physical damage taken by 10%. Succubus - Increases all damage caused by 10%. Felhunter - Increases all resistances by 1 per level."
		];
i++;		
		
//Soul Link - Demonology
rank[i]=[
		"<span style=text-align:left;float:left;>270 Mana</span><span style=text-align:right;float:right;>100 yd range</span><br>Instant cast<br>When active, 30% of all damage taken by the caster is taken by your demon instead. In addition, both the demon and the master will inflict 3% more damage. Lasts as long as the demon is active."
		];
i++;		
		
//Improved Spellstone - Demonology 
rank[i]=[
"Increases the amount of damage absorbed by your Spellstone by 15%.",
"Increases the amount of damage absorbed by your Spellstone by 30%."
		];
i++;		



















		
//Improved Shadow Bolt - Destruction  
rank[i]=[
"Your Shadow Bolt critical strikes increase the next 4 sources of Shadow damage dealt to the target by 4%.  Effect lasts a maximum of 12 sec.",
"Your Shadow Bolt critical strikes increase the next 4 sources of Shadow damage dealt to the target by 8%.  Effect lasts a maximum of 12 sec.",
"Your Shadow Bolt critical strikes increase the next 4 sources of Shadow damage dealt to the target by 12%.  Effect lasts a maximum of 12 sec.",
"Your Shadow Bolt critical strikes increase the next 4 sources of Shadow damage dealt to the target by 16%.  Effect lasts a maximum of 12 sec.",
"Your Shadow Bolt critical strikes increase the next 4 sources of Shadow damage dealt to the target by 20%.  Effect lasts a maximum of 12 sec."
		];
i++;		
		
//Cataclysm - Destruction
rank[i]=[
"Reduces the Mana cost of your Destruction spells by 1%.",
"Reduces the Mana cost of your Destruction spells by 2%.",
"Reduces the Mana cost of your Destruction spells by 3%.",
"Reduces the Mana cost of your Destruction spells by 4%.",
"Reduces the Mana cost of your Destruction spells by 5%."
		];
i++;		
		
//Bane - Destruction
rank[i]=[
"Reduces the casting time of your Shadow Bolt and Immolate spells by 0.1 sec.",
"Reduces the casting time of your Shadow Bolt and Immolate spells by 0.2 sec.",
"Reduces the casting time of your Shadow Bolt and Immolate spells by 0.3 sec.",
"Reduces the casting time of your Shadow Bolt and Immolate spells by 0.4 sec.",
"Reduces the casting time of your Shadow Bolt and Immolate spells by 0.5 sec."
		];
i++;		
		
//Aftermath - Destruction
rank[i]=[
"Gives your Destruction spells a 2% chance to daze the target for 5 sec.",
"Gives your Destruction spells a 4% chance to daze the target for 5 sec.",
"Gives your Destruction spells a 6% chance to daze the target for 5 sec.",
"Gives your Destruction spells a 8% chance to daze the target for 5 sec.",
"Gives your Destruction spells a 10% chance to daze the target for 5 sec."
		];
i++;		
		
//Improved Firebolt - Destruction
rank[i]=[
"Reduces the casting time of your Imp's Firebolt spell by 0.5 sec.",
"Reduces the casting time of your Imp's Firebolt spell by 1 sec."
		];
i++;		
		
//Improved Lash of Pain - Destruction
rank[i]=[
"Reduces the cooldown of your Succubus' Lash of Pain spell by 3 sec.",
"Reduces the cooldown of your Succubus' Lash of Pain spell by 6 sec."
		];
i++;		
		
//Devastation - Destruction
rank[i]=[
"Increases the critical strike chance of your Destruction spells by 1%.",
"Increases the critical strike chance of your Destruction spells by 2%.",
"Increases the critical strike chance of your Destruction spells by 3%.",
"Increases the critical strike chance of your Destruction spells by 4%.",
"Increases the critical strike chance of your Destruction spells by 5%."
		];
i++;		
		
//Shadowburn - Destruction 
rank[i]=[

		"<span style=text-align:left;float:left;>105 Mana</span><span style=text-align:right;float:right;>20 yd range</span><br><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>15 sec cooldown</span><br>Reagents: Soul Shard<br>Instantly blasts the target for 91 to 104 Shadow damage. If the target dies from Shadowburn, and yields experience or honor, the caster gains a Soul Shard."
		];
i++;		
		
//Intensity - Destruction
rank[i]=[
"Gives you a 35% chance to resist interruption caused by damage while channeling the Rain of Fire or Hellfire spell.",
"Gives you a 70% chance to resist interruption caused by damage while channeling the Rain of Fire or Hellfire spell."
		];
i++;		
		
//Destructive Reach - Destruction  
rank[i]=[
"Increases the range of your Destruction spells by 10%.",
"Increases the range of your Destruction spells by 20%."
		];
i++;	
		
//Improved Searing Pain - Destruction   
rank[i]=[
"Increases the critical strike chance of your Searing Pain spell by 2%.",
"Increases the critical strike chance of your Searing Pain spell by 4%.",
"Increases the critical strike chance of your Searing Pain spell by 6%.",
"Increases the critical strike chance of your Searing Pain spell by 8%.",
"Increases the critical strike chance of your Searing Pain spell by 10%."
		];
i++;	


//Pyroclasm - Destruction
rank[i]=[
"Gives your Rain of Fire and Hellfire spells a 13% chance to stun the target for 3 sec.",
"Gives your Rain of Fire and Hellfire spells a 26% chance to stun the target for 3 sec."
		];
i++;	


//Improved Immolate - Destruction 
rank[i]=[
"Increases the initial damage of your Immolate spell by 5%.",
"Increases the initial damage of your Immolate spell by 10%.",
"Increases the initial damage of your Immolate spell by 15%.",
"Increases the initial damage of your Immolate spell by 20%.",
"Increases the initial damage of your Immolate spell by 25%."
		];
i++;	


//Ruin - Destruction  
rank[i]=[
"Increases the critical strike damage bonus of your Destruction spells by 100%."
		];
i++;	


//Emberstorm - Destruction 
rank[i]=[
"Increases the damage done by your Fire spells by 2%.",
"Increases the damage done by your Fire spells by 4%.",
"Increases the damage done by your Fire spells by 6%.",
"Increases the damage done by your Fire spells by 8%.",
"Increases the damage done by your Fire spells by 10%."
		];
i++;	


//Conflagrate - Destruction 
rank[i]=[

		"<span style=text-align:left;float:left;>165 Mana</span><span style=text-align:right;float:right;>30 yd range</span><br><span style=text-align:left;float:left;>1.5 sec cast</span><span style=text-align:right;float:right;>10 sec cooldown</span><br>Ignites a target that is already afflicted by Immolate, dealing 206 to 261 Fire damage and consuming the Immolate spell."
		];
i++;	

		
//Destruction Talents End^^
/*
     FILE ARCHIVED ON 05:23:30 May 12, 2006 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:21:24 Oct 04, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 315.349
  exclusion.robots: 0.172
  exclusion.robots.policy: 0.157
  RedisCDXSource: 86.948
  esindex: 0.012
  LoadShardBlock: 198.604 (3)
  PetaboxLoader3.datanode: 242.713 (4)
  CDXLines.iter: 24.731 (3)
  PetaboxLoader3.resolve: 156.97 (2)
  load_resource: 258.782
*/