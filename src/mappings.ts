import { Attribute, Vital, Skill, NumberIndexedDict } from "./types";

export const ATTRIBUTE_NAME = {
  [Attribute.strength]: "Strength",
  [Attribute.endurance]: "Endurance",
  [Attribute.coordination]: "Coordination",
  [Attribute.quickness]: "Quickness",
  [Attribute.focus]: "Focus",
  [Attribute.self]: "Self",
};

export const VITAL_FORMULA = {
  [Vital.health]: "E/2",
  [Vital.stamina]: "E",
  [Vital.mana]: "W",
};

export const SKILL_NAME = {
  [Skill.alchemy]: "Alchemy",
  [Skill.arcane_lore]: "Arcane Lore",
  [Skill.armor_tinkering]: "Armor Tinkering",
  [Skill.assess_creature]: "Assess Creature",
  [Skill.assess_person]: "Assess Person",
  [Skill.cooking]: "Cooking",
  [Skill.creature_enchantment]: "Creature Enchantment",
  [Skill.deception]: "Deception",
  [Skill.dual_wield]: "Dual Wield",
  [Skill.dirty_fighting]: "Dirty Fighting",
  [Skill.finesse_weapons]: "Finesse Weapons",
  [Skill.fletching]: "Fletching",
  [Skill.healing]: "Healing",
  [Skill.heavy_weapons]: "Heavy Weapons",
  [Skill.item_enchantment]: "Item Enchantment",
  [Skill.item_tinkering]: "Item Tinkering",
  [Skill.jump]: "Jump",
  [Skill.leadership]: "Leadership",
  [Skill.life_magic]: "Life Magic",
  [Skill.light_weapons]: "Light Weapons",
  [Skill.lockpick]: "Lockpick",
  [Skill.loyalty]: "Loyalty",
  [Skill.magic_defense]: "Magic Defense",
  [Skill.magic_item_tinkering]: "Magic Item Tinkering",
  [Skill.mana_conversion]: "Mana Conversion",
  [Skill.melee_defense]: "Melee Defense",
  [Skill.missile_defense]: "Missile Defense",
  [Skill.missile_weapons]: "Missile Weapons",
  [Skill.recklessness]: "Recklessness",
  [Skill.run]: "Run",
  [Skill.salvaging]: "Salvaging",
  [Skill.shield]: "Shield",
  [Skill.sneak_attack]: "Sneak Attack",
  [Skill.summoning]: "Summoning",
  [Skill.two_handed_combat]: "Two Handed Combat",
  [Skill.void_magic]: "Void Magic",
  [Skill.war_magic]: "War Magic",
  [Skill.weapon_tinkering]: "Weapon Tinkering",
};

export const SKILL_FORMULA = {
  [Skill.alchemy]: "(C+F)/3",
  [Skill.arcane_lore]: "F/3",
  [Skill.armor_tinkering]: "(E+F)/2",
  [Skill.assess_creature]: "",
  [Skill.assess_person]: "",
  [Skill.cooking]: "(C+F)/3",
  [Skill.creature_enchantment]: "(F+W)/4",
  [Skill.deception]: "",
  [Skill.dual_wield]: "(C+C)/3",
  [Skill.dirty_fighting]: "(S+C)/3",
  [Skill.finesse_weapons]: "(C+Q)/3",
  [Skill.fletching]: "(C+F)/3",
  [Skill.healing]: "(C+F)/3",
  [Skill.heavy_weapons]: "(S+C)/3",
  [Skill.item_enchantment]: "(F+W)/4",
  [Skill.item_tinkering]: "(C+F)/2",
  [Skill.jump]: "(S+C)/2",
  [Skill.leadership]: "",
  [Skill.life_magic]: "(F+W)/4",
  [Skill.light_weapons]: "(S+C)/3",
  [Skill.lockpick]: "(C+F)/3",
  [Skill.loyalty]: "",
  [Skill.magic_defense]: "(F+W)/7",
  [Skill.magic_item_tinkering]: "F",
  [Skill.mana_conversion]: "(F+W)/6",
  [Skill.melee_defense]: "(C+Q)/3",
  [Skill.missile_defense]: "(C+Q)/5",
  [Skill.missile_weapons]: "C/2",
  [Skill.recklessness]: "(S+Q)/3",
  [Skill.run]: "Q",
  [Skill.salvaging]: "",
  [Skill.shield]: "(S+C)/2",
  [Skill.sneak_attack]: "(C+Q)/3",
  [Skill.summoning]: "(E+W)/3",
  [Skill.two_handed_combat]: "(S+C)/3",
  [Skill.void_magic]: "(F+W)/4",
  [Skill.war_magic]: "(F+W)/4",
  [Skill.weapon_tinkering]: "(S+F)/2",
};

export const BUFF_NAME: NumberIndexedDict<string> = {
  0: "",
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
  8: "VIII",
};

export const CANTRIP_NAME: NumberIndexedDict<string> = {
  0: "None",
  1: "Minor",
  2: "Major",
  3: "Epic",
  4: "Legen.",
};
