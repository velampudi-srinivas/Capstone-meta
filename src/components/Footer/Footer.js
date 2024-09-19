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
              <li class="nav-item">
                <a class="nav-link" href="./">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./">Menu</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
          <ul>
              <li class="nav-item">
                <a class="nav-link" href="./">Reservations</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./">Order Online</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./">Login</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
          <ul>
              <li class="nav-item">
                <a class="nav-link" href="./">Offers</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./">Contact us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./">Stores</a>
              </li>
            </ul>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;