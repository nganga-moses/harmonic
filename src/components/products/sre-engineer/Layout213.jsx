"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout213() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="/leo-sre.jpg"
              className="w-full object-cover"
              alt="Leo SRE"
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
              Empowering Automation with Human Oversight
            </h2>
            <p className="md:text-md">
              Our configurable human-in-the-loop verifications ensure that while
              Leo automates workflows, human expertise is always available for
              critical decision-making. This balance enhances trust and
              accountability, allowing organizations to embrace automation
              without sacrificing control.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
