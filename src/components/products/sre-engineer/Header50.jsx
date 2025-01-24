"use client";

import {Button} from "@relume_io/relume-ui";
import React from "react";
import { useNavigate } from "react-router-dom";

export function Header50() {
        const navigate = useNavigate(); // React Router's navigation hook

    return (
        <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
                <div className="w-full max-w-lg">
                    <p className="mb-3 font-semibold text-text-alternative md:mb-4">
                        Simplified DevOps at Scale
                    </p>
                    <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
                        Meet Leo, Your SRE Engineer
                    </h1>
                    <p className="text-text-alternative md:text-md">
                        Revolutionize your DevOps workflows with Leo, the Autonomous SRE AI Engineer that automates the
                        toughest reliability challenges while empowering teams to maintain control and oversight.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                        <Button title="Button" onClick={() => navigate("/demo")} >Request Demo</Button>
                        <Button title="Button" variant="secondary-alt"  onClick={() => navigate("/get-started")}>
                            Get Started
                        </Button>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 -z-10">
                <img
                    src="/data-center.jpg"
                    className="size-full object-cover"
                    alt="Leo Data Center"
                />
                <div className="absolute inset-0 bg-black/50"/>
            </div>
        </section>
    );
}
