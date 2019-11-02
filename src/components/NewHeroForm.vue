<template>
  <b-modal
      v-model="showNewHeroForm"
      :hide-header-close="true"
      :no-close-on-esc="true"
      :no-close-on-backdrop="true"
      size="lg">
    <div slot="modal-header"></div>
    <div slot="modal-footer"></div>
  </b-modal>
</template>

<script lang="ts">
    import Vue from 'vue';

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
                this.$emit('update:showNewHeroForm', false);
            },
            cancel() {
                this.$emit('update:showNewHeroForm', false);
            }
        }
    });
</script>

<style scoped lang="scss">
  @import '../styles/components/new-hero-form';
</style>
