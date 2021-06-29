const config = {
	BOT_TOKEN: process.env.BOT_TOKEN || 'CAN_ENTER_HERE_OR_USE_ENV_VARIABLES',
	CHANNEL_ID: process.env.BOT_CHANNEL_ID || '',
	PREFIX: process.env.BOT_PREFIX || '$'
};

module.exports = config;
