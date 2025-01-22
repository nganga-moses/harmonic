"use client";

import React from "react";

export function Blog3() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Blog</p>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              Explore Our Latest Insights
            </h1>
            <p className="md:text-md">
              Dive into the world of AI and technology.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <div className="no-scrollbar mb-12 ml-[-5vw] flex w-screen items-center justify-start overflow-scroll pl-[5vw] md:mb-16 md:ml-0 md:w-full md:justify-center md:overflow-hidden md:pl-0">
            <a
              href="#"
              className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-text-primary bg-background-primary border px-4 py-2 border-border-primary"
            >
              View all
            </a>
            <a
              href="#"
              className="focus-visible:ring-border-primary inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-text-primary gap-2 border px-4 py-2 border-transparent"
            >
              AI Trends
            </a>
            <a
              href="#"
              className="focus-visible:ring-border-primary inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-text-primary gap-2 border px-4 py-2 border-transparent"
            >
              Tech Innovations
            </a>
            <a
              href="#"
              className="focus-visible:ring-border-primary inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-text-primary gap-2 border px-4 py-2 border-transparent"
            >
              Industry Insights
            </a>
            <a
              href="#"
              className="focus-visible:ring-border-primary inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-text-primary gap-2 border px-4 py-2 border-transparent"
            >
              Expert Opinions
            </a>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
            <div className="border border-border-primary">
              <a href="#" className="w-full max-w-full">
                <div className="w-full overflow-hidden">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image 1"
                    className="aspect-[3/2] size-full object-cover"
                  />
                </div>
              </a>
              <div className="px-5 py-6 md:p-6">
                <a href="#" className="mb-2 flex text-sm font-semibold">
                  Blog
                </a>
                <a href="#" className="mb-2 block max-w-full">
                  <h5 className="text-xl font-bold md:text-2xl">
                    The Future of AI Engineering
                  </h5>
                </a>
                <p>Discover how AI is reshaping engineering practices today.</p>
                <div className="mt-6 flex items-center">
                  <div className="mr-4 shrink-0">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder avatar 1"
                      className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h6 className="text-sm font-semibold">John Doe</h6>
                    <div className="flex items-center">
                      <p className="text-sm">11 Jan 2022</p>
                      <span className="mx-2">•</span>
                      <p className="text-sm">5 min read</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-border-primary">
              <a href="#" className="w-full max-w-full">
                <div className="w-full overflow-hidden">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image 1"
                    className="aspect-[3/2] size-full object-cover"
                  />
                </div>
              </a>
              <div className="px-5 py-6 md:p-6">
                <a href="#" className="mb-2 flex text-sm font-semibold">
                  Research
                </a>
                <a href="#" className="mb-2 block max-w-full">
                  <h5 className="text-xl font-bold md:text-2xl">
                    AI in Everyday Life
                  </h5>
                </a>
                <p>
                  How AI is transforming our daily experiences and interactions.
                </p>
                <div className="mt-6 flex items-center">
                  <div className="mr-4 shrink-0">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder avatar 1"
                      className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h6 className="text-sm font-semibold">Jane Smith</h6>
                    <div className="flex items-center">
                      <p className="text-sm">15 Feb 2022</p>
                      <span className="mx-2">•</span>
                      <p className="text-sm">7 min read</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-border-primary">
              <a href="#" className="w-full max-w-full">
                <div className="w-full overflow-hidden">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image 1"
                    className="aspect-[3/2] size-full object-cover"
                  />
                </div>
              </a>
              <div className="px-5 py-6 md:p-6">
                <a href="#" className="mb-2 flex text-sm font-semibold">
                  Innovation
                </a>
                <a href="#" className="mb-2 block max-w-full">
                  <h5 className="text-xl font-bold md:text-2xl">
                    Building Trust in AI Systems
                  </h5>
                </a>
                <p>
                  Understanding the importance of transparency in AI technology.
                </p>
                <div className="mt-6 flex items-center">
                  <div className="mr-4 shrink-0">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder avatar 1"
                      className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h6 className="text-sm font-semibold">Alice Brown</h6>
                    <div className="flex items-center">
                      <p className="text-sm">20 Mar 2022</p>
                      <span className="mx-2">•</span>
                      <p className="text-sm">6 min read</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-border-primary">
              <a href="#" className="w-full max-w-full">
                <div className="w-full overflow-hidden">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image 1"
                    className="aspect-[3/2] size-full object-cover"
                  />
                </div>
              </a>
              <div className="px-5 py-6 md:p-6">
                <a href="#" className="mb-2 flex text-sm font-semibold">
                  Ethics
                </a>
                <a href="#" className="mb-2 block max-w-full">
                  <h5 className="text-xl font-bold md:text-2xl">
                    AI and the Future of Work
                  </h5>
                </a>
                <p>
                  Exploring how AI is reshaping job landscapes and
                  opportunities.
                </p>
                <div className="mt-6 flex items-center">
                  <div className="mr-4 shrink-0">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder avatar 1"
                      className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h6 className="text-sm font-semibold">Mark Johnson</h6>
                    <div className="flex items-center">
                      <p className="text-sm">05 Apr 2022</p>
                      <span className="mx-2">•</span>
                      <p className="text-sm">8 min read</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-border-primary">
              <a href="#" className="w-full max-w-full">
                <div className="w-full overflow-hidden">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image 1"
                    className="aspect-[3/2] size-full object-cover"
                  />
                </div>
              </a>
              <div className="px-5 py-6 md:p-6">
                <a href="#" className="mb-2 flex text-sm font-semibold">
                  Future
                </a>
                <a href="#" className="mb-2 block max-w-full">
                  <h5 className="text-xl font-bold md:text-2xl">
                    Harnessing AI for Sustainable Development
                  </h5>
                </a>
                <p>
                  Innovative approaches to using AI for environmental
                  sustainability.
                </p>
                <div className="mt-6 flex items-center">
                  <div className="mr-4 shrink-0">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder avatar 1"
                      className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h6 className="text-sm font-semibold">Sara Lee</h6>
                    <div className="flex items-center">
                      <p className="text-sm">10 May 2022</p>
                      <span className="mx-2">•</span>
                      <p className="text-sm">4 min read</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-border-primary">
              <a href="#" className="w-full max-w-full">
                <div className="w-full overflow-hidden">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image 1"
                    className="aspect-[3/2] size-full object-cover"
                  />
                </div>
              </a>
              <div className="px-5 py-6 md:p-6">
                <a href="#" className="mb-2 flex text-sm font-semibold">
                  Sustainability
                </a>
                <a href="#" className="mb-2 block max-w-full">
                  <h5 className="text-xl font-bold md:text-2xl">
                    The Role of AI in Healthcare
                  </h5>
                </a>
                <p>
                  Transforming patient care through advanced AI technologies.
                </p>
                <div className="mt-6 flex items-center">
                  <div className="mr-4 shrink-0">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder avatar 1"
                      className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h6 className="text-sm font-semibold">Tom White</h6>
                    <div className="flex items-center">
                      <p className="text-sm">25 Jun 2022</p>
                      <span className="mx-2">•</span>
                      <p className="text-sm">9 min read</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
