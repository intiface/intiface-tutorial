<template>
  <div class="markdown-body">
    <p>Now let's find some devices! Hit the button below to begin.</p>
    <p v-if="client.Connector.constructor.name === 'ButtplugEmbeddedClientConnector' && !scanning">Since you're using a browser based connection, when you click Find Devices, the browser should show a dialog that will scan for bluetooth devices. You can choose your device from this dialog.</p>
    <p v-if="client.Connector.constructor.name === 'ButtplugBrowserWebsocketClientConnector' && !scanning">Since you're using Intiface Desktop, when you click Find Devices, the application will start scanning, and devices found will appear in a list below.</p>
    <center><v-btn @click="FindDevices" v-if="!scanning">Find devices</v-btn></center>
    <center><v-progress-circular
      v-if="scanning"
      rotate="270"
      size="100"
      :value="(timeRemaining / 30) * 100"> {{ timeRemaining }}s left</v-progress-circular></center>
    <br/>
    <br/>
    <v-list dense v-if="devicesFound === true">
      <v-list-item

        v-for="device in this.client.Devices"
        key="device.Index"
        v-text="device.Name">
      </v-list-item>
    </v-list>
    <p v-if="devicesFound === false">
      No devices were found. Here's some things to check:
      <ul>
        <li>Are you trying to connect to supported hardware?</li>
        <li>Is your hardware on and close to (for bluetooth)/connected to (for usb/serial/etc) the computer?</li>
      </ul>
      If you still can't connect, hit the "Need Help" button below to get some help with connecting your device.
    </p>
    <p v-if="devicesFound === true">At least one device was found!</p>
    <p v-if="client.Connector.constructor.name === 'ButtplugEmbeddedClientConnector' && devicesFound === true">If you would like to find other devices (if you have more than one device available), just click "Find Devices" again and select another device.</p>
    <router-link to="control-devices" v-if="devicesFound === true">On to controlling devices!</router-link>
  </div>
</template>

<script lang="ts" src="./DiscoverDevices.ts">
</script>
