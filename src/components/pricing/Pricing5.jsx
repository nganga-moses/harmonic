"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { BiCheck } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export function Pricing5() {
      const navigate = useNavigate(); // React Router's navigation hook

  return (
    <section id="harmonic" className="px-[5%] py-6 md:py-6 lg:py-6">
      <div className="container">
        <div className="mb-8 w-full max-w-lg lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Affordable</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Pricing Plans
          </h2>
          <p className="md:text-md">
            Choose a plan that fits your needs and unlock the power of AI
            engineering.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 items-center gap-y-12 md:gap-x-12 md:gap-y-16 lg:grid-cols-2 lg:gap-x-20">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2">
            <div className="flex self-start">
              <div className="mr-6 flex-none self-start">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-8"
                  alt="harmonic logo 1"
                />
              </div>
              <div>
                <h3 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Basic Features
                </h3>
                <p>
                  Access to Leo's essential tools for individual & early stage start-up projects
                </p>
              </div>
            </div>
            <div className="flex self-start">
              <div className="mr-6 flex-none self-start">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-8"
                  alt="harmonic logo 1"
                />
              </div>
              <div>
                <h3 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Advanced Features
                </h3>
                <p>
                  Enhanced capabilities for small
                  and larger teams, including
                  collaboration and advanced analytics.
                </p>
              </div>
            </div>
            <div className="flex self-start">
              <div className="mr-6 flex-none self-start">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-8"
                  alt="harmonic logo 1"
                />
              </div>
              <div>
                <h3 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Enterprise Features
                </h3>
                <p>
                  Custom solutions tailored for organizations with extensive
                  engineering needs.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="h-full border border-border-primary px-6 py-8 md:p-8">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="mb-2 text-xl font-bold md:text-2xl">
                    Start-up Plan
                  </h4>
                  <p>Ideal for start-ups.</p>
                </div>
                <h5 className="justify-self-end text-6xl font-bold md:text-9xl lg:text-10xl">
                  $199/mo
                </h5>
              </div>
              <div className="my-8 h-px w-full shrink-0 bg-border" />
              <p>Includes:</p>
              <div className="mb-8 mt-4 grid grid-cols-1 gap-y-4 py-2 md:grid-cols-2 md:gap-x-6">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>AI tool access</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Basic support services</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Monthly usage credits</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Community forum access</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Tutorial resources</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Performance Tracking tools</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Cloud System integration</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Basic analytics features</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Dedicated workspace</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>CI/CD Integration</p>
                </div>
              </div>
              <div className="my-8 h-px w-full shrink-0 bg-border" />
              <div>
                <Button title="Get Started" className="w-full" onClick={() => navigate("/get-started")}>
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
