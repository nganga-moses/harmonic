"use client";

import {Button} from "@relume_io/relume-ui";
import React from "react";
import {RxChevronRight} from "react-icons/rx";

export function Layout4() {
    return (
        <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
                <div
                    className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
                    <div>
                        <p className="mb-3 font-semibold md:mb-4">Empower Innovation</p>
                        <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                            Unlock the Future of Engineering with Leo
                        </h1>
                        <p className="mb-6 md:mb-8 md:text-md">
                            Leo revolutionizes engineering by automating complex tasks, analyzing data, and learning
                            from each interaction.
                            With advanced capabilities, Leo adapts to your unique business needs and enhances
                            creativity, efficiency,
                            and productivity. Experience a future where engineering works for you.
                        </p>
                        <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
                            <div>
                                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                                    Seamless Integration
                                </h6>
                                <p>
                                    Leo connects effortlessly with your systems, streamlining processes and saving time
                                </p>
                            </div>
                            <div>
                                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                                    Continuous Learning
                                </h6>
                                <p>
                                    Leo improves with every interaction, ensuring enhanced outcomes for future tasks.
                                </p>
                            </div>
                        </div>
                        <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                            <Button title="Learn More" variant="secondary">
                                Learn More
                            </Button>
                            <Button
                                title="Sign Up"
                                iconRight={<RxChevronRight/>}
                            >
                                Get Started
                            </Button>
                        </div>
                    </div>
                    <div>
                        <img
                            src="/office.jpg"
                            className="w-full object-cover"
                            alt="Leo in office"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
