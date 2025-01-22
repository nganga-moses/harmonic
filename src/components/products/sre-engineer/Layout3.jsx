"use client";

import React from "react";

export function Layout3() {
    return (
        <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
                <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
                    <div>
                        <p className="mb-3 font-semibold md:mb-4">Redefine your DevOps strategy with tailored
                            automation.</p>
                        <h1 className="rb-5 mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
                            Customize Your Workflows with Our Autonomous SRE AI Engineer
                        </h1>
                        <p className="md:text-md">
                            From automating environment setups to streamlining release cycles, Leo ensures your teams
                            stay focused on delivering exceptional results while meeting tight deadlines.
                        </p>
                    </div>
                    <div>
                        <img
                            src="/sre.jpg"
                            className="w-full object-cover"
                            alt="SRE Workflows"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
