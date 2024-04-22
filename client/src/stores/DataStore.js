/* eslint-disable */

import { defineStore } from 'pinia'
import {onMounted, ref} from "vue";
import {assertSimpleType} from "@babel/core/lib/config/caching";
import axios from "axios";

export const useDataStore = defineStore('data', () => {
    const items = ref([])


    async function updateData(){
        const response = await axios.get('https://leaguestatistics.onrender.com/update/allAccounts') //TODO
        return response.data
    }

    async function getAllAccounts(){
        await updateData()
        const response = await axios.get('https://leaguestatistics.onrender.com/api/allAccounts') //TODO
        items.value = response.data
    }

    return { items, updateData, getAllAccounts }
} )
