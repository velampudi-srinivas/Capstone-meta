import './Navstyles.css';
import Logo from "./Logo.svg"

function Nav() {
  return (
    <>
      <nav>
        <div className="container">
          <div className='nav-logo'>
            <a className="navlogo" href="./" role="img">
              <img src={Logo} alt="Little lemon logo" />
            </a>
          </div>
          <div className='nav-links'>
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
        </div>
      </nav>
    </>
  );
}

export default Nav;