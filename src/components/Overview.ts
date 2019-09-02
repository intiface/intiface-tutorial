import Vue from "vue";
import { Component } from "vue-property-decorator";
const OverviewText = require("./Overview.md").vue.component;

@Component({})
export default class Overview extends Vue.extend(OverviewText) {
}
