import React from "react";
import {Navbar10} from "../../../components/home/Navbar10";
import {Header5} from "../../../components/products/swe-engineer/Header5";
import {Layout1} from "../../../components/products/swe-engineer/Layout1";
import {Layout213} from "../../../components/products/swe-engineer/Layout213";
import {Layout6} from "../../../components/products/swe-engineer/Layout6";
import {Layout251} from "../../../components/products/swe-engineer/Layout251";
import {Cta1} from "../../../components/products/swe-engineer/Cta1";
import {Footer1} from "../../../components/home/Footer1";

export default function SweEngineer() {
    return (
        <div>
            <Navbar10/>
            <Header5/>
            <Layout1/>
            <Layout213/>
            <Layout251/>
            <Layout6/>

            <Cta1/>
            <Footer1/>
        </div>
    );
}
