<template>
  <div class="base-layout">
    <Nav />
    <v-content>
      <v-container fluid>
        <v-layout class="pa-4 page-title">
          <h1>{{ $page.title }}</h1>
        </v-layout>
        <v-layout class="pa-4 img-wrap">
          <v-img class="about-img" v-if="$page.frontmatter.image" :src="$page.frontmatter.image" />
        </v-layout>
        <v-layout class="pa-4">
          <Content />
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>
<script>
import Nav from "./components/Nav"
export default {
  components: {
    Nav
  }
};
</script>
<style>
.about-img {
  max-width: 1000px;
  margin: auto;
}
</style>
