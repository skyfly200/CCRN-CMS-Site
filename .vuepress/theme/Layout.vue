
<template>
  <v-app dark>
    <Home v-if="isHome" />
    <About v-else-if="isAbout" />
    <Contact v-else-if="isContact" />
    <Streams v-else-if="isStreams" />
    <StreamPage v-else-if="isStream" />
    <Archives v-else-if="isArchives" />
    <ArchivePage v-else-if="isArchive" />
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
  import About from './About';
  import Contact from './Contact';
  import Streams from './Streams';
  import StreamPage from './StreamPage';
  import Archives from './Archives';
  import ArchivePage from './ArchivePage';
  import Events from './Events';
  import EventPage from './EventPage';
  import Blog from './Blog';
  import PostPage from './PostPage';
  import Base from './Base';
  import Footer from "./components/Footer"
  export default {
      components: {
        Home,
        About,
        Contact,
        Streams,
        StreamPage,
        Archives,
        ArchivePage,
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
        isAbout() {
          const {path} = this.$page;
          return path === "/about.html";
        },
        isContact() {
          const {path} = this.$page;
          return path === "/contact.html";
        },
        isStreams() {
          const {path} = this.$page;
          return path === "/streams/";
        },
        isArchives() {
          const {path} = this.$page;
          return path === "/archives/";
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
        isArchive() {
          const {path} = this.$page;
          return path.startsWith("/archives/");
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
