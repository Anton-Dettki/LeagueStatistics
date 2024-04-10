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
      :items="items"
    ></v-data-table>
  </v-card>

  <v-btn @click="refresh()">
    Update
  </v-btn>

</template>

<script setup>
/* eslint-disable */
import axios from "axios"
import {onMounted, ref} from "vue";

const items = ref([])

const headers = [
  { title: 'Account', value: 'gameName'},
  { title: 'Kills', value: 'killsTotal', sortable: true },
  { title: 'Deaths', value: 'deathsTotal', sortable: true },
  { title: 'Wins', value: 'wins', sortable: true },
  { title: 'Losses', value: 'losses', sortable: true }
]


onMounted(async () => {
  getAccountData()
})
async function getAccountData(){
  const response = await axios.get("api/allAccounts")
  items.value = response.data
}

async function updateData(){
  const response = await axios.get('update/allAccounts')
}

async function refresh(){
  await updateData()
  const response = await getAccountData()
  items.value = response.data
}

</script>

<style>
</style>
