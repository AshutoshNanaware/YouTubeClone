import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import MicIcon from "@mui/icons-material/Mic";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png"
          alt=""
        />
      </div>
      <div className="header__centre">
        <input type="text" placeholder="Search" />

        <SearchIcon className="header__SearchButton" />
      </div>

      <div className="header__right">
        <VideoCallIcon className="header__logo" />
        <AppsIcon className="header__logo" />
        <NotificationsIcon className="header__logo" />
        <Avatar className="header__logo" src="" />
      </div>
    </div>
  );
}

export default Header;
