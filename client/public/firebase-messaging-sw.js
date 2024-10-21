// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
	apiKey: "AIzaSyDKfwh2TqIiUiWTP4FK1S_rRgWRJdHVzWo",
	authDomain: "fcm-token-11c3d.firebaseapp.com",
	projectId: "fcm-token-11c3d",
	storageBucket: "fcm-token-11c3d.firebasestorage.app",
	messagingSenderId: "381612045112",
	appId: "1:381612045112:web:007176834a1100e122c7cd",
	measurementId: "G-QL7P4DBWDJ",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
	console.log("Received background message ", payload);
	// Customize notification here
	const notificationTitle = payload.notification.title;
	const notificationOptions = {
		body: payload.notification.body,
	};

	self.registration.showNotification(notificationTitle, notificationOptions);
});
