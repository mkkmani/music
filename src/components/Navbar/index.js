import "./index.css";
import { useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import { MdHome, MdOndemandVideo } from "react-icons/md";
import { IoMdLogOut, IoMdLogIn } from "react-icons/io";
import { FaGuitar } from "react-icons/fa";
import MusicContext from "../../musicContext/musicContext";

const Navbar = (props) => {
  const context = useContext(MusicContext);
  const { logStatus } = context;

  const goToLoginPage = () => {
    const { history } = props;
    history.push("/login");
  };

  const logoImg =
    "https://res.cloudinary.com/dj1bucjya/image/upload/v1683776530/music/idol_vhtgas.jpg";

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-items">
          <Link to="/" className="link-item">
            <div className="logo-name">
              <img src={logoImg} className="nav-logo" alt="logo" />
              <p className="nav-name">Sree Saraswathi Sangeetha Vidhyalayam</p>
              <p className="nav-name-sm">SSSV</p>
            </div>
          </Link>
        </div>
        <div className="nav-items">
          <Link to="/" className="link-item">
            <button type="button" className="nav-btn" aria-label="home">
              <MdHome className="nav-link-icon" />
              <span className="nav-link-name">Home</span>
            </button>
          </Link>
          <Link to="/instruments" className="link-item">
            <button type="button" className="nav-btn" aria-label="home">
              <FaGuitar className="nav-link-icon" />
              <span className="nav-link-name">Instruments</span>
            </button>
          </Link>
          <Link to="/videos" className="link-item">
            <button type="button" className="nav-btn" aria-label="home">
              <MdOndemandVideo className="nav-link-icon" />
              <span className="nav-link-name">Videos</span>
            </button>
          </Link>

          <button
            type="button"
            className="nav-login-btn"
            aria-label="login button"
            onClick={goToLoginPage}
          >
            <div className="log-btn-icons">
              {logStatus ? (
                <IoMdLogOut className="nav-link-icon" />
              ) : (
                <IoMdLogIn className="nav-link-icon" />
              )}
            </div>

            <div className="log-btn-text">
              {logStatus ? (
                <span className="nav-link-name">Logout</span>
              ) : (
                <span className="nav-link-name">Login</span>
              )}
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
