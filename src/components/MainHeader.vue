<template>
  <div class="header">
    <div class="container">
      <div>
        <div class="title">
          {{ title }}
        </div>
        <div class="subtitle">
          {{ subtitle }}
        </div>
      </div>
      <div class="logo">
        <img
            src="../assets/images/hanging-sign.svg"
            alt="iTavern Logo">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: 'MainHeader',
        props: {
            title: {
                type: String,
                default: 'Title'
            },
            subtitle: {
                type: String,
                default: 'Subtitle'
            }
        }
    });
</script>

<style scoped lang="scss">
  @import '../styles/components/main-header';
</style>
