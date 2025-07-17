"use client";

import React, { useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);

  const handleNavOpen = () => setShowNav(true);
  const handleNavClose = () => setShowNav(false);

  return (
    <header>
      <nav aria-label="Main Navigation">
        <Nav openNav={handleNavOpen} />
        <MobileNav showNav={showNav} closeNav={handleNavClose} />
      </nav>
    </header>
  );
};

export default ResponsiveNav;
