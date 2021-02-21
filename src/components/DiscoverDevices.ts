import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { ButtplugClient, ButtplugClientDevice } from "buttplug";

@Component({})
export default class DiscoverDevices extends Vue {
  @Prop()
  private client!: ButtplugClient;
  private scanning: boolean = false;
  private timeRemaining: number = 30;
  private devicesFound: boolean | null = null;

  public mounted() {
    if (!this.client.Connected) {
      this.$router.push("choose-connection");
      return;
    }
    this.client.addListener("deviceadded", this.DeviceAdded);
    this.client.addListener("deviceremoved", this.DeviceRemoved);
    this.client.addListener("scanningfinished", this.ScanningFinished);
    if (this.client.Devices.length > 0) {
      this.devicesFound = this.client.Devices.length > 0;
    }
  }

  public beforeDestroy() {
    this.client.removeListener("deviceadded", this.DeviceAdded);
    this.client.removeListener("deviceremoved", this.DeviceRemoved);
    this.client.removeListener("scanningfinished", this.ScanningFinished);
  }

  public async TimerFunc() {
    this.timeRemaining -= 1;
    if (this.timeRemaining === 0) {
      await this.StopScanning();
      return;
    }
    setTimeout(() => this.TimerFunc(), 1000);
  }

  public async StopScanning() {
    await this.client.stopScanning();
    this.scanning = false;
    this.devicesFound = this.client.Devices.length > 0;
  }

  public async FindDevices() {
    await this.client.startScanning();
    this.timeRemaining = 31;
    this.scanning = true;
    this.TimerFunc();
  }

  public DeviceAdded(device: ButtplugClientDevice) {
    this.devicesFound = this.client.Devices.length > 0;
  }

  public DeviceRemoved(device: ButtplugClientDevice) {
    this.devicesFound = this.client.Devices.length > 0;
  }

  public ScanningFinished() {
    this.scanning = false;
  }
}
