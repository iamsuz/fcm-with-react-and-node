const http = require("http");
const express = require("express");
const app = express();
const userRoutes = require("./routers/user.routes");

const router = express.Router();

router.get("/", (req, res) => {
	res.send("Hello World");
});

app.use(router);
app.use("/users", userRoutes);

const server = http.createServer(app);

server.on("request", (req, res) => {
	console.log("Request received");
});

// We are not mentioning the host name here, so it will listen on all the available network interfaces
server.listen(3000, () => {
	console.log("Server is running on " + JSON.stringify(server.address().port));
});
