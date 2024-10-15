const http = require("http");
const express = require("express");
const queue = require("./services/queue");
const app = express();

const admin = require("firebase-admin");
const serviceAccount = require("./config/google-cloud-service-account.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
});

const router = express.Router();

router.get("/", (req, res) => {
	res.send("Hello World");
});

app.use(router);

const server = http.createServer(app);

server.on("request", (req, res) => {
	console.log("Request received");
});

// We are not mentioning the host name here, so it will listen on all the available network interfaces
server.listen(3000, () => {
	console.log("Server is running on " + JSON.stringify(server.address().port));
});
