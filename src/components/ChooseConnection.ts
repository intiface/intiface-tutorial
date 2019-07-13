import Vue from "vue";
import { Component } from "vue-property-decorator";
const ChooseConnectionText = require("./ChooseConnection.md").vue.component;

@Component({})
export default class ChooseConnection extends Vue.extend(ChooseConnectionText) {
}
