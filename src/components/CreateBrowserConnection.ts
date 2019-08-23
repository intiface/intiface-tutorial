import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { ButtplugClient, ButtplugEmbeddedClientConnector } from "buttplug";
const CreateBrowserConnectionText = require("./CreateBrowserConnection.md").vue.component;

@Component({})
export default class CreateBrowserConnection extends Vue.extend(CreateBrowserConnectionText) {
  @Prop()
  private client!: ButtplugClient;

  public async mounted() {
    if (this.client.Connected) {
      await this.client.Disconnect();
    }
    await this.client.Connect(new ButtplugEmbeddedClientConnector());
  }
}
