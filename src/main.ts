import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { buttplugInit } from "buttplug";

Vue.config.productionTip = false;

buttplugInit().then(() =>
  new Vue({
    router,
    vuetify,
    render: (h) => h(App),
  }).$mount("#app"),
);
