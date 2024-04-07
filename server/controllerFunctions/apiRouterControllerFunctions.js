const account = require('../models/account')

async function giveAllAccounts(){
    return account.find();
}

module.exports = {
    giveAllAccounts
}