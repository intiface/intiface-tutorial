<template>
  <v-container class="markdown-body">
    Hit the button below to try to connect:
    <br/><br/>
    <v-btn @click="Connect" :disabled="connecting || this.client.Connected">Connect to Intiface Desktop</v-btn>
    <br/><br/>
    <div v-if="connecting && !this.client.Connected">
      <p>Now trying to connect.</p>
      <center><v-progress-circular indeterminate></v-progress-circular></center>
    </div>
    <div v-if="connectFailed">
      <p>It looks like your attempt at connecting failed.</p>
      <p>Here's a few different things to try:</p>
      <ul>
        <li>Is the server started?</li>
        <li>Are Secure/Insecure Websockets both checked?</li>
        <li>If using firefox, was the cert setup step run successfully?</li>
      </ul>
      <p>If you're still experiencing issues, hit the "Need Help?" button below to find ways to get support.</p>
    </div>
    <div v-if="this.client.Connected">
      <p><b>Success!</b></p>
      <p>You are now connected to Intiface Desktop.</p>
      <p>If you check the Intiface Desktop Server Status, it should show that it is connected to the Intiface Tutorial Client</p>
    </div>
    <router-link to="discover-devices" class="router-link" v-if="this.client.Connected">Go to discovery step</router-link>
  </v-container>
</template>

<script lang="ts" src="./CreateIntifaceConnection.ts">
</script>
