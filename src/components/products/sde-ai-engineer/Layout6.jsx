"use client";

import React from "react";

export function Layout6() {
    return (
        <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
                <div
                    className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
                    <div>
                        <h1 className="rb-5 mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                            Transform Your Development Process with Leo
                        </h1>
                        <p className="mb-6 md:mb-8 md:text-md">
                            Leo is not an AI tool—He is your dedicated engineering partner. Designed to tackle even the
                            most intricate software architectures, Leo works alongside your team to streamline
                            development processes, reduce errors, and ensure efficiency.</p>
                        <p className="mb-6 md:mb-8 md:text-md">
                            With Leo, you’ll no longer feel the pressure of juggling complex backend tasks or tight
                            deadlines. Let Leo handle the heavy lifting, so you can focus on innovation and growth.
                        </p>

                    </div>
                    <div>
                        <img
                            src="/supercharge-backend.jpg"
                            className="w-full object-cover"
                            alt="Relume placeholder image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
