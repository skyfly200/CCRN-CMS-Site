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
        <v-layout class="pa-4 body" wrap>
          <v-flex xs12 md10 offset-md1 class="pa-4 heading">
            <v-img width="100%" class="logo" :src="$page.frontmatter.logo" />
            <div class="quote-block">
              <p class="quote">"{{ $page.frontmatter.quote }}"</p>
              <div class="quote-attr">
                <v-spacer/>
                <v-avatar class="quote-avatar">
                  <v-img :src="$page.frontmatter.quoteAvatar" />
                </v-avatar>
                <div class="quote-attr-text">
                  <span class="quote-name">{{ $page.frontmatter.quoteName }}</span>
                  <span class="quote-title">{{ $page.frontmatter.quoteTitle }}</span>
                </div>
              </div>
            </div>
          </v-flex>
          <v-flex xs12 md10 offset-md1 class="pa-4 cards">
            <v-card v-for="card in $page.frontmatter.cards" class="ma-4 pa-2 card">
              <v-icon class="card-icon" x-large>{{ card.icon }}</v-icon>
              <v-card-title>{{ card.text }}</v-card-title>
              <v-card-actions>
                <v-btn :to="card.linkTo">{{ card.linkText }}</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex xs12 md10 offset-md1>
            <Content />
          </v-flex>
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
  .heading {
    display: flex;

  }
  .logo {
    margin: 10px;
    max-width: 300px;
    align-items: center;
  }
  .quote-block {
    padding-left: 1em;
    margin-top: 6%; 
  }
  .quote {
    font-size: 2em;
  }
  .quote-attr {
    display: flex;
  }
  .quote-attr-text {
    display: flex;
    flex-direction: column;
    padding-left: 1em;
    padding-top: 0.5em;
  }
  .body {
    display: flex;
    align-items: center;
  }
  .cards {
    display: flex;
    flex-direction: row;
  }
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    flex: 1;
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
