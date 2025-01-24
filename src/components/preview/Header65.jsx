"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header65() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container max-w-lg text-center">
            <p className="mb-3 font-semibold text-text-alternative md:mb-4">
                Welcome to the Future of Engineering
            </p>
            <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
                Exclusive Customer Preview
            </h1>
            <p className="text-text-alternative md:text-md">
                Be the first to explore our groundbreaking AI engineering platform.
            </p>

        </div>
        <div className="absolute inset-0 -z-10">
            <img
                src="/banner.png"
                className="size-full object-cover"
                alt="Leo Demo"
            />
            <div className="absolute inset-0 bg-black/50"/>
        </div>
    </section>
  );
}
