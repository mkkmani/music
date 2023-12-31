import "./index.css";
import { Link } from "react-router-dom";
import { MdHome, MdOndemandVideo } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";

const Navbar = () => {
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
              <GiTeacher className="nav-link-icon" />
              <span className="nav-link-name">Class</span>
            </button>
          </Link>
          <Link to="/videos" className="link-item">
            <button type="button" className="nav-btn" aria-label="home">
              <MdOndemandVideo className="nav-link-icon" />
              <span className="nav-link-name">Videos</span>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
