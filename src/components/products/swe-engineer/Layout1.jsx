"use client";

import {Button} from "@relume_io/relume-ui";
import React from "react";
import {RxChevronRight} from "react-icons/rx";

export function Layout1() {
    return (
        <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
                <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
                    <div>
                        <p className="mb-3 font-semibold md:mb-4">Autonomy</p>
                        <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                            Seamless Backend Development meets Frontend Excellence
                        </h1>
                        <p className="md:text-md">
                            Our SWE Engineer, Leo, understands the nuances of software engineering, automating the
                            repetitive while empowering developers to focus on building impactful, user-friendly
                            solutions. Whether refining backend workflows or crafting a seamless UI, Leo’s adaptability
                            ensures your projects excel in performance and reliability.
                        </p>

                    </div>
                    <div>
                        <img
                            src="/connection.jpg"
                            className="w-full object-cover"
                            alt="Connections"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
