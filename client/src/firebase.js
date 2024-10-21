// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDKfwh2TqIiUiWTP4FK1S_rRgWRJdHVzWo",
	authDomain: "fcm-token-11c3d.firebaseapp.com",
	projectId: "fcm-token-11c3d",
	storageBucket: "fcm-token-11c3d.firebasestorage.app",
	messagingSenderId: "381612045112",
	appId: "1:381612045112:web:007176834a1100e122c7cd",
	measurementId: "G-QL7P4DBWDJ",
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
