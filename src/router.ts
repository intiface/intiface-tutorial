import Vue from "vue";
import Router from "vue-router";
import Intro from "./components/Intro.vue";
import DetectPlatform from "./components/DetectPlatform";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "intro",
      component: Intro,
    },
    {
      path: "/detect-platform",
      name: "detect-platform",
      component: DetectPlatform,
    },
    {
      path: "/choose-connection",
      name: "choose-connection",
      // component:
    },
    {
      path: "/create-connection",
      name: "create-connection",
      // component:
    },
    {
      path: "/discover-devices",
      name: "discover-devices",
      // component:
    },
    {
      path: "/use-devices",
      name: "use-devices",
      // component:
    },
    {
      path: "/conclusion",
      name: "conclusion",
      // component:
    },
  ],
});
