<template>
  <ul>
    <li v-for="(acc, i) in accounts" :key="i">
      {{ acc.killsTotal }}
    </li>
  </ul>
</template>

<script setup>
/* eslint-disable */
import axios from "axios"
import {onMounted, ref} from "vue";

const accounts = ref([])


onMounted(async () => {
  const response = await axios.get("api/allAccounts")
  accounts.value = response.data
  console.log(accounts.value)
})
</script>

<style>
</style>
