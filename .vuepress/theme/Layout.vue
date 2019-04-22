<template>
  <v-app dark>
    <Home v-if="isHome" />
    <Contact v-else-if="isContact" />
    <Streams v-else-if="isStreams" />
    <StreamPage v-else-if="isStream" />
    <Events v-else-if="isEvents" />
    <EventPage v-else-if="isEvent" />
    <Blog v-else-if="isBlog" />
    <PostPage v-else-if="isPost" />
    <Base v-else />
    <Footer />
  </v-app>
</template>
<script>
  import Home from './Home';
  import Contact from './Contact';
  import Streams from './Streams';
  import StreamPage from './StreamPage';
  import Events from './Events';
  import EventPage from './EventPage';
  import Blog from './Blog';
  import PostPage from './PostPage';
  import Base from './Base';
  import Footer from "./components/Footer"
  export default {
      components: {
        Home,
        Contact,
        Streams,
        StreamPage,
        Events,
        EventPage,
        Blog,
        PostPage,
        Base,
        Footer
      },
      computed: {
        isHome() {
          const {path} = this.$page;
          return path === "/";
        },
        isContact() {
          const {path} = this.$page;
          return path === "/contact.html";
        },
        isStreams() {
          const {path} = this.$page;
          return path === "/streams/";
        },
        isEvents() {
          const {path} = this.$page;
          return path === "/events/";
        },
        isBlog() {
          const {path} = this.$page;
          return path === "/posts/";
        },
        isStream() {
          const {path} = this.$page;
          return path.startsWith("/streams/");
        },
        isEvent() {
          const {path} = this.$page;
          return path.startsWith("/events/");
        },
        isPost() {
          const {path} = this.$page;
          return path.startsWith("/posts/");
        }
      }
  };
</script>
<style>
  .container {
    padding: 0
  }
</style>
