import React from "react";
import classes from "./Footer.module.scss";
const Footer = () => {
  return (
    <div className={`${classes.footer} pt-3 pb-3`}>
      <div className="container">
        <p className="text-center">Copyright 2025. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
