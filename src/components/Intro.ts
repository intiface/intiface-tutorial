import Vue from "vue";
import { Component } from "vue-property-decorator";
const IntroText = require("./Intro.md").vue.component;

@Component({})
export default class Intro extends Vue.extend(IntroText) {
}
