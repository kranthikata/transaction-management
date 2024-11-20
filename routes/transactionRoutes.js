const express = require("express");
const {
  createTransaction,
  getTransactions,
  updateTransactionStatus,
  getTransactionById,
} = require("../controllers/transactionController");

const router = express.Router();

// POST /api/transactions - Create a new transaction
router.post("/", createTransaction);

// GET /api/transactions - Retrieve all transactions for a user
router.get("/", getTransactions);

// PUT /api/transactions/:transaction_id - Update transaction status
router.put("/:transaction_id", updateTransactionStatus);

// GET /api/transactions/:transaction_id - Retrieve a specific transaction
router.get("/:transaction_id", getTransactionById);

module.exports = router;
