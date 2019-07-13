<template>
  <v-app>
    <v-content>
      <transition name="fade" mode="out-in">
        <router-view>
        </router-view>
      </transition>
    </v-content>
  </v-app>
</template>

<script lang="ts" src="./App.ts">
</script>

<style lang="css">
 .fade-enter-active,
 .fade-leave-active {
   transition-duration: 0.3s;
   transition-property: opacity;
   transition-timing-function: ease;
 }

 .fade-enter,
 .fade-leave-active {
   opacity: 0
 }</style>
