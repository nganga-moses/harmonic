import React from "react";
import {Navbar10} from "../../components/home/Navbar10";
import {Layout4} from "../../components/waitlist/Layout4";
import {Layout10} from "../../components/waitlist/Layout10";
import {Layout237} from "../../components/waitlist/Layout237";

import {Footer1} from "../../components/home/Footer1";

export default function WaitList() {
    return (
        <div>
            <Navbar10/>
            <Layout237/>
            <Layout4/>
            <Layout10/>

            <Footer1/>
        </div>
    );
}
