import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link href="/" className='navbar-brand'>conduit</Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            {/* <!-- Add "active" class when you're on that page" --> */}
            <Link className="nav-link active" href="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/Create"> <i className="ion-compose"></i>&nbsp;New Article</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/Settings"> <i className="ion-gear-a"></i>&nbsp;Settings</Link>
          </li>
          {/* 나중에 server side 에서 처리 못할 수도 있음. */}
          <li className="nav-item">
            <Link className="nav-link" href="Login">Sign in</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="Register">Sign up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;