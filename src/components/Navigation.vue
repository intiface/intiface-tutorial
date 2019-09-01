<template>
  <v-container>
      <v-btn @click="$router.go(-1)"><v-icon>mdi-arrow-left</v-icon> Back</v-btn>
      <v-btn>Next <v-icon>mdi-arrow-right</v-icon></v-btn>
  </v-container>
</template>

<script lang="ts" src="./Navigation.ts">
</script>
