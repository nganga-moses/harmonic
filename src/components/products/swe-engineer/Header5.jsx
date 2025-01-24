"use client";

import {Button} from "@relume_io/relume-ui";
import React from "react";
import { useNavigate } from "react-router-dom";

export function Header5() {
        const navigate = useNavigate(); // React Router's navigation hook

    return (
        <section id="relume" className="relative px-[5%]">
            <div className="container">
                <div className="flex max-h-[60rem] min-h-svh items-center py-16 md:py-24 lg:py-28">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
                            Meet Leo: Your Autonomous AI SWE Engineer
                        </h1>
                        <p className="text-text-alternative md:text-md">
                            Leo is your reliable partner in creating intuitive, scalable, and high-performance
                            applications. With a keen eye for user-centric design and seamless backend integration, Leo
                            brings speed, precision, and creativity to every project.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                            <Button title="Learn More" onClick={() => navigate("/demo")}>Schedule Demo</Button>
                            <Button title="Sign Up" variant="secondary-alt"  onClick={() => navigate("/get-started")}>
                                Get Started
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 -z-10">
                <img
                    src="/leo-meeting.jpg"
                    className="size-full object-cover"
                    alt="SWE Leo"
                />
                <div className="absolute inset-0 bg-black/50"/>
            </div>
        </section>
    );
}
