import style from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  const items = [
    { to: "/", title: "Home" },
    { to: "/new-comment", title: "Now Comment" },
  ];

  return (
    <nav className={style.nav}>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.to}>
              <NavLink
                className={(e) => `${e.isActive ? `${style.activeLink}` : ""}`}
                to={item.to}
              >
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
