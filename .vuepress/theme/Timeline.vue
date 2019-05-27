<template>
  <div class="events-layout">
    <Nav />
    <v-content>
      <v-container fluid>
        <v-layout class="pa-4 page-title">
          <h1>{{ $page.title }}</h1>
        </v-layout>
        <v-layout class="pa-4">
          <v-flex xs12 md10 offset-md1>
            <Content />
          </v-flex>
        </v-layout>
        <v-layout class="pa-2" align-center justify-left row fill-height>
          <v-flex xs12 md10 offset-md1>
              <v-timeline>
                <v-timeline-item small v-for="i in items" :key="i.title">
                    <template v-slot:opposite>
                        <span>{{ i.frontmatter.date }}</span>
                    </template>
                    <TimelineItem class="post section ma-2" :frontmatter="i.frontmatter" :title="i.title" :path="i.path" feature="true" md12 >
                        <p>{{ i.frontmatter.description }}</p>
                    </TimelineItem>
                </v-timeline-item>
            </v-timeline>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>
<script>
import Nav from "./components/Nav"
import TimelineItem from "./components/TimelineItem"
export default {
  components: {
    Nav,
    TimelineItem
  },
  computed: {
      items() {
        let items = this.$site.pages
          .filter(page => page.path.endsWith(".html") && page.path.startsWith(this.$page.path))
          .sort((a, b) => Date.parse(b.frontmatter.datetime) - Date.parse(a.frontmatter.datetime));
        return items;
      }
  }
};
</script>
<style>
  .page-title h1 {
    margin: 0 auto;
  }
</style>
