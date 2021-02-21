import Vue from "vue";
import Router from "vue-router";
import Intro from "./components/Intro";
import ChooseConnection from "./components/ChooseConnection";
import DownloadIntiface from "./components/DownloadIntiface";
import CreateBrowserConnection from "./components/CreateBrowserConnection";
import CreateIntifaceConnection from "./components/CreateIntifaceConnection.vue";
import SetupIntifaceDesktop from "./components/SetupIntifaceDesktop";
import DiscoverDevices from "./components/DiscoverDevices.vue";
import ControlDevices from "./components/ControlDevices.vue";
import Support from "./components/Support";
import Welcome from "./components/Welcome";
import Terms from "./components/Terms";
import Overview from "./components/Overview";
import Conclusion from "./components/Conclusion";

Vue.use(Router);

const DEFAULT_TITLE = "Intiface Tutorial";

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "intro",
      component: Intro,
      meta: {
        title: "Intiface Tutorial - Intro",
      },
    },
    {
      path: "/choose-connection",
      name: "choose-connection",
      component: ChooseConnection,
      meta: {
        title: "Intiface Tutorial - Choose Connection",
      },
    },
    {
      path: "/download-intiface",
      name: "download-intiface",
      component: DownloadIntiface,
      meta: {
        title: "Intiface Tutorial - Download Intiface Desktop",
      },
    },
    {
      path: "/setup-intiface-desktop",
      name: "setup-intiface-desktop",
      component: SetupIntifaceDesktop,
      meta: {
        title: "Intiface Tutorial - Setup Intiface Desktop",
      },
    },
    {
      path: "/create-browser-connection",
      name: "create-browser-connection",
      component: CreateBrowserConnection,
      meta: {
        title: "Intiface Tutorial - Create Browser Connection",
      },
    },
    {
      path: "/create-intiface-connection",
      name: "create-intiface-connection",
      component: CreateIntifaceConnection,
      meta: {
        title: "Intiface Tutorial - Create Intiface Desktop Connection",
      },
    },
    {
      path: "/discover-devices",
      name: "discover-devices",
      component: DiscoverDevices,
      meta: {
        title: "Intiface Tutorial - Discover Devices",
      },
    },
    {
      path: "/control-devices",
      name: "control-devices",
      component: ControlDevices,
      meta: {
        title: "Intiface Tutorial - Control Devices",
      },
    },
    {
      path: "/support",
      name: "support",
      component: Support,
      meta: {
        title: "Intiface Tutorial - Support",
      },
    },
    {
      path: "/welcome",
      name: "welcome",
      component: Welcome,
      meta: {
        title: "Intiface Tutorial - Welcome",
      },
    },
    {
      path: "/terms",
      name: "terms",
      component: Terms,
      meta: {
        title: "Intiface Tutorial - Terms",
      },
    },
    {
      path: "/overview",
      name: "overview",
      component: Overview,
      meta: {
        title: "Intiface Tutorial - Overview",
      },
    },
    {
      path: "/conclusion",
      name: "conclusion",
      component: Conclusion,
      meta: {
        title: "Intiface Tutorial - Conclusion",
      },
    },
  ],
});

router.afterEach((to, from) => {
  document.title = to.meta.title || DEFAULT_TITLE;
  const _paq = (window as any)._paq;
  _paq.push(["setCustomUrl", window.location.pathname]);
  _paq.push(["setDocumentTitle", document.title]);
  _paq.push(["trackPageView"]);
});

export default router;
