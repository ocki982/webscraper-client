import "./Header.scss";
import React from "react";
import logo from "../../assets/images/IRS-Logo.svg";
import charities from "../../assets/images/fa5-hands-helping.png"
import tax from "../../assets/images/fa5-book.png"
import flag from "../../assets/images/official-site-flag.png"

const Header = () => {
  return (
    <div>
        <div className="official">
            <img className="official__flag" src={flag} alt="flag"/>
            <p className="official__text">An official website of the United States Government</p>
        </div>
      <nav className="header">
        <img src={logo} alt="IRS" className="header__logo" />
        <ul className="header__list">
          <li className="header__list--cat">Help</li>
          <li className="header__list--cat">News</li>
          <li className="header__list--cat">English</li>
          <li className="header__list--cat"><img className="header__list--charities" src={charities} alt="charities"/>Charities & Nonprofits</li>
          <li className="header__list--cat header__list--tax"><img className="header__list--tax-image" src={tax} alt="tax"/>Tax Pros</li>
        </ul>
      </nav>
      <div className="subHeader">
        <ul className="subHeader__list">
            <li className="subHeader__list--cat">File</li>
            <li className="subHeader__list--cat">Pay</li>
            <li className="subHeader__list--cat">Refunds</li>
            <li className="subHeader__list--cat">Credits & Deductions</li>
            <li className="subHeader__list--cat">Forms & Instructions</li>
        </ul>
        <input className="subHeader__search" placeholder="Search">
        </input>
      </div>
    </div>
  );
};

export default Header;
