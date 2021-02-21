import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { ButtplugClient, ButtplugWebsocketConnectorOptions } from "buttplug";

@Component({})
export default class CreateIntifaceConnection extends Vue {
  @Prop()
  private client!: ButtplugClient;
  private connectFailed: boolean = false;
  private connecting: boolean = false;

  public async mounted() {
    if (this.client.Connected) {
      await this.client.disconnect();
    }
  }

  public async Connect() {
    this.connectFailed = false;
    this.connecting = true;
    const connectPromises: Array<Promise<boolean>> = [];
    const urls = ["ws://127.0.0.1:12345", "ws://127.0.0.1:12346", "wss://127.0.0.1:12345", "wss://127.0.0.1:12346"];
    for (const url of urls) {
      const options = new ButtplugWebsocketConnectorOptions();
      options.Address = url;
      connectPromises.push(this.client.connect(options)
                           .then(() => Promise.resolve(true), (e) => Promise.resolve(false)));
    }
    const connectReturns = await Promise.all(connectPromises);
    const _paq = (window as any)._paq;
    if (connectReturns.indexOf(true) === -1) {
      this.connectFailed = true;
      _paq.push(["trackEvent", "Tutorial", "Intiface Connection", "Desktop Connect Failure"]);
    } else {
      _paq.push(["trackEvent", "Tutorial", "Intiface Connection", "Desktop Connect Success"]);
    }
    this.connecting = false;
  }
}
