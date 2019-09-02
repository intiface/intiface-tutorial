import Vue from "vue";
import { Component } from "vue-property-decorator";
const ConclusionText = require("./Conclusion.md").vue.component;

@Component({})
export default class Conclusion extends Vue.extend(ConclusionText) {
}
