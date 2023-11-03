import './index.css'
import logo from '../../../public/logo.png'
import menu from '../../../public/menu.png'

export const Navbar = () => {
  return (
    <div className="NavContainer">
      <div className="mobileNavContainer">
        <div className="mobileLogoContainer">
          <img src={logo} alt="logo" className="mobileLogo" />
        </div>
        <div className="dropdown">
          <button className="dropbtn">
            <img src={menu} alt="menu" className="menuBtn" />
          </button>
          <div class="dropdown-content">
            <li>Explore</li>
            <li>Company</li>
            <li>support</li>
          </div>
        </div>
      </div>
      <div className="largeNavContainer">
        <div className="largeLogoContainer">
          <img src={logo} alt="logo" className="largeLogo" />
        </div>
        <div className="navItems">
          <li>Explore</li>
          <li>Company</li>
          <li>support</li>
        </div>
        <div className="signUpContainer">
          <h3 className="member">Become a member</h3>
          <button className="signInBtn">Sign In</button>
        </div>
      </div>
    </div>
  )
}
