"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import {useNavigate} from "react-router-dom";

export function Header65() {
  const navigate = useNavigate();
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <p className="mb-3 font-semibold text-text-alternative md:mb-4">
          Welcome to the Future of Engineering
        </p>
        <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
          Request Your Personalized Demo Today
        </h1>
        <p className="text-text-alternative md:text-md">
          Unlock tailored insights, seamless integration, and unparalleled efficiency.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
          <Button title="Sign Up" onClick={() => navigate("/get-started")}>Get Started</Button>
          <Button title="Learn More" variant="secondary-alt" onClick={() => navigate("/about-us")}>
            Learn More
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <img
          src="/leo-demo.jpg"
          className="size-full object-cover"
          alt="Leo Demo"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
