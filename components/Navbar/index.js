import style from "./navbar.module.css";
import Link from "next/link";
import { items } from "./items";
import { useState } from "react";

export default function navbar() {
  const [menuStatus, setMenuStatus] = useState(false);
  const [cancelStatus, setCancelStatus] = useState(false);

  const handleMenuOpen = () => {
    if (menuStatus) {
      setMenuStatus(false);
      setCancelStatus(false);
    } else {
      setMenuStatus(true);
      setCancelStatus(true);
    }
  };

  return (
    <header className={style.top}>
      <section>
        <nav
          className={`bg-blue-900 ${style.navbar} ${
            (menuStatus && style.show) || (cancelStatus && style.show)
          } `}
        >
          <div className={style.content}>
            <div className={style.logo_navbar}>
              <img src="visol2.png" className={style.navbarLogo} />
              <h1>Visol</h1>
            </div>
            <ul className={style.menuList}>
              <div
                className={`${style.icon} ${style.cancelBtn}`}
                onClick={handleMenuOpen}
              >
                x
              </div>
              {items.map((item, index) => {
                return (
                  <li key={index}>
                    <Link href={item.url}>
                      <a className={item.cName}>{item.title}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className={style.icon} onClick={handleMenuOpen}>
              <span>
                <div className={`${style.hamburger} ${style.hamburger3dx}`}>
                  <div className={style.hamburgerbox}>
                    <div className={style.hamburgerinner}></div>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </nav>
      </section>
    </header>
  );
}
