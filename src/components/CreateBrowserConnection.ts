import Vue from "vue";
import { Component } from "vue-property-decorator";
const CreateIntifaceConnectionText = require("./CreateIntifaceConnection.md").vue.component;

@Component({})
export default class CreateIntifaceConnection extends Vue.extend(CreateIntifaceConnectionText) {
}
