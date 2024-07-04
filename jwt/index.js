const express = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const SECRET_KEY = "RandomSecret";

// Middleware to parse
app.use(express.json());

// Dummy user data
const users = [
  {
    id: 1,
    username: "testuser",
    password: "password",
  },
];

// Login route to authenticate user and generate token
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: "1h" });
  res.json({ token });
});

// Middleware to verify token
const verifyToken = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(403).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.userId = decoded.id;
    next();
  } catch (err) {
    res.status(401).json({ message: "Unauthorized" });
  }
};

// Protected route
app.get("/protected", verifyToken, (req, res) => {
  res.json({ message: "This is a protected route" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
