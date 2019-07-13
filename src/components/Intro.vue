<template>
  <v-container>
    Welcome to the Intiface tutorial!<br /><br />
    <router-link to="detect-platform">Let's get started</router-link>
  </v-container>
</template>

<script lang="ts">
 import Vue from "vue";
 import { Component } from "vue-property-decorator";

 @Component({})
 export default class Intro extends Vue {
 }
</script>
