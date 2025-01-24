"use client";

import {Button} from "@relume_io/relume-ui";
import React from "react";
import { useNavigate } from "react-router-dom";

export function Cta45() {
        const navigate = useNavigate(); // React Router's navigation hook

    return (
        <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
                <div
                    className="grid grid-cols-1 items-start justify-start gap-6 border border-border-primary p-8 md:grid-cols-[1fr_max-content] md:items-center md:justify-between md:gap-x-12 md:gap-y-8 lg:gap-x-20 lg:p-12">
                    <div className="md:mr-12 lg:mr-0">
                        <div className="w-full max-w-lg">
                            <h3 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">
                                Transform Your DevOps with Leo
                            </h3>
                            <p className="md:text-md">
                                Discover how Leo’s SRE AI can streamline your workflows and enhance productivity.
                                Schedule a demo today and experience the power of autonomous site reliability
                                engineering.
                            </p>
                        </div>
                    </div>
                    <div className="flex w-full flex-wrap items-center justify-start gap-4 md:w-auto md:justify-end">
                        <Button title="Get Started"  onClick={() => navigate("/get-started")} >Get Started</Button>
                        <Button title="Contact" variant="secondary" onClick={() => navigate("/demo")} >
                            Schedule Demo
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
