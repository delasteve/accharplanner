import { Character, Skill } from "../types";
import { UNTRAINED_STATE } from "../constants";

export default function (): Character {
  return {
    name: "An Adventurer",
    race: "Aluvian",
    gender: "Female",
    level: 1,
    attributes: {
      strength: {
        creation: 10,
        invested: 0,
        buff: 0,
        cantrip: 0,
      },
      endurance: {
        creation: 10,
        invested: 0,
        buff: 0,
        cantrip: 0,
      },
      coordination: {
        creation: 10,
        invested: 0,
        buff: 0,
        cantrip: 0,
      },
      quickness: {
        creation: 10,
        invested: 0,
        buff: 0,
        cantrip: 0,
      },
      focus: {
        creation: 10,
        invested: 0,
        buff: 0,
        cantrip: 0,
      },
      self: {
        creation: 10,
        invested: 0,
        buff: 0,
        cantrip: 0,
      },
    },
    vitals: {
      health: {
        invested: 0,
        buff: 0,
        cantrip: 0,
      },
      stamina: {
        invested: 0,
        buff: 0,
        cantrip: 0,
      },
      mana: {
        invested: 0,
        buff: 0,
        cantrip: 0,
      },
    },
    skills: {
      alchemy: {
        training: UNTRAINED_STATE[Skill.alchemy],
        invested: 0,
        buff: 0,
        cantrip: 0,
      },
      arcane_lore: {
        training: UNTRAINED_STATE[Skill.arcane_lore],
        invested: 0,
        buff: 0,
        cantrip: 0,
      },
      armor_tinkering: {
        training: UNTRAINED_STATE[Skill.armor_tinkering],
        invested: 0,
        buff: 0,
        cantrip: 0,
      },
      assess_creature: {
        training: UNTRAINED_STATE[Skill.assess_creature],
        invested: 0,
        buff: 0,
        cantrip: 0,
      },
      assess_person: {
        training: UNTRAINED_STATE[Skill.assess_person],
        invested: 0,
        buff: 0,
        cantrip: 0,
      },
      cooking: {
        training: UNTRAINED_STATE[Skill.cooking],
        invested: 0,
        buff: 0,
        cantrip: 0,
      },
      creature_enchantment: {
        training: UNTRAINED_STATE[Skill.creature_enchantment],
        invested: 0,
        buff: 0,
        cantrip: 0,
      },
      deception: {
        training: UNTRAINED_STATE[Skill.deception],
        invested: 0,
        buff: 0,
        cantrip: 0,
      },
      dual_wield: {
        training: UNTRAINED_STATE[Skill.dual_wield],
        invested: 0,
        buff: 0,
        cantrip: 0,
      },
      dirty_fighting: {
        training: UNTRAINED_STATE[Skill.dirty_fighting],
        invested: 0,
        buff: 0,
        cantrip: 0,
      },
      finesse_weapons: {
        training: UNTRAINED_STATE[Skill.finesse_weapons],
        invested: 0,
        buff: 0,
        cantrip: 0,
      },
      fletching: {
        training: UNTRAINED_STATE[Skill.fletching],
        invested: 0,
        buff: 0,
        cantrip: 0,
      },
      healing: {
        training: UNTRAINED_STATE[Skill.healing],
        invested: 0,
        buff: 0,
        cantrip: 0,
      },
      heavy_weapons: {
        training: UNTRAINED_STATE[Skill.heavy_weapons],
        invested: 0,
        buff: 0,
        cantrip: 0,
      },
      item_enchantment: {
        training: UNTRAINED_STATE[Skill.item_enchantment],
        invested: 0,
        buff: 0,
        cantrip: 0,
      },
      item_tinkering: {
        training: UNTRAINED_STATE[Skill.item_tinkering],
        invested: 0,
        buff: 0,
        cantrip: 0,
      },
      jump: {
        training: UNTRAINED_STATE[Skill.jump],
        invested: 0,
        buff: 0,
        cantrip: 0,
      },
      leadership: {
        training: UNTRAINED_STATE[Skill.leadership],
        invested: 0,
        buff: 0,
        cantrip: 0,
      },
      life_magic: {
        training: UNTRAINED_STATE[Skill.life_magic],
        invested: 0,
        buff: 0,
        cantrip: 0,
      },
      light_weapons: {
        training: UNTRAINED_STATE[Skill.light_weapons],
        invested: 0,
        buff: 0,
        cantrip: 0,
      },
      lockpick: {
        training: UNTRAINED_STATE[Skill.lockpick],
        invested: 0,
        buff: 0,
        cantrip: 0,
      },
      loyalty: {
        training: UNTRAINED_STATE[Skill.loyalty],
        invested: 0,
        buff: 0,
        cantrip: 0,
      },
      magic_defense: {
        training: UNTRAINED_STATE[Skill.magic_defense],
        invested: 0,
        buff: 0,
        cantrip: 0,
      },
      magic_item_tinkering: {
        training: UNTRAINED_STATE[Skill.magic_item_tinkering],
        invested: 0,
        buff: 0,
        cantrip: 0,
      },
      mana_conversion: {
        training: UNTRAINED_STATE[Skill.mana_conversion],
        invested: 0,
        buff: 0,
        cantrip: 0,
      },
      melee_defense: {
        training: UNTRAINED_STATE[Skill.melee_defense],
        invested: 0,
        buff: 0,
        cantrip: 0,
      },
      missile_defense: {
        training: UNTRAINED_STATE[Skill.missile_defense],
        invested: 0,
        buff: 0,
        cantrip: 0,
      },
      missile_weapons: {
        training: UNTRAINED_STATE[Skill.missile_weapons],
        invested: 0,
        buff: 0,
        cantrip: 0,
      },
      recklessness: {
        training: UNTRAINED_STATE[Skill.recklessness],
        invested: 0,
        buff: 0,
        cantrip: 0,
      },
      run: {
        training: UNTRAINED_STATE[Skill.run],
        invested: 0,
        buff: 0,
        cantrip: 0,
      },
      salvaging: {
        training: UNTRAINED_STATE[Skill.salvaging],
        invested: 0,
        buff: 0,
        cantrip: 0,
      },
      shield: {
        training: UNTRAINED_STATE[Skill.shield],
        invested: 0,
        buff: 0,
        cantrip: 0,
      },
      sneak_attack: {
        training: UNTRAINED_STATE[Skill.sneak_attack],
        invested: 0,
        buff: 0,
        cantrip: 0,
      },
      summoning: {
        training: UNTRAINED_STATE[Skill.summoning],
        invested: 0,
        buff: 0,
        cantrip: 0,
      },
      two_handed_combat: {
        training: UNTRAINED_STATE[Skill.two_handed_combat],
        invested: 0,
        buff: 0,
        cantrip: 0,
      },
      void_magic: {
        training: UNTRAINED_STATE[Skill.void_magic],
        invested: 0,
        buff: 0,
        cantrip: 0,
      },
      war_magic: {
        training: UNTRAINED_STATE[Skill.war_magic],
        invested: 0,
        buff: 0,
        cantrip: 0,
      },
      weapon_tinkering: {
        training: UNTRAINED_STATE[Skill.weapon_tinkering],
        invested: 0,
        buff: 0,
        cantrip: 0,
      },
    },
    items: {
      focusing_stone: false,
      font_of_joji: false,
    },
    armor_sets: {
      adepts: {
        equipped: 0,
      },
      archers: {
        equipped: 0,
      },
      crafters: {
        equipped: 0,
      },
      dedication: {
        equipped: 0,
      },
      defenders: {
        equipped: 0,
      },
      dextrous: {
        equipped: 0,
      },
      hearty: {
        equipped: 0,
      },
      soldiers: {
        equipped: 0,
      },
      swift: {
        equipped: 0,
      },
      tinkers: {
        equipped: 0,
      },
      wise: {
        equipped: 0,
      },
    },
  };
}
