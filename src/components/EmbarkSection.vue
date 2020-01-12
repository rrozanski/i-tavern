<template>
  <div class="card shadow mt-5">
    <div class="card-body">
      <div class="row">
        <div class="col-xs-12 col-sm-8">
          <div>
            <div class="lead">
              You must gather your party before venturing forth.
            </div>
            <div class="note">
              (you need at least 1 more hero to create a party)
            </div>
          </div>
          <div class="lead mb-3 mb-sm-0">
            Your party is ready. Good luck!
          </div>
        </div>
        <div class="col-xs-12 col-sm-4">
          <button
              type="button"
              class="btn btn-lg btn-dark">
            <i class="ra ra-crossed-swords"></i>
            Embark on Adventure
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Hero } from '@/models';

    export default Vue.extend({
        name: 'EmbarkSection'
    });
</script>

<style scoped lang="scss">
  @import '../styles/components/embark-section';
</style>
