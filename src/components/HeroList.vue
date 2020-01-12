<template>
  <div class="card shadow">
    <div class="card-body">
      <table class="table table-responsive-sm">
        <thead class="thead-dark">
        <tr>
          <th></th>
          <th>Name</th>
          <th>Gender</th>
          <th>Race</th>
          <th>Class</th>
          <th>
            <i class="ra ra-cog"></i>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td></td>
          <td>
            name
          </td>
          <td>
            gender
          </td>
          <td>
            race
          </td>
          <td>
            class
          </td>
          <td>
            <i class="ra ra-skull"></i>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="lead text-center my-5">
        There are no heroes in your party.
      </div>

      <div class="text-right mt-5">
        <button
            type="button"
            class="btn btn-lg btn-dark">
          <i class="ra ra-player-thunder-struck"></i>
          Create a Hero
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import NewHeroForm from '@/components/NewHeroForm.vue';
    import PartySummary from '@/components/PartySummary.vue';
    import { HeroClass } from '@/enums';
    import { Hero } from '@/models/hero.model';

    export default Vue.extend({
        name: 'HeroList'
    });
</script>

<style scoped lang="scss">
  @import '../styles/components/hero-list';
</style>
