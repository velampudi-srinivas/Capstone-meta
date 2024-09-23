import Logo from "./Logo.svg"
import "./footerstyles.css"
function Footer() {
  return (
    <>
      <footer>
        <section>
          <div className="footer-image">
            <a href="./" role="img">
              <img src={Logo} alt="Little lemon logo" />
            </a>
          </div>
          <div className="footer-links">
          <ul>
              <li className="nav-item">
                <a className="nav-link" href="./">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./">Menu</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
          <ul>
              <li className="nav-item">
                <a className="nav-link" href="./">Reservations</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./">Order Online</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./">Login</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
          <ul>
              <li className="nav-item">
                <a className="nav-link" href="./">Offers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./">Contact us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./">Stores</a>
              </li>
            </ul>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;