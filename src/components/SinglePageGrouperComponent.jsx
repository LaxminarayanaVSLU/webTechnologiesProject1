import { NavBarComponent } from "./navbarComponent";
import ContentPageComponent from "./ContentPageComponent";
import HomePageComponent from "./HomePageComponent";
import TaxonomyPageComponent from "./TaxonomyPageComponent";
import TeamPageComponent from "./TeamPageComponent";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/css/whyUs.css";
import "bootstrap/dist/js/bootstrap.bundle";

const SinglePageComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div>
      <NavBarComponent currentPage="HomePage" />
      <HomePageComponent />
      <ContentPageComponent />
      <TaxonomyPageComponent />
      <TeamPageComponent />
    </div>
  );
};

export default SinglePageComponent;
