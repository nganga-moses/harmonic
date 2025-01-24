"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import {useNavigate} from "react-router-dom";

export function Layout10() {
   const navigate = useNavigate(); //
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div
            className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <img
                src="/hologram.jpg"
                className="w-full object-cover"
                alt="Relume placeholder image"
            />
          </div>
          <div>
            <p className="mb-3 font-semibold md:mb-4">Exclusive Early Access</p>
            <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Join Our Paid Customer Preview Program
            </h1>
            <p className="mb-6 md:mb-8 md:text-md">
              Be among the first to experience Leo, our autonomous AI Engineer.
              Sign up for our paid customer preview and enjoy exclusive
              early access pricing. Get early access and save on your subscription.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Sign Up"  onClick={() => navigate("/customer-preview")}>
                Sign Up for Preview
              </Button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
