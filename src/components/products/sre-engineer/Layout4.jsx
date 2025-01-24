"use client";

import {Button} from "@relume_io/relume-ui";
import React from "react";
import {RxChevronRight} from "react-icons/rx";
import {useNavigate} from "react-router-dom";

export function Layout4() {
    const navigate = useNavigate(); // React Router's navigation hook

    return (
        <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
                <div
                    className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
                    <div>
                        <p className="mb-3 font-semibold md:mb-4">Efficiency</p>
                        <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                            Unlock the Power of Autonomous SRE Engineering
                        </h1>
                        <p className="mb-6 md:mb-8 md:text-md">
                            Experience unparalleled speed and precision in your DevOps processes with Leo’s SRE
                            capabilities:
                        </p>
                        <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
                            <div>
                                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                                    Faster Releases
                                </h6>
                                <p>
                                    Reduce time-to-market with optimized CI/CD pipelines and intelligent test
                                    automation.
                                </p>
                            </div>
                            <div>
                                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                                    Enhanced Transparency
                                </h6>
                                <p>
                                    Gain insights and clarity with real-time simulations, impact reports, and activity
                                    logs.
                                </p>
                            </div>
                        </div>
                        <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                            <Button title="Schedule Demo" variant="secondary" onClick={() => navigate("/demo")}>
                                Schedule Demo
                            </Button>
                            <Button
                                title="Get Started"
                                onClick={() => navigate("/get-started")}
                                iconRight={<RxChevronRight/>}
                            >
                                Get Started
                            </Button>
                        </div>
                    </div>
                    <div>
                        <img
                            src="/leo-sre-collabroration.jpg"
                            className="w-full object-cover"
                            alt="Leo SRE Collaboration"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
