// Imports and configurations
const express = require("express");
const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");
dotenv.config();

// app settings
const app = express();

const PORT = process.env.PORT || 3000;
const SECRET_KEY = process.env.SECRET_KEY || "randomSecret";

// Middleware configuration
app.use(express.json());

// Dummy user data
const users = [{ id: 1, username: "testUser", password: "testPassword" }];

// login route
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (!user) {
    return res.status(401).json({ message: "Invalid username or password" });
  } else {
    const token = jwt.sign({ id: user.id }, SECRET_KEY, {
      expiresIn: "1h",
    });
    return res.json({ token });
  }
});

// // Middleware to verify token  without ?. (Optional Chaining):
//  const verifyToken = (req,res) => {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1];
//   if (token == null) return res.sendStatus(401);
//   jwt.verify(token, SECRET_KEY, (err, user) => {
//     if (err) return res.sendStatus(403);
//     req.user = user;
//     next();
//   });
//  }

// Middleware to verify token  with ?. (Optional Chaining):
const verifyToken = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer  ", "");
  if (!token) {
    return res.status(403).json({ message: "No Token Provided" });
  }
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized Token" });
  }
};

// .get protectedrouter
app.get("/protected", verifyToken, (req, res) => {
  res.json({ message: "You are In Protected Route" });
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
