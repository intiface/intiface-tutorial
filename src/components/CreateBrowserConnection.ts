import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { ButtplugClient, ButtplugEmbeddedConnectorOptions } from "buttplug";
const CreateBrowserConnectionText = require("./CreateBrowserConnection.md").vue.component;

@Component({})
export default class CreateBrowserConnection extends Vue.extend(CreateBrowserConnectionText) {
  @Prop()
  private client!: ButtplugClient;

  public async mounted() {
    if (this.client.Connected) {
      await this.client.disconnect();
    }
    await this.client.connect(new ButtplugEmbeddedConnectorOptions());
    const _paq = (window as any)._paq;
    _paq.push(["trackEvent", "Tutorial", "Intiface Connection", "Browser Connect Success"]);
  }
}
