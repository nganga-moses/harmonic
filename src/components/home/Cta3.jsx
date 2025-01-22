"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta3() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="w-full max-w-lg">
          <h2 className="mb-5 text-5xl font-bold text-text-alternative md:mb-6 md:text-7xl lg:text-8xl">
            Experience Leo
          </h2>
          <p className="text-text-alternative md:text-md">
              Ready to revolutionize your projects? Experience the future of engineering today with a personalized demo of the future.

          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button title="Get Demo">Request Demo</Button>
            <Button title="Contact" variant="secondary-alt">
              Get Started
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <img
          src="/leo-network.gif"
          className="size-full object-cover"
          alt="Experience Leo"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
