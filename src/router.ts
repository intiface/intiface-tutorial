import Vue from "vue";
import Router from "vue-router";
import Intro from "./components/Intro";
import DetectPlatform from "./components/DetectPlatform";
import ChooseConnection from "./components/ChooseConnection";
import DownloadIntiface from "./components/DownloadIntiface";
import CreateBrowserConnection from "./components/CreateBrowserConnection";
import CreateIntifaceConnection from "./components/CreateIntifaceConnection";

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
      component: ChooseConnection,
    },
    {
      path: "/download-intiface",
      name: "download-intiface",
      component: DownloadIntiface,
    },
    {
      path: "/create-browser-connection",
      name: "create-browser-connection",
      component: CreateBrowserConnection,
    },
    {
      path: "/create-intiface-connection",
      name: "create-intiface-connection",
      component: CreateIntifaceConnection,
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
