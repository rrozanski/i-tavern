<template>
  <div class="row">
    <div class="col-6">
      <div>
        <transition name="hero">
          <img
              v-if="showFighter"
              src="assets/images/dwarf-helmet.svg"
              alt=""
              class="hero">
        </transition>
      </div>
      <div>
        <transition name="hero">
          <img
              v-if="showRogue"
              src="assets/images/hood.svg"
              alt=""
              class="hero">
        </transition>
      </div>
      <div>
        <transition name="hero">
          <img
              v-if="showWizard"
              src="assets/images/wizard-face.svg"
              alt=""
              class="hero">
        </transition>
      </div>
    </div>
    <div class="col-6 text-right">
      <transition name="dragon">
        <img
            v-if="showDragon"
            src="assets/images/spiked-dragon-head.svg"
            alt=""
            class="dragon">
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: 'AdventureView',
        data() {
            return {
                showFighter: false,
                showRogue: false,
                showWizard: false,
                showDragon: false
            };
        },
        created(): void {
            setTimeout(() => {
                this.showFighter = true;
            }, 1000);

            setTimeout(() => {
                this.showRogue = true;
            }, 2000);

            setTimeout(() => {
                this.showWizard = true;
            }, 3000);

            setTimeout(() => {
                this.showDragon = true;
            }, 5000);
        }
    });
</script>

<style scoped lang="scss">
  @import '../styles/views/adventure';
</style>
