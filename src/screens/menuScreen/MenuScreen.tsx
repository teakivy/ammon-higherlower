import React, { useEffect } from "react";
import Chip from "../../components/chip/Chip";
import DropDown from "../../components/dropdown/Dropdown";
import translations from "../../core/Translations";
import "./MenuScreen.css";

import ControllerIcon from "../../assets/icons/controller.svg";
import Heart from "../../assets/icons/heart.svg";
import HigherLower from "../../assets/logos/higher-lower-desktop.svg";
import RobloxLogo from "../../assets/logos/roblox-desktop.svg";
import cookie from "react-cookies";
import { Scene } from "../../App";

const CE = {
	path: "/",
	expires: new Date(2040, 1, 1),
};

function MenuScreen(props: { changeScene: (scene: Scene) => void }) {
	const [selectedEdition, setSelectedEdition] =
		React.useState("YouTube Edition");

	const [highScore, setHighScore] = React.useState(0);
	const [hearts, setHearts] = React.useState(0);

	useEffect(() => {
		if (cookie.load("hasPlayed") != 1) {
			cookie.save("hasPlayed", 0, CE);
			cookie.save("highScore", 0, CE);
			cookie.save("hearts", 3, CE);
		}

		setHighScore(cookie.load("highScore"));
		setHearts(cookie.load("hearts"));
	}, []);

	return (
		<div className={`menu-screen`}>
			<div className="menu-screen-container">
				<div className="menu-options-container">
					<span className="highscore-container">
						<Chip
							text={translations.menu.high_score.replace(
								"{score}",
								highScore
							)}
							leftIcon={ControllerIcon}
						/>
					</span>
					<span className="edition-container">
						{/* <Chip
							text={translations.menu.editions.youtube}
							rightIcon={DropDown}
							onClick={() => {}}
						/> */}
						<DropDown
							options={translations.menu.avaliableEditions.map(
								(name: string) =>
									translations.menu.editions[name]
							)}
							selected={selectedEdition}
							onChange={(option) => setSelectedEdition(option)}
						/>
					</span>
				</div>
				<div className="menu-title-container">
					<img className="higher-lower-title" src={HigherLower} />
					<img
						src={RobloxLogo}
						alt="Roblox"
						className="roblox-title"
					/>
				</div>
				<div className="menu-play-container">
					<button
						className="play-button"
						onClick={() => {
							props.changeScene(Scene.InGame);
						}}
					>
						<p className="play-text">{translations.menu.play}</p>
					</button>
				</div>
				<div className="menu-footer-container">
					<span className="hearts-container">
						<Chip
							text={hearts.toString()}
							leftIcon={Heart}
							onClick={() => {}}
						/>
					</span>
				</div>
				<div className="menu-credits-container">
					<span className="credits">
						{translations.menu.credits.replace("{author}", "")}
						<a
							className="url hover-underline-animation"
							href={translations.menu.author.url}
							target="_blank"
						>
							{translations.menu.author.name}
						</a>
					</span>
				</div>
			</div>
		</div>
	);
}

export default MenuScreen;
