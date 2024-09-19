import './Navstyles.css';
import Logo from "./Logo.svg"

function Nav() {
  return (
    <>
      <nav>
        <div class="container">
          <a class="navlogo" href="./" role="img">
            <img src={Logo} alt="Little lemon logo"/>
          </a>
          <div>
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
        </div>
      </nav>
    </>
  );
}

export default Nav;