<template>
  <v-card>
    <v-card-title>
      <h1> {{ frontmatter.title }} </h1>
    </v-card-title>
    <v-divider light></v-divider>
    <v-card-text>
      <v-layout>
        <v-flex class="md12 lg6">
          <v-img :src="$withBase(frontmatter.image)" alt="Station Logo" aspect-ratio="1" contain class="white--text" />
        </v-flex>
        <v-flex class="md12 lg6 ma-2">
          <h2>{{ frontmatter.frequency }} {{ frontmatter.callsign }}</h2>
          <h3>Location: {{ frontmatter.location }}</h3>
          <Stream class="stream" :frontmatter="{ url: frontmatter.streamUrl }" />
        </v-flex>
      </v-layout>
      <p>{{ frontmatter.description }}</p>
      <Schedule v-if="feature" :schedule="frontmatter.schedule" />
      <slot></slot>
    </v-card-text>
    <v-divider light></v-divider>
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
