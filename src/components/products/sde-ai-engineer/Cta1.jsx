"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { useNavigate } from "react-router-dom";

export function Cta1() {
      const navigate = useNavigate(); // React Router's navigation hook

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <img
                src="/human-centric.jpg"
                className="w-full object-cover"
                alt="Human Centric Engineering"
            />
          </div>
          <div>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Imagine What You Could Achieve with Leo
            </h2>
            <p className="md:text-md">
              Whether you’re an early-stage startup or a large-scale enterprise, Leo is here to unlock your potential:
              <br/>
              <ul className="grid grid-cols-1 gap-4 py-2">
                <li className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <img
                        src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                        alt="Relume logo 1"
                        className="size-6"
                    />
                  </div>
                  <span><b>Startups:</b> Accelerate development and launch your product faster with minimal overhead.</span>
                </li>
                <li className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <img
                        src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                        alt="Relume logo 1"
                        className="size-6"
                    />
                  </div>
                  <span>
                    <b>Growing Teams: </b> Streamline workflows and focus on innovation instead of debugging.
                </span>
                </li>
                <li className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <img
                        src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                        alt="Relume logo 1"
                        className="size-6"
                    />
                  </div>
                  <span>
                    <b>Enterprises:</b> Handle complex projects and scale seamlessly with Leo’s expertise.
                </span>
                </li>
              </ul>
              Let’s explore how Leo can transform your backend development process. Request a Demo to See how Leo can adapt to your unique challenges or Get Started now to Join teams that are already transforming their workflows with Leo.

            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Demo" onClick={() => navigate("/demo")} >Request a Demo</Button>
              <Button title="Contact" variant="secondary" onClick={() => navigate("/get-started")}>
                Get Started
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
