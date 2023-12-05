import "./navMenu.css";
import { images } from "../constants"
import { FiShoppingCart } from "react-icons/fi";
import { RxCaretDown } from "react-icons/rx";

const NavMenu = () => {
  return (
    <section className="nav_container">
        <div className="logo_container">
            <img src={images.Logo} alt="Mitiget Logo" />
        </div>
        <div className="menu_wrapper">
            <nav className="menu_item">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Events</a>
                </li>
                <li>
                  <a href="#">Course Catalogue <span className="arrow_down"><RxCaretDown/></span></a>
                </li>
                <li>
                  <a href="#">Resources <span className="arrow_down"><RxCaretDown/></span></a>
                </li>
                <li>
                  <a href="#">Help <span className="arrow_down"><RxCaretDown/></span></a>
                </li>
                <li>
                  <a href="#">Cart <span className="cart"><FiShoppingCart /> </span></a>
                </li>
              </ul>
            </nav>
        </div>
        <div className="enrol_btn_wrapper">
            <button className="enrol_btn">Enroll</button>
        </div>
    </section>
  )
}

export default NavMenu;