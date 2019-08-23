import Vue from "vue";
import { Component } from "vue-property-decorator";
const SetupIntifaceDesktopText = require("./SetupIntifaceDesktop.md").vue.component;

@Component({})
export default class SetupIntifaceDesktop extends Vue.extend(SetupIntifaceDesktopText) {
}
