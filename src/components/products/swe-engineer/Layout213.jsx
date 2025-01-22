"use client";

import React from "react";

export function Layout213() {
    return (
        <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
                <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
                    <div className="order-2 md:order-1">
                        <img
                            src="/leo-mesh.jpg"
                            className="w-full object-cover"
                            alt="SWE Leo"
                        />
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="mb-5 md:mb-6">
                            <img
                                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                className="size-20"
                                alt="Relume logo"
                            />
                        </div>
                        <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                            Why Choose Leo?
                        </h2>
                        <p className="md:text-md">
                            <ul className="grid grid-cols-1 gap-4 py-2">
                                <li className="flex self-start">
                                    <div className="mr-4 flex-none self-start">
                                        <img
                                            src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                            alt="Relume logo 1"
                                            className="size-6"
                                        />
                                    </div>
                                    <span><b>Autonomous Creativity: </b>Leo helps you ideate, prototype, and iterate quickly, ensuring user feedback is implemented with minimal downtime.</span>
                                </li>
                                <li className="flex self-start">
                                    <div className="mr-4 flex-none self-start">
                                        <img
                                            src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                            alt="Relume logo 1"
                                            className="size-6"
                                        />
                                    </div>
                                    <span><b>Efficient Workflows:</b> Automate CI/CD processes, streamline integrations, and deploy with confidence—all while maintaining a personal touch in your designs.</span>
                                </li>
                                <li className="flex self-start">
                                    <div className="mr-4 flex-none self-start">
                                        <img
                                            src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                            alt="Relume logo 1"
                                            className="size-6"
                                        />
                                    </div>
                                    <span>
                                        <b>Human-Centric Collaboration:</b> Leo learns from your team’s preferences, suggesting improvements while respecting your unique development style.
                </span>
                                </li>
                            </ul>
                        </p>

                    </div>
                </div>
            </div>
        </section>
    );
}
