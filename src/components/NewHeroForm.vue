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
                type="text"
                class="form-control"
                id="heroName">
          </div>
          <div class="form-group">
            <label for="heroGender">
              Gender
            </label>
            <select
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
      <div class="col-sm-12 col-md-6"></div>
    </div>
    <div slot="modal-footer">
      <button
          type="button"
          class="btn btn-lg btn-dark action-button mr-3">
        <i class="ra ra-sideswipe"></i>
        Cancel
      </button>
      <button
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
        props: {
            showNewHeroForm: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            submit() {
                // this.$emit('add-hero', { ...this.hero, id: new Date().getTime() });
                // this.clearForm();
                this.$emit('update:showNewHeroForm', false);
            },
            cancel() {
                // this.clearForm();
                this.$emit('update:showNewHeroForm', false);
            }
        }
    });
</script>

<style scoped lang="scss">
  @import '../styles/components/new-hero-form';
</style>
