import Vue from "vue";
import { Component } from "vue-property-decorator";
const DownloadIntifaceText = require("./DownloadIntiface.md").vue.component;

@Component({})
export default class DownloadIntiface extends Vue.extend(DownloadIntifaceText) {
}
