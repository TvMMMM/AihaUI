import React, { Fragment } from "react";
import AboutUs from "../components/AboutUs";
import Advantage from "../components/Advantage";
import Advice from "../components/Advice";
import Banner from "../components/Banner";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Knowledge from "../components/Knowledge";
import { ScrolltoTop } from "../components/ScrolltoTop";
import Team from "../components/Team";

export default function homePage() {
  return (
    <Fragment>
      <div className="max-w-full">
        <div className="backgroundImg">
          <Header />
          <Banner />
        </div>
        <ScrolltoTop />
        <AboutUs />
        <Advantage />
        <Team />
        <Knowledge />
        <ContactUs />
        <Advice />
        <Footer />
      </div>
    </Fragment>
  );
}
