import React, { useState } from "react";
import styles from "./Header.module.css";

import Logo from "./Logo/Logo";
import Links from "./Links/Links";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

function Header() {
  let [isMenuOpen, SetMenuStatus] = useState(false);

  function CloseMenuHandler() {
    SetMenuStatus(false);
  }

  function OpenMenuHandler() {
    SetMenuStatus(true);
  }

  return (
    <>
      <header className={styles.container}>
        <BurgerMenu clickHandler={OpenMenuHandler} />
        <Links shouldMenuShown={isMenuOpen} closeMenu={CloseMenuHandler} />
        <Logo shouldShown={false} />
      </header>
    </>
  );
}

export default Header;
