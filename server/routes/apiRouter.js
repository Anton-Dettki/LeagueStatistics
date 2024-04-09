const { Router } = require('express');
const apiRouterController = require('../controllers/apiRouterController')
const updateController = require("../controllers/updateController");

const router = Router();

router.get('/allAccounts', apiRouterController.account_list)


router.get('/test', updateController.updateAllAccounts)

module.exports = router