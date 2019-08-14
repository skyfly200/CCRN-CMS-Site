import Vuetify from "vuetify";
//import "vuetify/dist/vuetify.min.css";

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.use(Vuetify, {
    theme: {
      primary: "#FFD700",
      secondary: "#002868",
      accent: "#BF0A30"
    }
  });
  router.beforeEach((to, from, next) => {
    if (to.matched.length > 0 && to.matched[0].path === "*") {
      next("/404.html");
    } else {
      next();
    }
  });
};
