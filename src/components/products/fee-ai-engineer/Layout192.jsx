"use client";

import React from "react";

export function Layout192() {
    return (
        <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
                <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
                    <div className="order-2 md:order-1">
                        <img
                            src="/empower-fee.jpg"
                            className="w-full object-cover"
                            alt="Empower Front End Engineering"
                        />
                    </div>
                    <div className="order-1 lg:order-2">
                        <p className="mb-3 font-semibold md:mb-4">Effortless</p>
                        <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                            Empowering Frontend Development
                        </h2>
                        <p className="md:text-md">
                            <b>Transforming Design into Code Effortlessly</b><br/>
                            Leo’s intuitive process simplifies the transition from concept to execution, eliminating the
                            need for repetitive tasks and allowing teams to focus on creativity.
                        </p><br/>
                        <p className="md:text-md">
                            <b>Seamless Collaboration for Frontend Success</b><br/>
                            Leo integrates with tools like Figma and Sketch, fostering smooth collaboration between
                            designers and developers.
                        </p>

                    </div>
                </div>
            </div>
        </section>
    );
}
