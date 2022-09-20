/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

//Stateless functional component
const NavBar = ({ totalProducts, wishlistCount }) => {
  return (
    <React.Fragment>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <a
            className="navbar-brand text-warning text-monospace"
            href="https://shrinathbhegade.github.io/FlowersCart-React/"
          >
            Flowers Cart
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  title="Total products you are buying."
                >
                  Items in Cart :{" "}
                  <span className="badge badge-pill badge-secondary">
                    {totalProducts}
                  </span>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" title="Your chosen products." href="#">
                  Wishlist <span className="sr-only">(current)</span>
                  <span className="badge badge-pill badge-secondary">
                    {wishlistCount}
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  title="Knows Knockout,.Net,Sql server,c#,MVC,web api and much more..@be_shree_ on instagram"
                  href="https://www.linkedin.com/in/shrinath-bhegade-03996977"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  tooltip="New features will be added soon."
                  href="#"
                >
                  Coming Soon
                </a>
              </li>
            </ul>
            <form className="form-inline mt-2 mt-md-0">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </header>
      <main></main>
    </React.Fragment>
  );
};
// class NavBar extends Component {
//   state = {};

//   render() {

//     );
//   }
// }

export default NavBar;
