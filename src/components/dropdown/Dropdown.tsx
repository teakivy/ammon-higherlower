import React from "react";
import translations from "../../core/Translations";
import Chip from "../chip/Chip";
import DropDown from "../../assets/icons/dropdown.svg";

import "./Dropdown.css";
function Dropdown(props: {
	options: string[];
	selected?: string;
	onChange?: (option: string) => void;
}) {
	let [open, setOpen] = React.useState(false);
	let [selected, setSelected] = React.useState(
		props.selected || props.options[0]
	);

	return (
		<div
			className="dropdown"
			style={{
				position: "relative",
				display: "inline-block",
			}}
		>
			<Chip
				text={selected}
				rightIcon={DropDown}
				onClick={() => setOpen(!open)}
			/>
			{open && (
				<div
					className="dropdown-content unselectable"
					style={{
						// display: "none",
						position: "absolute",
						backgroundColor: "white",
						width: "calc(100% - 30px)",
						marginTop: "10px",
						borderRadius: "25px",
						color: "black",
						minWidth: "160px",
						boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
						padding: "12px 16px",
						zIndex: 100,
					}}
				>
					{props.options.map((option) => (
						<div
							className="dropdown-item"
							onClick={() => {
								setSelected(option);
								setOpen(false);
								props.onChange?.(option);
							}}
						>
							{option}
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default Dropdown;
