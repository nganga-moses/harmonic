import React from "react";
import { Navbar10 } from "../../components/home/Navbar10";
import { Header46 } from "../../components/about-us/Header46";
import { Layout3 } from "../../components/about-us/Layout3";

import { Timeline13 } from "../../components/about-us/Timeline13";

import { Footer1 } from "../../components/home/Footer1";
import {Contact13} from "../../components/404/Contact13";

export default function AboutUs() {
  return (
    <div>
      <Navbar10 />
      <Header46 />
      <Layout3 />
      <Timeline13 />

<Contact13 />
      <Footer1 />
    </div>
  );
}
