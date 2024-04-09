const account = require('../models/account')

async function giveAllAccounts(){
    const accounts = await account.find()
    console.log(accounts)

    return accounts
}

module.exports = {
    giveAllAccounts
}