import { useState } from "react";
import desktopLogo from "./assets/logos/higher-lower-desktop.svg";
import "./App.css";
import MenuScreen from "./screens/menuScreen/MenuScreen";

const logo = {
	desktop: desktopLogo,
};

function App() {
	return (
		<div className="App">
			<MenuScreen />
		</div>
	);
}

export default App;
