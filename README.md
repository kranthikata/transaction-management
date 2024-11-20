# Transaction Management System

A web application for managing transactions, users, and transaction statuses. This project allows users to create and view transactions, as well as manage user accounts.

## Features

- **User Registration**: Create a new user with a name, email, and password.
- **Transaction Management**: Create, update, and view transactions linked to users.
- **Transaction Status**: Update the status of transactions.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: bcrypt for password hashing
- **Environment Variables**: `.env` file for configuration (such as database URI and port)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js**: [Install Node.js](https://nodejs.org/)
- **MongoDB**: A MongoDB cluster or local instance

### Clone the repository

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/transaction-management.git
   cd transaction-management
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Setup .env file in root directory

   ```bash
   DB_URI=mongodb+srv://your-username:your-password@cluster0.mongodb.net/your-database-name
   PORT=5000
   ```

4. Start the server

   ```bash
   node app.js
   ```

## API Endpoints

### Users

#### POST `/api/users`

- **Description**: Create a new user.
- **Request Body**:
  ```json
  {
    "name": "string",
    "email": "string",
    "password": "string"
  }
  ```
- **Response**:
  - **201 Created**:
    ```json
    {
      "name": "string",
      "email": "string",
      "password": "hashedPassword"
    }
    ```
  - **400 Bad Request**: If any required fields are missing.
  - **409 Conflict**: If a user with the given email already exists.

#### GET `/api/users/:id`

- **Description**: Retrieve details of a user by their ID.
- **Path Parameters**:

  - **id**:The unique ID of the user.

- **Response**:
  - **200 OK**:
    ```json
    {
      "name": "string",
      "email": "string",
      "password": "hashedPassword"
    }
    ```
  - **404 Not Found**: If the user with the given ID does not exist.

### Transactions

#### POST `/api/transactions`

- **Description**: Create a new transaction.
- **Request Body**:

  ```json
  {
    "amount": "number",
    "transaction_type": "string",
    "user": "userId"
  }
  ```

  - **amount**:The transaction amount.
  - **transaction_type**:The type of the transaction (e.g., "deposit", "withdrawal").
  - **user**:The user's ID associated with the transaction.

- **Response**:
  - **201 Created**:
    ```json
    {
      "amount": "number",
      "transaction_type": "string",
      "user": "userId",
      "_id": "transactionId"
    }
    ```
  - **400 Bad Request**: If any required fields are missing.

#### GET `/api/transactions`

- **Description**: Retrieve all transactions for a user.
- **Query Parameters**:

  - **user_id**:The user ID for which to retrieve the transactions.

- **Response**:
  - **200 OK**:
    ```json
    {
     "transactions": [
        {
        "amount": "number",
        "transaction_type": "string",
        "user": "userId",
        "_id": "transactionId"
        },
        ...
    ]
    }
    ```
  - **500 Internal Server Error**: If an error occurs while fetching the transactions.

#### GET `/api/transactions/:transaction_id`

- **Description**: Retrieve a specific transaction by ID.
- **Path Parameters**:

  - **transaction_id**:The unique ID of the transaction.

- **Response**:
  - **200 OK**:
    ```json
    {
      "amount": "number",
      "transaction_type": "string",
      "user": "userId",
      "_id": "transactionId"
    }
    ```
  - **404 Not Found**: If the transaction with the given ID does not exist.

#### PUT `/api/transactions/:transaction_id`

- **Description**: Update the status of a transaction.
- **Path Parameters**:

  - **transaction_id**:The unique ID of the transaction to update.

- **Request Body**:

  ```json
  {
    "status": "string"
  }
  ```

  - **status**:The new status of the transaction (e.g., "completed", "pending").

- **Response**:
  - **200 OK**:
    ```json
    {
      "amount": "number",
      "transaction_type": "string",
      "user": "userId",
      "status": "string",
      "_id": "transactionId"
    }
    ```
  - **400 Bad Request**: If any required fields are missing.
  - **404 Not Found**: If the transaction with the given ID does not exist.
