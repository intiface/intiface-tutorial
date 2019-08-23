import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { ButtplugClient, ButtplugClientDevice } from "buttplug";

@Component({})
export default class ControlDevices extends Vue {
  @Prop()
  private client!: ButtplugClient;
  private devices: ButtplugClientDevice[] = [];

  public mounted() {
    this.devices = this.client.Devices;
    this.client.addListener("deviceremoved", this.DeviceRemoved);
  }

  public DeviceRemoved(device: ButtplugClientDevice) {
    this.devices = this.devices.filter((x) => x !== device);
  }
}
