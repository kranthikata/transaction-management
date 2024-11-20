const Transaction = require("../models/Transaction");

// Create a new transaction
exports.createTransaction = async ({ amount, transaction_type, user }) => {
  return await Transaction.create({ amount, transaction_type, user });
};

// Retrieve all transactions for a user
exports.getTransactionsByUser = async (user_id) => {
  return await Transaction.find({ user: user_id });
};

// Update a transaction's status
exports.updateTransactionStatus = async (transaction_id, status) => {
  return await Transaction.findByIdAndUpdate(
    transaction_id,
    { status },
    { new: true }
  );
};

// Retrieve a specific transaction by ID
exports.getTransactionById = async (transaction_id) => {
  return await Transaction.findById(transaction_id);
};
