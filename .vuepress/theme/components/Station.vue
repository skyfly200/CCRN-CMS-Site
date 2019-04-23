<template>
  <v-card>
    <v-img v-if="frontmatter.image" :src="$withBase(frontmatter.image)" alt="Station Logo" height="200px" class="white--text" />
    <v-card-title>
      <h1> {{ frontmatter.title }} </h1>
    </v-card-title>
    <v-card-text>
      <h2>{{ frontmatter.frequency }} {{ frontmatter.callsign }}</h2>
      <h3>Location: {{ frontmatter.location }}</h3>
      <Stream class="stream" :frontmatter="{ url: frontmatter.streamUrl }" />
      <p>{{ frontmatter.description }}</p>
      <Schedule :schedule="frontmatter.schedule" />
      <slot></slot>
    </v-card-text>
    <v-card-actions>
      <v-btn :href="frontmatter.webUrl" target="_blank" color="green">Visit Website</v-btn>
      <v-btn v-if="!feature" :to="path" color="blue">Read More</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import Stream from "./Stream";
import Schedule from "./Schedule";
export default {
  components: {
    Stream,
    Schedule
  },
  props: ["frontmatter", "path", "feature"]
};
</script>
<style>
</style>
