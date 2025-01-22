"use client";

import React from "react";

export function Layout194() {
    return (
        <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
                <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
                    <div className="order-2 md:order-1">
                        <img
                            src="/leo-mesh.jpg"
                            className="w-full object-cover"
                            alt="Human Centered AI Engineering"
                        />
                    </div>
                    <div className="order-1 md:order-2">
                        <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                            Why Choose Leo as your SDE?
                        </h3>

                        <p className="md:text-md">
                            <b>1. Autonomous Design</b><br/>
                            Leo excels in crafting efficient and scalable backend code that
                            guarantees robustness and optimal performance. With Leo, you can
                            trust that your software architecture is in the hands of an
                            advanced AI engineer dedicated to delivering excellence.
                        </p>
                        <p>&nbsp;</p>
                        <p className="md:text-md">
                            <b>2. Intelligent Efficiency</b><br/>
                            Gone are the days of spending hours debugging or resolving bottlenecks. Leo analyzes,
                            predicts, and resolves issues with unmatched precision—saving your team valuable time and
                            resources. It’s like having a team member who never sleeps but always delivers.
                        </p>
                        <p>&nbsp;</p>
                        <p className="md:text-md">
                            <b>3. Human-Centric Engineering</b><br/>
                            While powered by advanced AI, Leo’s insights are designed to align with your unique goals.
                            From real-time feedback to collaborative interactions, Leo communicates in a way that feels
                            natural and intuitive, helping bridge the gap between human creativity and technical
                            execution.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
