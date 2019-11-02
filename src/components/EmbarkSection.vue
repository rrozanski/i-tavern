<template>
  <div class="card shadow mt-5">
    <div class="card-body">
      <div class="row">
        <div class="col-xs-12 col-sm-8">
          <div v-if="neededHeroes > 0">
            <div class="lead">
              You must gather your party before venturing forth.
            </div>
            <div class="note">
              (you need at least {{ neededHeroes }} more
              <span v-if="neededHeroes > 1">heroes</span>
              <span v-else>hero</span>
              to create a party)
            </div>
          </div>
          <div
              v-else
              class="lead mb-3 mb-sm-0">
            Your party is ready. Good luck!
          </div>
        </div>
        <div class="col-xs-12 col-sm-4">
          <button
              type="button"
              class="btn btn-lg btn-dark"
              :disabled="neededHeroes > 0"
              @click="embark">
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
        name: 'EmbarkSection',
        props: {
            heroes: {
                type: Array as () => Hero[],
                default: []
            }
        },
        computed: {
            neededHeroes(): number {
                const minHeroesRequired: number = 3;

                return this.heroes.length >= minHeroesRequired
                    ? 0
                    : minHeroesRequired - this.heroes.length;
            }
        },
        methods: {
            embark() {
                // tslint:disable no-console
                console.log('Adventure!');
            }
        }
    });
</script>

<style scoped lang="scss">
  @import '../styles/components/embark-section';
</style>
