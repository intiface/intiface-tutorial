import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { ButtplugClient } from "buttplug";

@Component({})
export default class DiscoverDevices extends Vue {
  @Prop()
  private client!: ButtplugClient;

  public async FindDevices() {
    await this.client.StartScanning();
  }
}
