<template>
  <v-card class="elevation-2">
    <v-img v-if="frontmatter.image" :src="$withBase(frontmatter.image)" alt="Timeline item image" height="200px" class="white--text" />
    <v-card-title>
        <h1>{{ frontmatter.title }}</h1>
        <v-spacer></v-spacer>
        <h2 v-if="!feature">{{ frontmatter.date }}</h2>
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
.v-cart__title {
    display: flex;
    flex-direction: column;
}
</style>
