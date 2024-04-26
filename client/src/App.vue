<template>

<div class="v-card">
  <v-btn
  v-for="(_, tab) in tabs"
  :key="tab"
  :class="['tab-button', { active: currentTab === tab }]"
  @click="currentTab = tab"
  >
    {{ tab }}
  </v-btn>
</div>
  <component :is="tabs[currentTab]" class="tab"></component>


</template>

<script setup>
import { ref } from "vue";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";

const currentTab = ref("Home")

const tabs = {
    Home,
    About,
    Contact
}

</script>

<style>
</style>
