import Vue from "vue";
import Platform from "platform";
import { Component } from "vue-property-decorator";
const DetectPlatformText = require("./DetectPlatform.md").vue.component;

@Component({})
export default class DetectPlatform extends Vue.extend(DetectPlatformText) {
  private OSName = Platform.os;
  private BrowserName = Platform.name;
}
