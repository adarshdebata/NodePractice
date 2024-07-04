const pool = require("./db");

const fetchCustomerById = async (customerId) => {
  const query = "SELECT * FROM customers WHERE id = $1";
  const values = [customerId];

  try {
    const res = await pool.query(query, values);
    console.log("Customer by ID:", res.rows);
  } catch (err) {
    console.error(err);
  }
};

const insertCustomer = async (name, age, address) => {
  const query =
    "INSERT INTO customers (name, age, address) VALUES ($1, $2, $3)";
  const values = [name, age, address];

  try {
    const res = await pool.query(query, values);
    console.log("Customer added:", res.rowCount);
  } catch (err) {
    console.error(err);
  }
};

const updateCustomer = async (customerId, name, age, address) => {
  const query =
    "UPDATE customers SET name = $1, age = $2, address = $3 WHERE id = $4";
  const values = [name, age, address, customerId];

  try {
    const res = await pool.query(query, values);
    console.log("Customer updated:", res.rowCount);
  } catch (err) {
    console.error(err);
  }
};

const deleteCustomer = async (customerId) => {
  const query = "DELETE FROM customers WHERE id = $1";
  const values = [customerId];

  try {
    const res = await pool.query(query, values);
    console.log("Customer deleted:", res.rowCount);
  } catch (err) {
    console.error(err);
  }
};

// Execute examples
const executeExamples = async () => {
    await insertCustomer("Adarsh Kumar", 25, "k7-555");
  await fetchCustomerById(2);
  await updateCustomer(2, "Adarsh Kumar", 23, "k7-523");
  await fetchCustomerById(2);
    await deleteCustomer();
};

executeExamples().finally(() => pool.end());
