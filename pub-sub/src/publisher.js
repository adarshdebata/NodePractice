const express = require('express');
const redisClient = require('./redisClient');
const app = express();

app.use(express.json());

app.post('/publish', async (req, res) => {
  const { channel, message } = req.body;
  
  if (!channel || !message) {
    return res.status(400).send({ error: 'Channel and message are required' });
  }

  try {
    await redisClient.publish(channel, message);
    res.send({ message: 'Message published successfully' });
  } catch (error) {
    res.status(500).send({ error: 'Failed to publish message' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Publisher service running on port ${PORT}`);
});
