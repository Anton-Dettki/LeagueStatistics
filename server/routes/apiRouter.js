const { Router } = require('express');
const apiRouterController = require('../controllers/apiRouterController')

const router = Router();

router.get('/allAccounts', apiRouterController.account_list)

module.exports = router