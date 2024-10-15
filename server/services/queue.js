const Queue = require("bull");
const queue = new Queue("notification", {
	redis: {
		port: 6379,
		host: "localhost",
	},
});

module.exports = queue;
