const redis = require('redis');
const express = require('express');
const fs = require('fs');
const app = express();

const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Create a Redis client
const client = redis.createClient({
  url: 'redis://localhost:6379'
});

// Handle connection errors
client.on('error', (err) => {
  console.error('Redis error:', err);
});

// Connect to Redis
client.connect().catch(console.error);

// Load user data from users.json
const users = JSON.parse(fs.readFileSync('users.json', 'utf8'));

// Middleware to check cache
const checkCache = async (req, res, next) => {
  const userId = req.params.id;

  try {
    const data = await client.get(userId);
    if (data != null) {
      res.json({ status: 1, source: 'cache', data: JSON.parse(data) });
    } else {
      next();
    }
  } catch (err) {
    console.error('Redis get error:', err);
    res.status(500).json({ status: 0, error: 'Internal Server Error' });
  }
};

// Endpoint to get user data
app.get('/user/:id', checkCache, async (req, res) => {
  const userId = req.params.id;
  const user = users.find(u => u.id == userId);

  if (user) {
    try {
      // Store the data in Redis
      await client.setEx(userId, 60, JSON.stringify(user));
      res.json({ status: 1, source: 'database', data: user });
    } catch (err) {
      console.error('Redis set error:', err);
      res.status(500).json({ status: 0, error: 'Internal Server Error' });
    }
  } else {
    res.status(404).json({ status: 0, error: 'User not found' });
  }
});

// Endpoint to inspect cached data
app.get('/cache', async (req, res) => {
  try {
    const keys = await client.keys('*');
    if (keys.length === 0) {
      res.json({ status: 1, message: 'No keys found' });
      return;
    }

    const values = await client.mGet(keys);
    const cacheData = keys.reduce((acc, key, index) => {
      acc[key] = JSON.parse(values[index]);
      return acc;
    }, {});

    res.json({ status: 1, data: cacheData });
  } catch (err) {
    console.error('Redis keys/mget error:', err);
    res.status(500).json({ status: 0, error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
