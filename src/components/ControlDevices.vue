<template>
  <v-container class="markdown-body">
    <p>We've connected to Intiface and found some devices, so now it's time to make them do something!</p>
    <p>The list below shows the devices we've found, as well as some the movements they're capable of. Click on the movement names to test them out.</p>
    <v-list dense v-for="device in devices"  v-bind:key="device.Index" class="device-list">
      <v-list-item
        v-bind:key="device.Index"
        v-text="device.Name">
      </v-list-item>
      <v-list-item>
        <v-btn v-if="CanVibrate(device)" @click="Vibrate(device)">Vibrate</v-btn><br/>
        <v-btn v-if="CanRotate(device)" @click="Rotate(device)">Rotate</v-btn><br/>
        <v-btn v-if="CanLinear(device)" @click="Oscillate(device)">Oscillate</v-btn><br/>
      </v-list-item>
    </v-list>
    <router-link to="conclusion" class="router-link">Let's wrap up and get you on your way.</router-link>
  </v-container>
</template>

<script lang="ts" src="./ControlDevices.ts">
</script>

<style lang="css">
 .device-list button {
   margin: 10px;
 }
</style>
