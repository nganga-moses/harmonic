"use client";

import {Button} from "@relume_io/relume-ui";
import React from "react";
import {RxChevronRight} from "react-icons/rx";
import { useNavigate } from "react-router-dom";

export function Layout237() {
        const navigate = useNavigate(); // React Router's navigation hook

    return (
        <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
                <div className="flex flex-col items-center">
                    <div className="rb-12 mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
                        <p className="mb-3 font-semibold md:mb-4">Engineering tomorrow for a better today</p>
                        <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                            Discover the Future of Engineering
                        </h2>
                        <p className="md:text-md">
                            Leo is not just an innovation—he’s a transformation. Designed to evolve with you, Leo
                            redefines engineering blending intelligence, adaptability, and collaboration. Leo is
                            designed to continually
                            learn, becoming smarter with every interaction. Let Leo
                            empower your journey and unlock new horizons.
                        </p>
                    </div>
                    <div
                        className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
                        <div className="flex w-full flex-col items-center text-center">
                            <div className="rb-5 mb-5 md:mb-6">
                                <img
                                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                    alt="Relume logo 1"
                                    className="size-12"
                                />
                            </div>
                            <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                                Effortless Harmony with Your Tools
                            </h3>
                            <p>
                                Leo seamlessly integrates into your systems, empowering your team to achieve more, drive
                                efficiency, and unlock new possibilities.
                            </p>
                        </div>
                        <div className="flex w-full flex-col items-center text-center">
                            <div className="rb-5 mb-5 md:mb-6">
                                <img
                                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                    alt="Relume logo 1"
                                    className="size-12"
                                />
                            </div>
                            <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                                Smart Thinking, Simplified
                            </h3>
                            <p>
                                Leo takes the weight of complexity off your shoulders, empowering you to focus on what
                                truly matters.
                            </p>
                        </div>
                        <div className="flex w-full flex-col items-center text-center">
                            <div className="rb-5 mb-5 md:mb-6">
                                <img
                                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                    alt="Relume logo 1"
                                    className="size-12"
                                />
                            </div>
                            <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                                Collaboration, Evolved
                            </h3>
                            <p>
                                Teams thrive when Leo brings them together, creating a seamless flow of ideas and
                                execution.
                            </p>
                        </div>
                    </div>
                    <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16">
                        <Button variant="secondary" onClick={() => navigate("/about-us")}>Learn More</Button>
                        <Button iconRight={<RxChevronRight/>} onClick={() => navigate("/get-started")} >
                            Get Started
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
