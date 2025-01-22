"use client";

import {Button} from "@relume_io/relume-ui";
import React from "react";
import {RxChevronRight} from "react-icons/rx";

export function Layout16() {
    return (
        <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
                <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
                    <div>
                        <p className="mb-3 font-semibold md:mb-4">Efficiency</p>
                        <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                            How Leo Works for You
                        </h1>
                        <p className="mb-5 text-base md:mb-6 md:text-md">
                            With Leo, experience a significant boost in productivity as tasks
                            are completed with precision and speed. Say goodbye to human error
                            and hello to reliable, efficient project execution.
                        </p>
                        <ul className="grid grid-cols-1 gap-4 py-2">
                            <li className="flex self-start">
                                <div className="mr-4 flex-none self-start">
                                    <img
                                        src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                        alt="Relume logo 1"
                                        className="size-6"
                                    />
                                </div>
                                <span>Leo starts by understanding the goals and requirements of your project. Whether you’re a startup or an established enterprise, Leo ensures every solution is customized for your success.</span>
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
                  From crafting detailed architecture to automating repetitive backend tasks, Leo delivers solutions that adapt to your scale and needs.
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
                  Leo doesn’t stop once the code is written. It continues to monitor and optimize your backend to ensure peak performance.
                </span>
                            </li>
                        </ul>

                    </div>
                    <div>
                        <img
                            src="/efficiency.jpg"
                            className="w-full object-cover"
                            alt="Efficient Proccesses with Leo"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
