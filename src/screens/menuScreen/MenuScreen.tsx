import React from "react";
import Chip from "../../components/chip/Chip";
import translations, { getText } from "../../core/Translations";
import "./MenuScreen.css";

import ControllerIcon from "../../assets/icons/controller.svg";
import DropDown from "../../assets/icons/dropdown.svg";
import Heart from "../../assets/icons/heart.svg";
import HigherLower from "../../assets/logos/higher-lower-desktop.svg";
import RobloxLogo from "../../assets/logos/roblox-desktop.svg";

import styled, { keyframes } from "styled-components";
import { tada } from "react-animations";

const tadaAnimation = keyframes`${tada}`;

const TadaDiv = styled.div`
	animation: 4s ${tadaAnimation} infinite;
`;

function MenuScreen() {
	return (
		<div className="menu-screen">
			<div className="menu-screen-container">
				<div className="menu-options-container">
					<span className="highscore-container">
						<Chip
							text={translations.menu.high_score.replace(
								"{score}",
								12
							)}
							leftIcon={ControllerIcon}
						/>
					</span>
					<span className="edition-container">
						<Chip
							text={translations.menu.editions.youtube}
							rightIcon={DropDown}
							onClick={() => {}}
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
					<button className="play-button">
						<p className="play-text">Play</p>
					</button>
				</div>
				<div className="menu-footer-container">
					<span className="hearts-container">
						<Chip text={"3"} leftIcon={Heart} onClick={() => {}} />
					</span>
				</div>
				<div className="menu-credits-container">
					<span className="credits">
						{translations.menu.credits.replace("{author}", "")}
						<a
							className="url hover-underline-animation"
							href="https://twitter.com/TeakIvyYT"
							target="_blank"
						>
							@TeakIvyYT
						</a>
					</span>
				</div>
			</div>
		</div>
	);
}

export default MenuScreen;
