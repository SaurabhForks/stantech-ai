import { Link } from "react-router";
import { LOGO } from "../../utils/const";
import classes from "./Header.module.scss";
const Header = () => {
  return (
    <div className={`${classes.header} shadow `}>
      <div className="container">
        <div className="flex justify-between pt-4 pb-4 items-center">
          <div className="logo w-50">
            <img src={LOGO} alt="" />
          </div>
          <ul className={`${classes.nav} flex justify-between`}>
            <li className="nav-item pr-5">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item pr-5">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item pr-5">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
