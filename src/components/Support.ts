import Vue from "vue";
import { Component } from "vue-property-decorator";
const SupportText = require("./Support.md").vue.component;

@Component({})
export default class Support extends Vue.extend(SupportText) {
  public mounted() {
    document.getElementById("launcher")!.style.display = "block";
  }

  public beforeDestroy() {
    document.getElementById("launcher")!.style.display = "none";
  }
}
