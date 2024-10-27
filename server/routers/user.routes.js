const express = require("express");
const messaging = require("../services/firebase");
const router = express.Router();

router.get("/user-action", (req, res) => {
	// User request comes for specific action

	//Once the action is performed, we can send the notification to the user

	// Here we are sending a notification to the specif this user with mentioned token
	const registrationToken = "REGISTRATION_TOKEN";

	const data = {
		title: "Hello from the server",
		body: "This is a test notification",
	};

	const message = {
		notification: {
			title: data.title,
			body: data.body,
		},
		token: registrationToken,
	};
	messaging
		.send(message)
		.then((response) => {
			console.log("Successfully sent message:", response);
			res.send("Notification sent");
		})
		.catch((error) => {
			console.log("Error sending message:", error);
			res.send("Error sending notification");
		});
	// res.send("Send notifications");
});

module.exports = router;
