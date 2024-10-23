const admin = require("firebase-admin");
const serviceAccount = require("../config/google-cloud-service-account.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
});

module.exports = admin.messaging();
