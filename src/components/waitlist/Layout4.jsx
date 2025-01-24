"use client";

import {Button} from "@relume_io/relume-ui";
import React from "react";
import {RxChevronRight} from "react-icons/rx";
import {useNavigate} from "react-router-dom";

export function Layout4() {
    const navigate = useNavigate(); //
    return (
        <section id="relume" className="px-[5%]">
            <div className="container">
                <div
                    className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
                    <div>
                        <p className="mb-3 font-semibold md:mb-4">Exclusive Beta Testing</p>
                        <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                            Join Our Beta Testing Program Today!
                        </h1>
                        <p className="mb-6 md:mb-8 md:text-md">
                            Sign up for our waitlist to be among the first to experience Leo.
                            Selected customers will enjoy exclusive discounts and early
                            access. Limited spots available for discounted beta testing of Leo.
                        </p>

                        <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
                            <div>
                                <p>
                                    <Button title="Sign Up" variant="secondary"
                                             iconRight={<RxChevronRight/>}
                                            onClick={() => navigate("/beta-testing")}
                                    >
                                        Sign Up for Beta
                                    </Button></p>
                            </div>

                        </div>

                    </div>
                    <div>
                        <img
                            src="/beta-testing.jpg"
                            className="w-full object-cover"
                            alt="Beta Testing"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
