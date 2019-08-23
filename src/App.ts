import Vue from "vue";
import { Component } from "vue-property-decorator";
import { ButtplugClient } from "buttplug";

@Component({})
export default class App extends Vue {
  private client: ButtplugClient = new ButtplugClient("Intiface Tutorial Client");
}
