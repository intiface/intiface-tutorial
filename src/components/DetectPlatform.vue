<template>
  <v-container>
    <vue-markdown :breaks="true">
      Let's see what OS you're running.

      It looks like you're running {{ OSName }} {{ BrowserName }}.

      <router-link to="choose-connection">Next, we'll choose a connection type.</router-link>
    </vue-markdown>

  </v-container>
</template>

<script lang="ts" src="./DetectPlatform.ts"></script>
