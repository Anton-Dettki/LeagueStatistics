/* eslint-disable */

import { defineStore } from 'pinia'
import {onMounted, ref} from "vue";
import {assertSimpleType} from "@babel/core/lib/config/caching";
import axios from "axios";

export const useDataStore = defineStore('data', () => {
    const items = ref([])


    async function updateData(){
        const response = await axios.get('http://localhost:3000/update/allAccounts') //TODO
        return response.data
    }

    async function getAllAccounts(){
        await updateData()
        const response = await axios.get('http://localhost:3000/api/allAccounts') //TODO
        items.value = response.data
    }

    onMounted(() => {
        getAllAccounts()
    })

    return { items, updateData, getAllAccounts }
} )
