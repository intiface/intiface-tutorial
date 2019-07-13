import Vue from "vue";
import Platform from "platform";
import { Component } from "vue-property-decorator";

@Component({})
export default class DetectPlatform extends Vue {
  private OSName = Platform.os;
  private BrowserName = Platform.name;
}
