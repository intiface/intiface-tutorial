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

  public sleep(time: number) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  public async Vibrate(device: ButtplugClientDevice) {
    device.SendVibrateCmd(0.9);
    await this.sleep(1000);
    device.SendStopDeviceCmd();
  }
}
