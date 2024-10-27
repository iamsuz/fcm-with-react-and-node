# FCM integration with React and Node

This repo is an example of How to integrate firebase cloud messaging with Node to send push notification to any type of client

## How to integrate FCM with Node

For detailed instruction of how to create a firebase project and firebase admin token please visit []

### Fork/Clone this repo

```bash
git clone https://github.com/iamsuz/fcm-with-react-and-node.git
```

### Navigate to the server

```bash
cd server
```

### Installation

```bash
npm install
```

Now, replace the client token at the `routes/users.js`

```javascript
const registrationToken = "REGISTRATION_TOKEN"; // Replace REGISTRATION_TOKEN with your client token
```

### Start the server

```bash
npm run start
```

Open a browser and type [http://localhost:3000/users/user-action](http://localhost:3000/users/user-action)

Check you client and you should receive the notification
