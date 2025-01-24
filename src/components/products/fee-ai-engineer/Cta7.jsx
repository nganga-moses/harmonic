"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { useNavigate } from "react-router-dom";

export function Cta7() {
  const navigate = useNavigate(); // React Router's navigation hook

  return (
      <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                Supercharge your Frontend Development Potential
              </h2>
              <p className="md:text-md">
                Experience the power of Leo, the Frontend Engineer built to accelerate your design potential
                while keeping a human touch.
              </p><br/>
              <p className="md:text-md">
                Schedule a demo and see how Leo transforms your design process.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                <Button title="Schedule a Demo" onClick={() => navigate("/demo")}>Schedule a Demo</Button>
                <Button title="Get Started" variant="secondary"  onClick={() => navigate("/get-started")}>
                  Get Started
                </Button>
              </div>
            </div>
            <div>
              <img
                  src="/fee.jpg"
                  className="w-full object-cover"
                  alt="Leo SWE"
              />
            </div>
          </div>
        </div>
      </section>
  );
}
