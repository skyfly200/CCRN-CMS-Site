<template>
  <div class="work-layout">
    <Nav />
    <v-content>
      <v-container fluid>
        <v-layout class="pa-4" align-center justify-center fill-height>
          <v-flex xs12 md10>
            <Station class="stream section ma-2" :feature="true" :frontmatter="$page.frontmatter" :title="$page.title" :path="$page.path" >
              <Content />
            </Station>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>
<script>
import Nav from "./components/Nav"
import Station from "./components/Station"
export default {
  components: {
    Nav,
    Station
  }
};
</script>
<style>
</style>
