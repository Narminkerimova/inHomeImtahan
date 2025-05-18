import { Link } from "react-router";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { BiLogoTelegram } from "react-icons/bi";
import { FaCartShopping } from "react-icons/fa6";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { BasketContext } from "../../context/BasketProvider";
import { useContext } from "react";
import "./style.css"
function Header() {
  const { basket } = useContext(BasketContext)
  return (
    <header>
      <nav className="top_nav">
        <div className="top_box">
          <FaPhoneAlt /> +1235 2355 98
        </div>
        <div className="top_box">
          <BiLogoTelegram /> YOUREMAIL@EMAIL.COM
        </div>
        <div className="top_box">
          3-5 Business days delivery & Free Returns
        </div>
      </nav>
      <nav className="bottom_nav">
        <div className="logo">vegefoods</div>
        <div className="nav_links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
            <li>
              <Link to="/adminadd">Admin Add</Link>
            </li>
            <li>
              <Link to="/basket"><FaCartShopping  className="basketIcon"/></Link>  [{basket.length}]
            </li>
            <li>
              <Link to="/wishlist"><FaHeartCirclePlus className="favoIcon"/></Link>
            </li>
          </ul>
        </div>
        <div className="nav_hidden">
          <IoMdMenu className="menuNavIcon"/> MENU
        </div>

      </nav>
    </header>

  )
}

export default Header