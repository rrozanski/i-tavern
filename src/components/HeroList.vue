<template>
  <div class="card shadow">
    <div class="card-body">
      <table
          v-if="heroes.length"
          class="table table-responsive-sm">
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
        <tbody
            is="transition-group"
            name="table-row">
        <tr
            v-for="hero in heroes"
            :key="hero.id">
          <td>
            <img
                :src="getAvatarUrl(hero.class)"
                alt="Hero Avatar"
                class="hero-avatar">
          </td>
          <td>
            {{ hero.name }}
          </td>
          <td>
            {{ hero.gender }}
          </td>
          <td>
            {{ hero.race }}
          </td>
          <td>
            {{ hero.class }}
          </td>
          <td>
            <i
                @click="removeHero(hero.id)"
                class="ra ra-skull"></i>
          </td>
        </tr>
        </tbody>
      </table>
      <div
          v-if="!heroes.length"
          class="lead text-center my-5">
        There are no heroes in your party.
      </div>
      <party-summary :heroes="heroes"></party-summary>
    </div>
  </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import PartySummary from '@/components/PartySummary.vue';
    import { HeroClass } from '@/enums';
    import { Hero } from '@/models/hero.model';

    export default Vue.extend({
        name: 'HeroList',
        components: {
            PartySummary
        },
        props: {
            heroes: {
                type: Array as () => Hero[],
                default: []
            }
        },
        data() {
            return {
                showNewHeroForm: false
            };
        },
        methods: {
            getAvatarUrl(heroClass: HeroClass): string {
                const baseUrl = '../assets/images/';

                switch (heroClass) {
                    case HeroClass.Fighter:
                        return `${baseUrl}dwarf-helmet.svg`;
                    case HeroClass.Rogue:
                        return `${baseUrl}hood.svg`;
                    case HeroClass.Wizard:
                        return `${baseUrl}wizard-face.svg`;
                    default:
                        return '';
                }
            },
            removeHero(heroId: string): void {
                const confirmation = confirm('Are you sure you want to remove this hero from the party?');

                if (confirmation) {
                    this.$emit('remove-hero', heroId);
                }
            }
        }
    });
</script>

<style scoped lang="scss">
  @import '../styles/components/hero-list';
</style>
