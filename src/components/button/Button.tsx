import React from "react";

type ButtonProps = {
	className?: string;
	text?: string;
	rightIcon?: any;
	leftIcon?: any;
	onClick?: () => void;
};

function Button(props: ButtonProps) {
	const { className, text, rightIcon, leftIcon, onClick } = props;

	return (
		<div
			className={`button ${className} ${
				onClick !== undefined ? "cursor-pointer" : ""
			}`}
			onClick={onClick}
		>
			{leftIcon !== undefined && leftIcon !== null ? (
				<span className="left-icon">
					<img className="icon-image" src={leftIcon} />
				</span>
			) : null}
			{text}
			{rightIcon !== undefined && rightIcon !== null ? (
				<span className="right-icon">
					<img className="icon-image" src={rightIcon} />
				</span>
			) : null}
		</div>
	);
}

export default Button;
