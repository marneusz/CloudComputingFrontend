import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";

export default function Header() {
  const displayDesktop = () => {
    return <Toolbar>PronounceMe</Toolbar>;
  };
  
  return (
    <header>
      <AppBar position='static'>{displayDesktop()}</AppBar>
    </header>
  );
}