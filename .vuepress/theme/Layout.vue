
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
    <DocIndex v-else-if="isDocs" />
    <DocPage v-else-if="isDoc" />
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
  import DocIndex from './DocIndex';
  import DocPage from './DocPage';
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
        DocIndex,
        DocPage,
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
        isDocs() {
          const {path} = this.$page;
          return path === "/docs/";
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
        isDoc() {
          const {path} = this.$page;
          return path.startsWith("/docs/");
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
    padding: 0;
  }
  body p {
    font-size: 1.2em;
  }
  .v-btn {
    color: #000!important;
  }
  .v-btn + .secondary {
    color: #FFF!important;
  }
</style>
