<template>
  <v-app>
    <main>
      <v-container fill-height>
        <v-layout align-center justify-center>
          <v-flex shrink class="text-flex">
            <transition name="fade" mode="out-in">
              <router-view>
              </router-view>
            </transition>
          </v-flex>
        </v-layout>
      </v-container>
    </main>
  </v-app>
</template>

<script lang="ts" src="./App.ts">
</script>

<style lang="css">

 main {
   background: #222;
 }

 @media (min-width: 600px) {
   .text-flex {
     max-width: 50%;
   }
 }

 .markdown-body {
   background: #ddd;
   padding: 20px;
   border-radius: 5px;
 }

 main > .container {
   height: 100vh;
 }

 .fade-enter-active,
 .fade-leave-active {
   transition-duration: 0.3s;
   transition-property: opacity;
   transition-timing-function: ease;
 }

 .fade-enter,
 .fade-leave-active {
   opacity: 0
 }

 li {
   padding-bottom: 5px;
 }

 a {
   target-new: tab;
 }

</style>
