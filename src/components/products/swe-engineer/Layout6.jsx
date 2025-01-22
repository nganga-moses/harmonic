"use client";

import React from "react";

export function Layout6() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="rb-5 mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
              Unlocking the Future of Software Engineering
            </h1>
            <p className="mb-6 md:mb-8 md:text-md">
              Our SWE Engineer, Leo, excels in both backend and frontend
              development. With advanced capabilities in system architecture,
              Leo ensures seamless integration and optimal performance.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  System Architecture
                </h6>
                <p>
                  Designs robust architectures that enhance scalability and
                  maintainability for complex systems.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Design Excellence
                </h6>
                <p>
                  Creates intuitive user interfaces that elevate user experience
                  and engagement.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/the-future.jpg"
              className="w-full object-cover"
              alt="The future of Engineering"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
