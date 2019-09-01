import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { ButtplugClient, ButtplugBrowserWebsocketClientConnector } from "buttplug";

@Component({})
export default class CreateIntifaceConnection extends Vue {
  @Prop()
  private client!: ButtplugClient;
  private connectFailed: boolean = false;
  private connecting: boolean = false;

  public async mounted() {
    if (this.client.Connected) {
      await this.client.Disconnect();
    }
  }

  public async Connect() {
    this.connectFailed = false;
    this.connecting = true;
    const connectPromises: Array<Promise<boolean>> = [];
    const urls = ["ws://127.0.0.1:12345", "ws://127.0.0.1:12346", "wss://127.0.0.1:12345", "wss://127.0.0.1:12346"];
    for (const url of urls) {
      connectPromises.push(this.client.Connect(new ButtplugBrowserWebsocketClientConnector(`${url}`))
                           .then(() => Promise.resolve(true), (e) => Promise.resolve(false)));
    }
    const connectReturns = await Promise.all(connectPromises);
    if (connectReturns.indexOf(true) === -1) {
      this.connectFailed = true;
    }
    this.connecting = false;
  }
}
