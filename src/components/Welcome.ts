import Vue from "vue";
import { Component } from "vue-property-decorator";
const WelcomeText = require("./Welcome.md").vue.component;

@Component({})
export default class Welcome extends Vue.extend(WelcomeText) {
}
