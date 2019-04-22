<template>
  <div class="archivePlayer" v-bind:style="{ height: height + 'px'}">
    <iframe :src="contentUrl" width="100%" :height="height" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>
  </div>
</template>
<script>
export default {
  props: ["frontmatter"],
  computed: {
    contentUrl: function() {
      let url = "https://archive.org/embed/" + this.frontmatter.id;
      if (this.frontmatter.playlist) url = url + "&playlist=1";
      return url;
    },
    height: function() {
      return this.frontmatter.playlist ? 90 : 30;
    }
  }
};
</script>
<style>
  .archivePlayer {
    position: relative;
    margin: 25px 0;
  }
  .archivePlayer iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
