<template>
  <div>
    <div class="mb-3 mt-5 mt-md-0">
      <h5>Dexterity</h5>
      <b-progress
          :value="dexterity"
          :max="20"
          :variant="'dark'"
          show-value></b-progress>
    </div>
    <div class="mb-3">
      <h5>Strength</h5>
      <b-progress
          :value="strength"
          :max="20"
          :variant="'dark'"
          show-value></b-progress>
    </div>
    <div class="mb-3">
      <h5>Wisdom</h5>
      <b-progress
          :value="wisdom"
          :max="20"
          :variant="'dark'"
          show-value></b-progress>
    </div>
    <div class="text-right mt-5">
      <button
          @click="generateAbilities"
          type="button"
          class="btn btn-lg btn-dark">
        <i class="ra ra-dice-two"></i>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: 'HeroAbilities',
        data() {
            return {
                dexterity: 0,
                strength: 0,
                wisdom: 0
            };
        },
        methods: {
            generateAbilities(): void {
                this.dexterity = Math.floor(Math.random() * 21);
                this.strength = Math.floor(Math.random() * 21);
                this.wisdom = Math.floor(Math.random() * 21);

                const abilities: { dexterity: number, strength: number, wisdom: number } = {
                    dexterity: this.dexterity,
                    strength: this.strength,
                    wisdom: this.wisdom
                };

                this.$emit('hero-abilities', { ...abilities });
            }
        }
    });
</script>
