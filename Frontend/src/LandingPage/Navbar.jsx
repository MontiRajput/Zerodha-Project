import "./Outer.css";
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img src="Media/img/logo.svg" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/signup">
                Signup
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/product">
                Product
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="pricing">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/support">
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
