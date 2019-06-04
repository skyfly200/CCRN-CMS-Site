<template>
  <v-card>
    <v-card-title>
      <h1> {{ frontmatter.title }} </h1>
    </v-card-title>
    <v-card-text>
      <slot></slot>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions v-if="feature">
      <v-btn :to="path" depressed color="primary">Read More</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: ["frontmatter", "path", "feature"]
};
</script>
<style>
</style>
