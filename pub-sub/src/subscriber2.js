const redisClient = require('./redisClient');

const subscribe = async (channel) => {
  try {
    // Create a duplicate client for subscribing
    const subscriber = redisClient.duplicate();
    await subscriber.connect();

    subscriber.on('error', (err) => {
      console.error('Redis subscriber error:', err);
    });

    subscriber.subscribe(channel, (message, channel) => {
      console.log(`${message} from ${channel}`);
    });

    console.log(`Subscriber 2 - Subscribed to channel: ${channel}\n`);
  } catch (error) {
    console.error('Subscriber 2 - Failed to subscribe:', error);
  }
};

const channel = process.argv[2] || 'default_channel';
subscribe(channel).catch(console.error);
