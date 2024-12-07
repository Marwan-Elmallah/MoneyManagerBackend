const express = require("express");
const { createAccount, getAccounts, updateAccount, deleteAccount } = require("./controller.account");
const router = express.Router();

router.post("/", createAccount);
router.get("/", getAccounts);
router.put("/:id", updateAccount);
router.delete("/:id", deleteAccount);

module.exports = router;