"use client";

import {Button} from "@relume_io/relume-ui";
import React from "react";
import { useNavigate } from "react-router-dom";

export function Header50() {
        const navigate = useNavigate(); // React Router's navigation hook

    return (
        <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28"><br/>
            <div className="container">
                <div className="w-full max-w-lg">
                    <p className="mb-3 font-semibold text-text-alternative md:mb-4">
                        Innovative
                    </p>
                    <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
                        Frontend Engineering Excellence
                    </h1>
                    <p className="text-text-alternative md:text-md">
                        Meet Leo, the FEE AI Engineer, your partner in transforming creative ideas into pixel-perfect
                        frontend designs. From rapid prototyping to seamless deployment, Leo combines speed, precision,
                        and creativity to elevate your frontend development process.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                        <Button title="Schedule Demo" onClick={() => navigate("/demo")}>Schedule Demo</Button>
                        <Button title="Get Started" variant="secondary-alt"  onClick={() => navigate("/get-started")}>
                            Get Started
                        </Button>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 -z-10">
                <img
                    src="/leo-fee.jpg"
                    className="size-full object-cover"
                    alt="Leo FEE"
                />
                <div className="absolute inset-0 bg-black/50"/>
            </div>
        </section>
    );
}
