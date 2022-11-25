import { useState } from "react";
import desktopLogo from "./assets/logos/higher-lower-desktop.svg";
import "./App.css";
import MenuScreen from "./screens/menuScreen/MenuScreen";

const logo = {
	desktop: desktopLogo,
};

export enum Scene {
	Menu,
	InGame,
	GameOver,
}

function App() {
	const [scene, setScene] = useState(Scene.Menu);
	return (
		<div className="App">
			{(() => {
				switch (scene) {
					case Scene.Menu:
						return <MenuScreen changeScene={setScene} />;
					case Scene.InGame:
						return null;
					case Scene.GameOver:
						return null;
				}
			})()}
		</div>
	);
}

export default App;
