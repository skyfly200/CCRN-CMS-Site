 <template>
  <div class="post-layout">
    <Nav />
    <v-content>
      <v-container fluid>
        <v-layout class="pa-4" align-center justify-center fill-height>
          <v-flex xs12 md10>
            <TimelineItem :frontmatter="$page.frontmatter" :title="$page.title" :path="$page.path" md12 >
              <Content />
            </TimelineItem>
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
  }
};
</script>
<style>
</style>
