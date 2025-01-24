"use client";

import { Button } from "@relume_io/relume-ui";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
import { RxChevronRight } from "react-icons/rx";
import {useNavigate} from "react-router-dom";

const Circle = () => {
  const circleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: circleRef,
    offset: ["end end", "end center"],
  });
  const backgroundColor = {
    backgroundColor: useTransform(scrollYProgress, [0.85, 1], ["#ccc", "#000"]),
  };
  return (
    <motion.div
      ref={circleRef}
      style={backgroundColor}
      className="z-20 mt-7 size-[0.9375rem] rounded-full shadow-[0_0_0_8px_white] md:mt-8"
    />
  );
};

export function Timeline13() {
  const navigate = useNavigate(); //
  return (
    <section id="relume" className="px-[5%] py-8 md:py-12 lg:py-12">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <div className="relative z-10 w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">Milestones</p>
              <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                Our Journey: Key Milestones and Achievements
              </h2>
              <p className="md:text-md">
                Explore the remarkable journey of Harmonic Labs. Our timeline
                showcases pivotal moments that have shaped our innovation.
              </p>
            </div>
          </div>
          <div className="relative grid auto-cols-fr grid-cols-1 justify-items-center gap-20">
            <div className="absolute flex h-full w-8 flex-col items-center justify-self-start md:justify-self-auto">
              <div className="absolute z-10 h-16 w-1 bg-gradient-to-b from-background-primary to-transparent" />
              <div className="sticky top-0 mt-[-50vh] h-[50vh] w-[3px] bg-neutral-black" />
              <div className="h-full w-[3px] bg-neutral-lighter" />
              <div className="absolute bottom-0 z-0 h-16 w-1 bg-gradient-to-b from-transparent to-background-primary" />
              <div className="absolute top-[-50vh] h-[50vh] w-full bg-background-primary" />
            </div>
            <div className="grid auto-cols-fr grid-cols-[max-content_1fr] items-start justify-items-center gap-4 md:grid-cols-[1fr_max-content_1fr] md:gap-8 lg:gap-12">
              <div className="order-last w-full overflow-hidden md:order-none md:w-auto">
                <img
                  src="/leo-network.jpg"
                  alt="Relume placeholder image 1"
                  className="w-full"
                />
              </div>
              <div className="col-span-1 row-span-2 flex h-full w-8 justify-center">
                <Circle />
              </div>
              <div className="mt-4 grid grid-cols-1 gap-8 md:gap-12">
                <div>
                  <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                    Dec 2022
                  </h3>
                  <h4 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                    Company Founded
                  </h4>
                  <p>
                    Harmonic Labs was established with a vision to revolutionize
                    AI technology. Our journey began with a commitment to
                    innovation.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid auto-cols-fr grid-cols-[max-content_1fr] items-start justify-items-center gap-4 md:grid-cols-[1fr_max-content_1fr] md:gap-8 lg:gap-12">
              <div className="mt-4 grid grid-cols-1 items-start gap-8 text-left md:items-end md:gap-12 md:text-right">
                <div>
                  <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                     Oct 2023
                  </h3>
                  <h4 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                    First Leo Version
                  </h4>
                  <p>
                    We proudly completed development of our first version of Leo, marking a
                    significant milestone. This innovation set the stage for
                    future advancements.
                  </p>
                </div>
              </div>
              <div className="order-first col-span-1 row-span-2 flex h-full w-8 justify-center md:order-none">
                <Circle />
              </div>
              <div className="order-last w-full overflow-hidden md:order-none md:w-auto">
                <img
                  src="/sde.jpg"
                  alt="Relume placeholder image 2"
                  className="w-full"
                />
              </div>
            </div>
            <div className="grid auto-cols-fr grid-cols-[max-content_1fr] items-start justify-items-center gap-4 md:grid-cols-[1fr_max-content_1fr] md:gap-8 lg:gap-12">
              <div className="order-last w-full overflow-hidden md:order-none md:w-auto">
                <img
                  src="/logo.png"
                  alt="Relume placeholder image 3"
                  className="w-full"
                />
              </div>
              <div className="col-span-1 row-span-2 flex h-full w-8 justify-center">
                <Circle />
              </div>
              <div className="mt-4 grid grid-cols-1 gap-8 md:gap-12">
                <div>
                  <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                    Jan 2024
                  </h3>
                  <h4 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                    Company Incorporated
                  </h4>
                  <p>
                    Harmonic Labs was officially incorporated, enhancing our
                    capabilities and reach. This incorporation enables collaborating with industry leaders
                    allowing us to innovate further.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid auto-cols-fr grid-cols-[max-content_1fr] items-start justify-items-center gap-4 md:grid-cols-[1fr_max-content_1fr] md:gap-8 lg:gap-12">
              <div className="mt-4 grid grid-cols-1 items-start gap-8 text-left md:items-end md:gap-12 md:text-right">
                <div>
                  <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                    2024
                  </h3>
                  <h4 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                    AI Engineer Development
                  </h4>
                  <p>
                    We are currently developing Leo, our autonomous AI Engineer.
                    This project represents the pinnacle of our innovation
                    efforts.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8 md:justify-end">
                    <Button title="Learn More" variant="secondary"  iconRight={<RxChevronRight />}
                      onClick={() => navigate("/get-started")}>
                      Join Us
                    </Button>

                  </div>
                </div>
              </div>
              <div className="order-first col-span-1 row-span-2 flex h-full w-8 justify-center md:order-none">
                <Circle />
              </div>
              <div className="order-last w-full overflow-hidden md:order-none md:w-auto">
                <img
                  src="/leo-2.jpg"
                  alt="Relume placeholder image 4"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
