"use client";

import {Button} from "@relume_io/relume-ui";
import React from "react";
import {useNavigate} from "react-router-dom";

export function Header36() {
    const navigate = useNavigate(); // React Router's navigation hook

    return (
        <section
            id="Leo"
            className="grid grid-cols-1 items-center gap-y-16 pt-16 md:pt-24 lg:grid-cols-2 lg:pt-0"
        >
            <div className="mx-[5%] sm:max-w-md md:justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end">
                <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl  animate-fadeInSlide">
                    Meet Leo
                </h1>
                <p className="md:text-md  animate-fadeInSlide delay-200">
                    Your Autonomous AI Engineering Partner.</p><br/>
                <p className="md:text-md animate-fadeInSlide delay-400">Leo, the world’s most advanced autonomous
                    AI Engineer is designed to adapt to your unique project needs, collaborating seamlessly, enhancing
                    productivity, and empowering innovation like never before. At Harmonic Labs, we’re revolutionizing
                    how engineering is done. Ready to take your engineering to the next
                    level?
                </p>
                <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                    <Button title="Learn More about Leo">Learn More</Button>
                    <Button title="Get Started with Leo" variant="secondary" onClick={() => navigate("/get-started")} >
                        Get started
                    </Button>
                </div>
            </div>
            <div>
                <img
                    src="/leo-2.jpg"
                    alt="Relume placeholder image"
                    className="w-full object-cover lg:h-screen lg:max-h-[60rem]  animate-fadeIn delay-50"
                />
            </div>
        </section>
    );
}
