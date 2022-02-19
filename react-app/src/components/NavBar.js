import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
// import { ReactComponent as b } from "../assets/images/b.svg";
import b from "../assets/images/b.png";
import "./NavBar.css";
const NavBar = () => {
	const curr_user = useSelector((state) => state.session.user);
	return (
		<div className="nav--container">
			<nav>
				<div className="nav-left--wrapper">
					<NavLink to="/" exact={true} activeClassName="active">
						<div className="logo-b--container">
							<img src={b} alt="logo" className="logo-b" />
						</div>
					</NavLink>
					<div className="search--container">
						<label>
							<i className="fa-solid fa-magnifying-glass"></i>
							<input
								type="search"
								placeholder="Search Basebook"
							></input>
						</label>
					</div>
				</div>
				<div className="nav-mid--wrapper">
					<NavLink to={`/feed`} exact={true} activeClassName="active">
						{" "}
						<div className="nav-btn--container">
							<div className="nav-btn--wrapper">
								<i className="fa-solid fa-house"></i>
							</div>
						</div>
					</NavLink>
					<NavLink
						to={`/users`}
						exact={true}
						activeClassName="active"
					>
						{" "}
						<div className="nav-btn--container">
							<div className="nav-btn--wrapper">
								<i className="fa-solid fa-users"></i>
							</div>
						</div>
					</NavLink>
				</div>
				<div className="nav-end--wrapper">
					<NavLink
						to={`/users/${curr_user.id}`}
						exact={true}
						activeClassName="active--right"
					>
						<div className="user-profile-link--container">
							<div className="image-placeholder nav-user-image"></div>
							<div className="nav--user-name">
								{curr_user.first_name}
							</div>
						</div>
					</NavLink>

					<div className="user-menu--grid">
						<i className="fa-solid fa-ellipsis-vertical"></i>
						<i className="fa-solid fa-ellipsis-vertical"></i>
						<i className="fa-solid fa-ellipsis-vertical"></i>
					</div>
					<div className="user-menu--grid">
						<i className="fa-brands fa-facebook-messenger"></i>
					</div>
					<div className="user-menu--grid">
						<i className="fa-solid fa-bell"></i>
					</div>
					<div className="user-menu--drop">
						<i className="fa-solid fa-caret-down"></i>
					</div>
					{/* <LogoutButton /> */}
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
