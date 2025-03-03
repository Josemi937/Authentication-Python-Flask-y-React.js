import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container d-flex justify-content-center">
				<Link to="/" className="navbar-brand">
					<img
						src="https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/4G_LOGO_NEGRO-01__1_/original.png?1560209943"
						alt="4Geeks Academy"
						className="navbar-logo"
					/>
				</Link>
			</div>
		</nav>
	);
};
