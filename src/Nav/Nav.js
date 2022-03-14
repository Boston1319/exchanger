import React from "react";
import "./Nav.css";
import {Link} from 'react-router-dom';

class Nav extends React.Component {

  render() {
    return (
      <div className="header-nav">
        <div className="container">
          <nav>
            <ul>
              <li>
              <Link to="/">Главная</Link>

              </li>
              <li>
              <Link to="/about">О нас</Link>
              </li>
              {/* <li>
                <a href="#">Контакты</a>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Nav;
