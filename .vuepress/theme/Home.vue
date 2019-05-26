<template>
  <div class="base-layout home">
    <Nav class="hidden-md-and-up" />
    <v-content>
      <v-container fluid>
        <v-parallax :src="$page.frontmatter.parallaxImage">
          <div class="paralax-content">
            <h1> {{ $page.frontmatter.parallaxHeader }} </h1>
            <h3> {{ $page.frontmatter.parallaxContent }} </h3>
          </div>
        </v-parallax>
        <v-layout class="hidden-sm-and-down">
          <v-btn flat
            v-for="page in menuPages"
            :key="page.text"
            :to="page.link">
              {{ page.text}}
          </v-btn>
        </v-layout>
        <v-layout class="pa-4 body" wrap >
          <v-flex xs12 md10 offset-md1 class="logo">
            <v-img width="100%" max-width="300" src="/assets/CCRN_logo.png" />
          </v-flex>
          <v-flex class="text"><Content /></v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>
<script>
import Nav from "./components/Nav"
export default {
  computed: {
      menuPages() {
        let pages = this.$site.themeConfig.nav || [];
        return pages.filter(p => p.title !== "home");
      }
  },
  components: {
    Nav
  }
};
</script>
<style>
  .paralax-content {
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .logo {
    margin: 10px;
  }
  .body {
    display: flex;
    align-items: center;
  }
  .text {
    margin: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .home main {
    padding: 0 !important;
  }
</style>
