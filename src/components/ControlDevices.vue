<template>
  <v-container class="markdown-body">
    <v-list dense v-for="device in devices">
      <v-list-item
        :key="device.Index"
        v-text="device.Name">
      </v-list-item>
      <div v-if="device.AllowedMessages.indexOf('VibrateCmd') !== -1" @click="Vibrate(device)">Vibrate</div>
      <div v-if="device.AllowedMessages.indexOf('RotateCmd') !== -1">Rotate</div>
      <div v-if="device.AllowedMessages.indexOf('LinearCmd') !== -1">Oscillate</div>
    </v-list>
    <router-link to="conclusion">Let's wrap up and get you on your way.</router-link>
  </v-container>
</template>

<script lang="ts" src="./ControlDevices.ts">
</script>
