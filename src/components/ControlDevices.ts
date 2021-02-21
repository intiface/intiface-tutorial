import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { ButtplugClient, ButtplugClientDevice, ButtplugDeviceMessageType } from "buttplug";

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

  public CanVibrate(device: ButtplugClientDevice) {
    return !!device.messageAttributes(ButtplugDeviceMessageType.VibrateCmd);
  }

  public CanRotate(device: ButtplugClientDevice) {
    return !!device.messageAttributes(ButtplugDeviceMessageType.RotateCmd);
  }

  public CanLinear(device: ButtplugClientDevice) {
    return !!device.messageAttributes(ButtplugDeviceMessageType.LinearCmd);
  }

  public async Vibrate(device: ButtplugClientDevice) {
    device.vibrate(0.9);
    await this.sleep(1000);
    device.stop();
  }

  public async Rotate(device: ButtplugClientDevice) {
    device.rotate(0.9, true);
    await this.sleep(1000);
    device.stop();
  }

  public async Oscillate(device: ButtplugClientDevice) {
    device.linear(0.9, 1000);
    await this.sleep(1000);
    device.linear(0.0, 1000);
  }
}
