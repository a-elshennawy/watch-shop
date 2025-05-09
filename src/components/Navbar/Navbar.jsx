import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-router-dom";
import "./Navbar.css";
import "../../i18n";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export default function Navbar() {
  const [t, i18n] = useTranslation();

  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  const handleLangChange = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  };
  return (
    <>
      {/* offcanvas */}
      <div className="smallHeaderBar">
        <div className="logo ">
          <Link to={"/"}>
            <img src="imgs/logo.svg" alt="" />
          </Link>
        </div>
        <button
          className="btn offCanvTrigger"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      <div
        className="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            <Link to={"/"}>
              <img src="imgs/logo.svg" alt="" />
            </Link>
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="offcanvasList">
            <li className="offCanvItem">
              <Link className="offcanvLink" to={"/"}>
                {t("home")}
              </Link>
            </li>
            <li className="offCanvItem">
              <Link className="offcanvLink" to={"/login"}>
                {t("login")}
              </Link>
            </li>
            <li className="offCanvItem dropdown">
              <Link
                className="offcanvLink dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {t("contact")}
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    href="https://wa.me/201550089872?text=أنا%20عميل%20اون%20لاين"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} />
                    <span>{t("whatsapp")}</span>
                  </a>
                </li>
                <li>
                  <Link className="dropdown-item">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>elsokryaforwatches@gmail.com</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="offCanvItem dropend">
              <Link
                className="offcanvLink dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                to={"/shop"}
              >
                {t("shop")}
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to={"/men"}>
                    {t("men watches")}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={"/women"}>
                    {t("women watches")}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={"/young"}>
                    {t("young watches")}
                  </Link>
                </li>
              </ul>
            </li>
            <li className="offCanvItem dropdown">
              <Link
                className="offcanvLink dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {t("langauge")}
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleLangChange("en")}
                  >
                    {t("english")}
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleLangChange("ar")}
                  >
                    {t("arabic")}
                  </button>
                </li>
              </ul>
            </li>
          </div>
        </div>
      </div>

      {/* navbar */}
      <div className="navBar">
        <div className="container-fluid">
          <div className="navbarInner row">
            <div className="logo col-1">
              <Link to={"/"}>
                <img src="imgs/logo.svg" alt="" />
              </Link>
            </div>
            <div className="navList col-6">
              <li className="navItem">
                <Link className="navLink" to={"/"}>
                  {t("home")}
                </Link>
              </li>
              <li className="navItem">
                <Link className="navLink" to={"/login"}>
                  {t("login")}
                </Link>
              </li>
              <li className="navItem dropdown">
                <Link
                  className="navLink dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {t("contact")}
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://wa.me/201550089872?text=أنا%20عميل%20اون%20لاين"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faWhatsapp} />
                      <span>{t("whatsapp")}</span>
                    </a>
                  </li>
                  <li>
                    <Link className="dropdown-item">
                      <FontAwesomeIcon icon={faEnvelope} />
                      <span>elsokryaforwatches@gmail.com</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="navItem dropdown">
                <Link
                  className="navLink dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  to={"/shop"}
                >
                  {t("shop")}
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={"/men"}>
                      {t("men watches")}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/women"}>
                      {t("women watches")}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/young"}>
                      {t("young watches")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="navItem dropdown">
                <Link
                  className="navLink dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {t("langauge")}
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleLangChange("en")}
                    >
                      {t("english")}
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleLangChange("ar")}
                    >
                      {t("arabic")}
                    </button>
                  </li>
                </ul>
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
