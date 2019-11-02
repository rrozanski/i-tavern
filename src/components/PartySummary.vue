<template>
  <div class="text-muted small ml-3">
    Fighters: {{ fighters }} | Rogues: {{ rogues }} | Wizards: {{ wizards }}
  </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { HeroClass } from '@/enums';
    import { Hero } from '@/models';

    export default Vue.extend({
        name: 'PartySummary',
        props: {
            heroes: {
                type: Array as () => Hero[],
                default: () => [],
            }
        },
        computed: {
            fighters(): number {
                return this.heroes
                    .filter((hero: Hero) => hero.class === HeroClass.Fighter)
                    .length;
            },
            wizards(): number {
                return this.heroes
                    .filter((hero: Hero) => hero.class === HeroClass.Wizard)
                    .length;
            },
            rogues(): number {
                return this.heroes
                    .filter((hero: Hero) => hero.class === HeroClass.Rogue)
                    .length;
            }
        },
    });
</script>
