<template>
  <div class="row">
    <div class="col-12">
      <HeroList
          @remove-hero="removeHero($event)"
          :heroes="heroes"></HeroList>
    </div>
    <div class="col-12">
      <EmbarkSection :heroes="heroes"></EmbarkSection>
    </div>
  </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import EmbarkSection from '@/components/EmbarkSection.vue';
    import HeroList from '@/components/HeroList.vue';
    import { Gender, HeroClass, Race } from '@/enums';
    import { Hero } from '@/models';

    export default Vue.extend({
        name: 'TavernView',
        components: {
            EmbarkSection,
            HeroList
        },
        data() {
            return {
                heroes: [
                    {
                        id: 1,
                        name: 'Horven Runehouse',
                        gender: Gender.Male,
                        race: Race.Dwarf,
                        class: HeroClass.Fighter,
                        abilities: {
                            dexterity: 10,
                            strength: 20,
                            wisdom: 0
                        }
                    },
                    {
                        id: 2,
                        name: 'Janthyra Hawklight',
                        gender: Gender.Female,
                        race: Race.Human,
                        class: HeroClass.Rogue,
                        abilities: {
                            dexterity: 20,
                            strength: 10,
                            wisdom: 5
                        }
                    },
                    {
                        id: 3,
                        name: 'Shaster Dragonsoultouched',
                        gender: Gender.Male,
                        race: Race.Elf,
                        class: HeroClass.Wizard,
                        abilities: {
                            dexterity: 5,
                            strength: 2,
                            wisdom: 20
                        }
                    }
                ]
            };
        },
        methods: {
            removeHero(heroId: number): void {
                this.heroes = [...this.heroes]
                    .filter((hero: Hero) => hero.id !== heroId);
            }
        }
    });
</script>
