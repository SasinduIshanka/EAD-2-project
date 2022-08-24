import logo from "../logo.svg";
import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";


class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Student: [],
    };
  }

  render() {
    return (
      <div className="bg-black bg-opacity-50">
        <header >
          <nav className="navbar">
            <div className="align-items-center" style={{marginLeft:100}}>
              <h1 className="text-uppercase text-blue">Student Management System</h1>
            </div>
            <div style={{marginRight:100}}>
            <div>
              <ul>
                <li>
                  {" "}
                  <Link
                    className="navbar-brand nav-element mt-n1 text-black"
                    to={{ pathname: "/students" }}
                  >
                    {" "}
                    Our Students{" "}
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link
                    className="navbar-brand nav-element mt-n1 text-black"
                    to={{ pathname: "/add-student/_add" }}
                  >
                    {" "}
                    Register New Students{" "}
                  </Link>{" "}
                </li>
              </ul>
            </div>
            </div>
          </nav>
         
        </header>
      </div>
    );
  }
}
export default withRouter(HeaderComponent);
