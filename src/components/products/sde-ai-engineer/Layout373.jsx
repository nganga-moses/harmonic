"use client";

import {Button} from "@relume_io/relume-ui";
import React from "react";
import {RxChevronRight} from "react-icons/rx";

export function Layout373() {
    return (
        <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
                <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
                    <div className="mx-auto max-w-lg text-center">
                        <p className="mb-3 font-semibold md:mb-4">Innovative</p>
                        <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                            Empowering Your Development Process
                        </h2>
                        <p className="md:text-md">
                            <h4>Key Features</h4>
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6 md:gap-8">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">

                        <div className="flex flex-col border border-border-primary">
                            <div className="flex h-full flex-col justify-between p-6 md:p-8 lg:p-6">
                                <div>
                                    <div className="mb-3 md:mb-4">
                                        <img
                                            src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                            alt="Relume logo 1"
                                            className="size-12"
                                        />
                                    </div>
                                    <h3 className="mb-2 text-xl font-bold md:text-2xl">
                                        Real-Time Collaboration </h3>
                                    <p>Leo is virtually seated next to you learning your preferences and
                                        adapting to your team’s needs, providing instant feedback and suggesting
                                        improvements in real time.</p>
                                </div>

                            </div>
                        </div>
                        <div className="flex flex-col border border-border-primary">
                            <div className="flex h-full flex-col justify-between p-6 md:p-8 lg:p-6">
                                <div>
                                    <div className="mb-3 md:mb-4">
                                        <img
                                            src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                            alt="Relume logo 2"
                                            className="size-12"
                                        />
                                    </div>
                                    <h3 className="mb-2 text-xl font-bold md:text-2xl">
                                        Streamlined CI/CD
                                    </h3>
                                    <p>Let Leo handle complex CI/CD pipelines, ensuring faster releases with fewer
                                        errors.</p>
                                </div>

                            </div>
                        </div>
                        <div className="flex flex-col border border-border-primary">
                            <div className="flex h-full flex-col justify-between p-6 md:p-8 lg:p-6">
                                <div>
                                    <div className="mb-3 md:mb-4">
                                        <img
                                            src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                            alt="Relume logo 2"
                                            className="size-12"
                                        />
                                    </div>
                                    <h3 className="mb-2 text-xl font-bold md:text-2xl">
                                        Error Prediction and Prevention
                                    </h3>
                                    <p>With built-in AI diagnostics, Leo identifies potential issues before they impact
                                        your project, reducing downtime and unexpected challenges.</p>
                                </div>

                            </div>
                        </div>
                        <div className="flex flex-col border border-border-primary">
                            <div className="flex h-full flex-col justify-between p-6 md:p-8 lg:p-6">
                                <div>
                                    <div className="mb-3 md:mb-4">
                                        <img
                                            src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                            alt="Relume logo 2"
                                            className="size-12"
                                        />
                                    </div>
                                    <h3 className="mb-2 text-xl font-bold md:text-2xl">
                                        Seamless Integration
                                    </h3>
                                    <p>Connect Leo with your favorite tools like GitHub, Jenkins, and Slack for a truly
                                        unified development experience.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
