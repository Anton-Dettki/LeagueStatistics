<template>
  <!-- eslint-disable -->
<div class="header">

  <div class="icon"></div>
  <div class="fast-links">
  </div>
</div>

  <v-card>
    <v-data-table
      :headers="headers"
      :items="dataStore.items"
    ></v-data-table>
  </v-card>

  <v-btn @click="async () => {await dataStore.updateData()}">
    Update
  </v-btn>

</template>

<script setup>
/* eslint-disable */
import {onMounted, ref} from "vue";
import {useDataStore} from "@/stores/DataStore";

const dataStore = useDataStore()

const headers = [
  { title: 'Account', value: 'gameName'},
  { title: 'Kills', value: 'killsTotal', sortable: true },
  { title: 'Deaths', value: 'deathsTotal', sortable: true },
  { title: 'Wins', value: 'wins', sortable: true },
  { title: 'Losses', value: 'losses', sortable: true }
]
//AWAY
onMounted(  () => {
     dataStore.getAllAccounts()
})

</script>

<style>
</style>
