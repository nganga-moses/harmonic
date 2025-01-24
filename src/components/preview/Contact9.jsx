"use client";

import React from "react";
import Beta from "../utils/Beta";
import Preview from "../utils/Preview";

export function Contact9() {
    return (
        <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
            <div
                className="container grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
                <div>
                    <img
                        src="/hologram.jpg"
                        alt="Relume placeholder image"
                        className="size-full object-cover"
                    />
                </div>
                <div>
                    <div className="mb-6 md:mb-8">

                        <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                            Customer Preview Signup
                        </h2>
                        <p className="md:text-md">
                            Be among the first to experience Leo at a special rate, reserved for early adopters who join
                            the waitlist today. </p>
                    </div>
                    <Preview/>
                </div>
            </div>
        </section>
    );
}
