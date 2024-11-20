const transactionService = require("../services/transactionService");

// Create a new transaction
exports.createTransaction = async (req, res) => {
  try {
    const { amount, transaction_type, user } = req.body;

    if (!amount || !transaction_type || !user) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const transaction = await transactionService.createTransaction({
      amount,
      transaction_type,
      user,
    });

    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Retrieve all transactions for a user
exports.getTransactions = async (req, res) => {
  try {
    const { user_id } = req.query;

    const transactions = await transactionService.getTransactionsByUser(
      user_id
    );
    res.status(200).json({ transactions });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update transaction status
exports.updateTransactionStatus = async (req, res) => {
  try {
    const { transaction_id } = req.params;
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({
        message: "Status is required",
      });
    }

    const transaction = await transactionService.updateTransactionStatus(
      transaction_id,
      status
    );

    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.status(200).json(transaction);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Retrieve a specific transaction
exports.getTransactionById = async (req, res) => {
  try {
    const { transaction_id } = req.params;

    const transaction = await transactionService.getTransactionById(
      transaction_id
    );
    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.status(200).json(transaction);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
