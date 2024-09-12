import { NavBarProps } from "../models/Navbar";
import { Navbar } from "./Navbar";

export function Header() {
  const navData: NavBarProps = {
    items: [
      { label: 'Home', url: '/' },
      { label: 'About', url: '/about' },
      { label: 'Skills', url: '/skills' },
      { label: 'Hobbies', url: '/hobbies' },
      { label: 'Qualification', url: '/qualification' },
      { label: 'Work', url: '/work' },
    ],
    toggleNavBar: () => { }
  };

  const toggleNavBar = () => {
    document.getElementById("nav")!.classList.toggle("hide")
    document.getElementById("menu")!.classList.toggle("active")
    document.getElementsByTagName("body")[0].classList.toggle("no-scroll")
  }

  return (
    <header className="center-container" id="header">
      <div className="container">
        <div className="side-header center-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ff5925"
            className="svg-shadow">
            <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"></path>
          </svg>
          <span id="logo-text">Andrés Peraza</span>
        </div>
        <button id="menu" className="menu" aria-labelledby="label" onClick={toggleNavBar}>
          <div></div>
          <div></div>
          <div></div>
        </button>
        <div id="label">Button</div>
        <Navbar items={navData.items}  toggleNavBar={toggleNavBar}/>
      </div>
    </header>
  );
}