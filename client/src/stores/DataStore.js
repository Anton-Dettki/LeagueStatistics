/* eslint-disable */

import { defineStore } from 'pinia'
import {onMounted, ref} from "vue";
import {assertSimpleType} from "@babel/core/lib/config/caching";
import axios from "axios";

export const useDataStore = defineStore('data', () => {
    const items = ref([])

    //TODO
    if(process.env.UPDATE_ALL_ACCOUNTS == undefined){
        var updateAllAccounts = 'http://localhost:3000/update/allAccounts'
        var apiAllAccounts = 'http://localhost:3000/api/allAccounts'
    }
    else {
        var updateAllAccounts = process.env.UPDATE_ALL_ACCOUNTS
        var apiAllAccounts = process.env.API_ALL_ACCOUNTS
    }

    console.log(apiAllAccounts)

    async function updateData(){
        const response = await axios.get(updateAllAccounts) //TODO
        return response.data
    }

    async function getAllAccounts(){
        const response = await axios.get(apiAllAccounts) //TODO
        items.value = response.data
    }

    return { items, updateData, getAllAccounts }
} )
