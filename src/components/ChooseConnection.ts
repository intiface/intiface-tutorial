import Vue from "vue";
import { Component } from "vue-property-decorator";
import Platform from "platform";
const ChooseConnectionText = require("./ChooseConnection.md").vue.component;

@Component({})
export default class ChooseConnection extends Vue.extend(ChooseConnectionText) {
  private OSName = Platform.os!.toString();
  private BrowserName = Platform.name;
  private HasWebBluetooth = typeof(window) !== "undefined" &&
    typeof(window.navigator) !== "undefined" &&
    (navigator as any).bluetooth;
}
