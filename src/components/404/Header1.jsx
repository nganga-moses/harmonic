"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import {useNavigate} from "react-router-dom";

export function Header1() {
  const navigate = useNavigate(); //
  return (

    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              Oops! We lost you there Bud!
            </h1>
            <p className="md:text-md">
              We're sorry, but the page you're looking for doesn't exist. Please
              check the URL or return to our homepage.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Home" onClick={() => navigate("/")}>Home</Button>
             
            </div>
          </div>
          <div>
            <img
              src="/not-found.jpg"
              className="w-full object-cover"
              alt="Not Found"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
