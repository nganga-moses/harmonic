"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header71() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col">
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
            <div className="w-full max-w-lg">
              <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
                Transform Your Ideas into Stunning Frontend Designs
              </h1>
              <p className="md:text-md">
                Leo is designed to bridge the gap between design and development, effortlessly turning design concepts
                into responsive code.
                Whether it’s HTML, CSS, React, or any modern framework, Leo ensures that your designs come to life with
                precision and speed.
              </p>

            </div>
            <div>
              <img
                  src="/stunning-designs.jpg"
                  className="size-full object-cover"
                  alt="Stunning Frontend Designs"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
