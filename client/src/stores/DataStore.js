/* eslint-disable */

import { defineStore } from 'pinia'
import { ref } from "vue";
import axios from "axios";

export const useDataStore = defineStore('data', () => {
    const items = ref([])

    async function updateData(){
        const response = await axios.get(`${process.env.VUE_APP_SERVER}/api/AllAccounts/update`) //TODO
        return response.data
    }

    async function getAllAccounts(){
        console.log(process.env.VUE_APP_SERVER)
        const response = await axios.get(`${process.env.VUE_APP_SERVER}/api/AllAccounts`) //TODO
        items.value = response.data
    }

    return { items, updateData, getAllAccounts }
} )
