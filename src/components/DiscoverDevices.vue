<template>
  <div class="markdown-body">
    Now let's find some devices!
    <br/>
    <br/>
    <v-btn @click="FindDevices">Find devices</v-btn>
    <br/>
    <br/>
    <v-list dense>
      <v-list-item
        v-for="device in devices"
        key="device.Index"
        v-text="device.Name">
      </v-list-item>
    </v-list>
    <router-link to="control-devices" v-if="devices.length > 0">On to controlling devices!</router-link>
  </div>
</template>

<script lang="ts" src="./DiscoverDevices.ts">
</script>
