import React, { useContext, useEffect, useState } from "react";
import "../style/nav.scss";
import { DataContext } from "../Context/DataContext";
import { gaya } from "../style/style";
import { LinkGan } from "../Routes/router";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { random } = useContext(DataContext);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  function handleScroll(event) {
    if (window.scrollY === 0 && scrolled === true) {
      setScrolled(false);
    } else if (window.scrollY !== 0 && scrolled !== true) {
      setScrolled(true);
    }
  }

  return (
    <LinkGan>
      <nav
        className={`navbar navbar-expand-lg navbar-light  bg-white sticky-top`}
        style={{
          transition: ".2s",
          boxShadow: scrolled ? "0px 5px 10px #888888" : "none"
        }}
      >
        <div className="container">
          <Link
            className="navbar-brand"
            style={{ color: gaya.darklate }}
            to="/ngapalkeun"
          />
          <button
            className="navbar-toggler border-0"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav m-auto">
              <li className="nav-item ">
                <Link className="nav-link " to="/ngapalkeun">
                  Input
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={random.length < 1 ? `/ngapalkeun` : `/ngapalkeun/tebak`}
                >
                  Mulai
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </LinkGan>
  );
};
