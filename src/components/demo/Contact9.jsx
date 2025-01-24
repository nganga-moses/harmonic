"use client";

import { Button, Checkbox, Input, Label, Textarea } from "@relume_io/relume-ui";
import React from "react";
import Hubspot from "../utils/Hubspot";

export function Contact9() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
        <div>
          <img
            src="/empower-fee.jpg"
            alt="Relume placeholder image"
            className="size-full object-cover"
          />
        </div>
        <div>
          <div className="mb-6 md:mb-8">

            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Experience Leo
            </h2>
            <p className="md:text-md">
              Experience how Leo, your AI Engineer, can revolutionize your development process.
            </p>
          </div>
          <Hubspot/>
        </div>
      </div>
    </section>
  );
}
