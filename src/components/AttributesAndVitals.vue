<template>
  <div id="attributes_and_vitals" class="pane">
    <div>
      <div class="pane-header" v-on:click="toggle">
        <div>
          <h3>Attributes</h3>
        </div>
        <div class="right">
          <span v-if="errors" class="error">{{ errors }}</span>
          &nbsp;
          <span
            v-tooltip="
              'Character creation attribute points spent.'
            "
            >{{ attributePointsSpent }} / {{ attributePointsAvailable }}</span
          >
        </div>
      </div>
      <div v-if="collapsed" class="table-wrapper">
        <table>
          <Attributes />
          <Vitals />
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Attributes from "./Attributes.vue";
import Vitals from "./Vitals.vue";

export default {
  name: "AttributesAndVitals",
  components: {
    Attributes,
    Vitals,
  },
  computed: {
    attributePointsSpent() {
      return this.$store.getters.attributePointsSpent;
    },
    attributePointsAvailable() {
      return this.$store.getters.attributePointsAvailable;
    },
    collapsed() {
      return this.$store.getters.attributesPaneVisible;
    },
    errors() {
      return this.$store.getters.attributesAndVitalsErrors;
    },
  },
  methods: {
    toggle() {
      this.$store.commit("toggleAttributesPane");
    },
  },
};
</script>
