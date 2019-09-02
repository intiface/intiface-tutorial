import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { ButtplugClient, ButtplugClientDevice } from "buttplug";

@Component({})
export default class ControlDevices extends Vue {
  @Prop()
  private client!: ButtplugClient;
  private devices: ButtplugClientDevice[] = [];

  public mounted() {
    if (!this.client.Connected) {
      this.$router.push("choose-connection");
      return;
    }
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

  public async Rotate(device: ButtplugClientDevice) {
    device.SendRotateCmd(0.9, true);
    await this.sleep(1000);
    device.SendStopDeviceCmd();
  }

  public async Oscillate(device: ButtplugClientDevice) {
    device.SendLinearCmd(0.9, 1000);
    await this.sleep(1000);
    device.SendLinearCmd(0.0, 1000);
  }
}
