// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "<YOUR_API_KEY>",
	authDomain: "<YOUR_AUTH_DOMAIN>",
	projectId: "<YOUR_PROJECT_ID>",
	storageBucket: "<YOUR_STORAGE_BUCKET>",
	messagingSenderId: "<YOUR_MESSAGING_SENDER_ID>",
	appId: "<YOUR_APP_ID>",
	measurementId: "<YOUR_MEASUREMENT_ID>",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const messaging = getMessaging(app);

export const getTokens = async (setTokenFound) => {
	//VAPID_KEY is the Web push certificates key pair
	return getToken(messaging, {
		vapidKey:
			"BHd459j5fmH6p6LtA9CGO4JJ4MOoX408CV3M1AVyXGxiE4oojixLmCavrBNCFGntswQPfg2giwT7JyH0-SoxjqA",
	})
		.then((currentToken) => {
			if (currentToken) {
				console.log("current token for client: ", currentToken);
				setTokenFound(true);
				// Track the token -> client mapping, by sending to backend server
				// show on the UI that permission is secured
			} else {
				console.log(
					"No registration token available. Request permission to generate one."
				);
				setTokenFound(false);
				// shows on the UI that permission is required
			}
		})
		.catch((err) => {
			console.log("An error occurred while retrieving token. ", err);
			// catch error while creating client token
		});
};

export const onMessageListener = () => {
	return new Promise((resolve) => {
		onMessage(messaging, (payload) => {
			console.log("payload", payload);
			resolve(payload);
		});
	});
};
