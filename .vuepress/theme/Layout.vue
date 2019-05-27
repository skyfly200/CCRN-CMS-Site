
<template>
  <v-app dark>
    <Home v-if="isHome" />
    <About v-else-if="isAbout" />
    <Contact v-else-if="isContact" />
    <Stations v-else-if="isStations" />
    <StationPage v-else-if="isStation" />
    <Archives v-else-if="isArchives" />
    <ArchivePage v-else-if="isArchive" />
    <Events v-else-if="isEvents" />
    <EventPage v-else-if="isEvent" />
    <Blog v-else-if="isBlog" />
    <PostPage v-else-if="isPost" />
    <Timeline v-else-if="isTimeline" />
    <HistoryPage v-else-if="isHistory" />
    <Base v-else />
    <Footer />
  </v-app>
</template>
<script>
  import Home from './Home';
  import About from './About';
  import Contact from './Contact';
  import Stations from './Stations';
  import StationPage from './StationPage';
  import Archives from './Archives';
  import ArchivePage from './ArchivePage';
  import Events from './Events';
  import EventPage from './EventPage';
  import Blog from './Blog';
  import PostPage from './PostPage';
  import Timeline from './Timeline';
  import HistoryPage from './HistoryPage';
  import Base from './Base';
  import Footer from "./components/Footer"
  export default {
      components: {
        Home,
        About,
        Contact,
        Stations,
        StationPage,
        Archives,
        ArchivePage,
        Events,
        EventPage,
        Blog,
        PostPage,
        Timeline,
        HistoryPage,
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
        isStations() {
          const {path} = this.$page;
          return path === "/stations/";
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
        isTimeline() {
          const {path} = this.$page;
          return path === "/history/";
        },
        isStation() {
          const {path} = this.$page;
          return path.startsWith("/stations/");
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
        },
        isHistory() {
          const {path} = this.$page;
          return path.startsWith("/history/");
        }
      }
  };
</script>
<style>
  .container {
    padding: 0
  }
  body p {
    font-size: 1.2em
  }
</style>
