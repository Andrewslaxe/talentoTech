import { NavBarProps } from "../models/Navbar";
import { NavLink } from "react-router-dom";

export function Navbar({ items, toggleNavBar }: NavBarProps) {
  const handleClick = () => {
    toggleNavBar()
  }

  return (
    <nav id="nav" className="nav hide">
      <ul className="nav-list">
        {
          items.map((item, idx) => (
            <li key={idx} className="nav-item">
              <NavLink
                to={item.url}
                className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}
                onClick={handleClick}
              >
                {item.label}
              </NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  );
}