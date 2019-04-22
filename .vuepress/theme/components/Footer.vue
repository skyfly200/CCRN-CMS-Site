<template>
  <v-footer app absolute dark>
    <span>&copy; {{ fullTitle }} {{ copyrightYear }}</span>
  </v-footer>
</template>
<script>
  export default {
      computed: {
        copyrightYear() {
          return new Date().getFullYear();
        },
        fullTitle() {
          return this.$site.fullTitle;
        }
      },
  };
</script>
<style>
  footer span {
    margin: 0 auto;
  }
</style>
