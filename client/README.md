# Firebase Cloud Messaging (FCM) Integration with React

This project demonstrates how to integrate Firebase Cloud Messaging (FCM) with a React app using **Vite** and **TypeScript**. You can use this template to set up notifications in your React project.

## Prerequisites

- Node.js (v20.x or higher)
- A Firebase project (make sure to enable Firebase Cloud Messaging)

## Project Setup

### 1. Clone the repository

```bash
git clone https://github.com/iamsuz/fcm-with-react-and-node.git
cd client
```

### 2. Install dependencies

```bash
npm install
```

### 3. Initialize Firebase

- Go to Firebase Console.
- Create a new Firebase project (or use an existing one).
- Enable Firebase Cloud Messaging and obtain your VAPID Key from the Cloud Messaging settings.

### 4. Update Firebase Configuration

- In your `src/firebase.js` file, replace the placeholders for the Firebase configuration with the values from your Firebase project.

```Javascript
const firebaseConfig = {
    apiKey: "<YOUR_API_KEY>",
    authDomain: "<YOUR_AUTH_DOMAIN>",
    projectId: "<YOUR_PROJECT_ID>",
    storageBucket: "<YOUR_STORAGE_BUCKET>",
    messagingSenderId: "<YOUR_MESSAGING_SENDER_ID>",
    appId: "<YOUR_APP_ID>",
    measurementId: "<YOUR_MEASUREMENT_ID>"
};
```

### 5. Start the Development Server

```bash
npm run dev
```

This will start the application at http://localhost:5173.

### 6. Test Notifications

- Make sure the browser is asking for permission to receive notifications. Check the console for the device token once permissions are granted.
- You can use Firebase Console to send a test notification to your app.

### 7. Deployment

For production, you'll need to host the app using HTTPS to enable Firebase messaging. You can use Firebase Hosting to deploy your app:

```bash
npm install -g firebase-tools
firebase login
firebase init
firebase deploy
```
