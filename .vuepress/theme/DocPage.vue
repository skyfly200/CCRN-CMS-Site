<template>
  <div class="doc-layout">
    <Nav />
    <v-content>
      <v-container fluid>
        <v-layout class="pa-4" align-center justify-center fill-height>
          <v-flex xs12 md10>
            <Doc :frontmatter="$page.frontmatter" :title="$page.title" :path="$page.path" md12 >
              <Content />
            </Doc>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>
<script>
import Nav from "./components/Nav"
import Doc from "./components/Doc"
export default {
  components: {
    Nav,
    Doc
  }
};
</script>
<style>
</style>
