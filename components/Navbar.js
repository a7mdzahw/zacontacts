import Link from "next/link";

const Navbar = () => {
  const user = true;
  return (
    <nav className="navbar navbar-expand-md ">
      <div className="d-flex container">
        <Link href="/">
          <a className="navbar-brand">
            <i className="bi bi-person-square"></i> Contacts
          </a>
        </Link>

        <ul className="navbar-nav">
          {user ? (
            <>
              <li className="nav-item">
                <Link href="/contacts">
                  <a className="nav-link">
                    <i className="bi bi-people"></i> My Contacts
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/profile">
                  <a className="nav-link">
                    <i className="bi bi-person-badge"></i> Profile
                  </a>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link href="/register">
                  <a className="nav-link">
                    <i className="bi bi-person-plus"></i> Sign Up
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/login">
                  <a className="nav-link">
                    <i className="bi bi-person"></i> Login
                  </a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
