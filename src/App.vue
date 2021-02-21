<template>
  <v-app>
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css" rel="stylesheet">
    <main>
      <v-container fill-height class="top-layout">
        <v-layout align-center justify-center column>
          <v-flex shrink>
            <transition name="fade" mode="out-in">
              <router-view :client="client">
              </router-view>
            </transition>
          </v-flex>
          <v-flex shrink class="bottom-nav" v-if="$route.name !== 'intro'">
            <router-link to="/support" v-if="$route.name !== 'support'" class="no-after-link"><v-btn>Need Help?</v-btn></router-link>
            <v-btn @click="$router.go(-1)" v-if="$route.name === 'support'"  class="no-after-link">Go back to last page</v-btn>
            <router-link to="/" class="no-after-link"><v-btn>Go back to start</v-btn></router-link>
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

 a {
   text-decoration: none;
 }

 a::after {
   font-family: "Material Icons";
   content: "north_east";
 }

 .no-after-link::after {
   content: "";
 }

 .router-link::after {
   font-family: "Material Icons";
   content: "arrow_forward";
 }

 .bottom-nav button {
   margin: 10px;
 }

 @media (min-width: 1000px) {
   .top-layout {
     max-width: 40%;
   }
 }

 .markdown-body {
   background: #ddd;
   padding: 20px;
   border-radius: 5px;
 }

 main > .container {
   min-height: 100vh;
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
