import Vue from "vue";
import { Component } from "vue-property-decorator";
const TermsText = require("./Terms.md").vue.component;

@Component({})
export default class Terms extends Vue.extend(TermsText) {
}
