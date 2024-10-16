import "./App.css";
import { useState } from "react";
import { Button, Toast } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./firebase.js";

function App() {
	const [show, setShow] = useState(false);

	return (
		<div className="App">
			<Toast
				onClose={() => setShow(false)}
				show={show}
				delay={3000}
				autohide
				animation
				style={{
					position: "absolute",
					top: 20,
					right: 20,
				}}
			>
				<Toast.Header>
					<img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
					<strong className="mr-auto">Notification</strong>
					<small>5 mins ago</small>
				</Toast.Header>
				<Toast.Body>This will give us the Notification details</Toast.Body>
			</Toast>
			<header className="App-header">
				<Button onClick={() => setShow(true)}>Show Toast</Button>
			</header>
		</div>
	);
}

export default App;
