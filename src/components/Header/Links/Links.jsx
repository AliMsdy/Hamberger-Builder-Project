import React from "react";
import Logo from "../Logo/Logo";
import styles from "./Links.module.css";
import Overlay from "../../UI/Overlay/Overlay";
import { NavLink } from "react-router-dom";

function Links({ shouldMenuShown, closeMenu }) {
  let { nav, links, open, close } = styles;

  return (
    <>
      <nav className={`${nav} ${shouldMenuShown ? open : close}`}>
        <Logo shouldShown={true} />
        <div className={links}>
          <ul>
            <li>
              <NavLink to="/" exact activeClassName={styles.active}>
                Burger Builder
              </NavLink>
            </li>
            <li>
              <NavLink to="/orders" activeClassName={styles.active}>
                Orders
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      {shouldMenuShown ? <Overlay clickHandler={closeMenu} /> : null}
    </>
  );
}

export default Links;
