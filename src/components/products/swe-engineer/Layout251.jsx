"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout251() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Innovative</p>
            <h2 className="text-5xl font-bold ">
              Empowering Development with Autonomous Engineering
            </h2>
          </div>
          <div>
            <p className="md:text-md">

            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
          <div>
            <div className="mb-6 md:mb-8">
              <img
                src="/dev-ops.jpg"
                alt="Devops Integration"
              />
            </div>
            <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Seamless Integration with DevOps Tools
            </h3>
            <p>From GitHub to Jenkins, Leo integrates with the tools you trust to keep your workflows smooth and consistent.</p>
          </div>
          <div>
            <div className="mb-6 md:mb-8">
              <img
                src="/real-time.jpg"
                alt="Realtime Collaboration"
              />
            </div>
            <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Real-Time Collaboration
            </h3>
            <p>Leo synchronizes with your team, enhancing communication between developers, designers, and product managers for faster delivery.</p>
          </div>
          <div>
            <div className="mb-6 md:mb-8">
              <img
                src="/feedback.jpg"
                alt="Learns from Feedback"
              />
            </div>
            <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Continuous Learning from User Feedback
            </h3>
            <p>Leo adapts to user data, helping you refine designs and optimize experiences with every iteration.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
