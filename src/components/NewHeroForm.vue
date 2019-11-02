<template>
  <b-modal
      v-model="showNewHeroForm"
      :hide-header-close="true"
      :no-close-on-esc="true"
      :no-close-on-backdrop="true"
      size="lg">
    <div slot="modal-header">
      <h4>
        Create a Hero
      </h4>
    </div>
    <div class="row my-1 mx-3">
      <div class="col-sm-12 col-md-6">
        <form>
          <div class="form-group">
            <label for="heroName">
              Name
            </label>
            <input
                v-model="hero.name"
                type="text"
                class="form-control"
                id="heroName">
          </div>
          <div class="form-group">
            <label for="heroGender">
              Gender
            </label>
            <select
                v-model="hero.gender"
                class="form-control"
                id="heroGender">
              <option></option>
              <option value="F">Female</option>
              <option value="M">Male</option>
            </select>
          </div>
          <div class="form-group">
            <label for="heroRace">
              Race
            </label>
            <select
                v-model="hero.race"
                class="form-control"
                id="heroRace">
              <option></option>
              <option>Dwarf</option>
              <option>Elf</option>
              <option>Human</option>
            </select>
          </div>
          <div class="form-group">
            <label for="heroClass">
              Class
            </label>
            <select
                v-model="hero.class"
                class="form-control"
                id="heroClass">
              <option></option>
              <option>Fighter</option>
              <option>Rogue</option>
              <option>Wizard</option>
            </select>
          </div>
        </form>
      </div>
      <div class="col-sm-12 col-md-6">
        <hero-abilities @hero-abilities="getHeroAbilities($event)"></hero-abilities>
      </div>
    </div>
    <div slot="modal-footer">
      <button
          @click="cancel"
          type="button"
          class="btn btn-lg btn-dark action-button mr-3">
        <i class="ra ra-sideswipe"></i>
        Cancel
      </button>
      <button
          :disabled="isSubmitButtonActive"
          @click="submit"
          type="button"
          class="btn btn-lg btn-dark action-button">
        <i class="ra ra-player-thunder-struck"></i>
        Create a Hero
      </button>
    </div>
  </b-modal>
</template>

<script lang="ts">
    import Vue from 'vue';
    import HeroAbilities from '@/components/HeroAbilities.vue';

    export default Vue.extend({
        name: 'NewHeroForm',
        components: {
            HeroAbilities
        },
        props: {
            showNewHeroForm: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                hero: {
                    name: '',
                    gender: '',
                    race: '',
                    class: '',
                    abilities: {
                        dexterity: 0,
                        strength: 0,
                        wisdom: 0
                    }
                }
            };
        },
        computed: {
            isSubmitButtonActive(): boolean {
                return !this.hero.name
                    || !this.hero.gender
                    || !this.hero.race
                    || !this.hero.class;
            }
        },
        methods: {
            submit() {
                this.$emit('add-hero', { ...this.hero, id: new Date().getTime() });
                this.clearForm();
                this.$emit('update:showNewHeroForm', false);
            },
            cancel() {
                this.clearForm();
                this.$emit('update:showNewHeroForm', false);
            },
            clearForm(): void {
                this.hero = {
                    name: '',
                    gender: '',
                    race: '',
                    class: '',
                    abilities: {
                        dexterity: 0,
                        strength: 0,
                        wisdom: 0
                    }
                };
            },
            getHeroAbilities(abilities: { dexterity: number, strength: number, wisdom: number }): void {
                this.hero.abilities = { ...abilities };
            }
        }
    });
</script>

<style scoped lang="scss">
  @import '../styles/components/new-hero-form';
</style>
