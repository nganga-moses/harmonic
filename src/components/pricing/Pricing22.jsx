"use client";

import {Button} from "@relume_io/relume-ui";
import { Switch } from '@headlessui/react'
import React, {useState} from "react";
import {BiCheck} from "react-icons/bi";

export function Pricing22() {
    const [isAnnual, setIsAnnual] = useState(false);

    // Pricing values
    const monthlyPrices = {
        startup: 199,
        business: 299,
        enterprise: 499,
    };

    const annualPrices = {
        startup: (monthlyPrices.startup * 0.8).toFixed(0),
        business: (monthlyPrices.business * 0.8).toFixed(0),
        enterprise: (monthlyPrices.enterprise * 0.8).toFixed(0),
    };

    const handleToggle = () => {
        setIsAnnual(!isAnnual);
    };
    return (

        <section id="harmonic" className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
                <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
                    <p className="mb-3 font-semibold md:mb-4">20% on Annual plans.</p>
                    <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                        Pricing Plans
                    </h1>
                    <p className="md:text-md">
                        Find the perfect plan for your engineering needs.
                    </p>
                </div>
                <div className="flex justify-center mt-4">
                    <span className="mr-3 text-sm font-medium">Monthly</span>
                    <Switch checked={isAnnual} onChange={handleToggle}/>
                    <Switch
                        checked={isAnnual}
                        onChange={setIsAnnual}
                        className="group relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 data-[checked]:bg-indigo-600"
                    >
                        <span className="sr-only">Use setting</span>
                        <span
                            aria-hidden="true"
                            className="pointer-events-none inline-block size-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5"
                        />
                    </Switch>
                    <span className="ml-3 text-sm font-medium">Annual</span>
                </div>

                <div className="w-full">
                    <div className="grid grid-cols-3 gap-x-4 bg-white md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-x-8">
                        <div className="hidden md:block"/>
                        <div className="flex h-full flex-col justify-between text-center">
                            <div>
                                <h2 className="text-md font-bold leading-[1.4] md:text-xl">
                                    Start-up
                                </h2>
                                <p className="my-3 text-xl font-bold leading-[1.2] sm:text-2xl md:my-4 md:text-3xl lg:text-4xl">
                                  {isAnnual ? <strike>${monthlyPrices.startup}</strike> : ''}${isAnnual ? annualPrices.startup : monthlyPrices.startup}/user/mo

                                </p>
                                <p>{isAnnual ? "save 20%" : ""}</p>
                                <p>Ideal for early stage startups.</p>
                            </div>
                            <div className="mt-6 md:mt-8">
                                <Button
                                    title="Get started"
                                    className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                                >
                                    Get started
                                </Button>
                            </div>
                        </div>
                        <div className="flex h-full flex-col justify-between text-center">
                            <div>
                                <h2 className="text-md font-bold leading-[1.4] md:text-xl">
                                    Business
                                </h2>
                                <p className="my-3 text-xl font-bold leading-[1.2] sm:text-2xl md:my-4 md:text-3xl lg:text-4xl">
                                     {isAnnual ? <strike>${monthlyPrices.business}</strike> : ''}${isAnnual ? annualPrices.business : monthlyPrices.business}/user/
                                    {isAnnual ? "mo" : "mo"}
                                </p>
                                <p>{isAnnual ? "save 20%" : ""}</p>
                                <p>Perfect for growing teams.</p>
                            </div>
                            <div className="mt-6 md:mt-8">
                            <Button
                                    title="Get started"
                                    className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                                >
                                    Get started
                                </Button>
                            </div>
                        </div>
                        <div className="flex h-full flex-col justify-between text-center">
                            <div>
                                <h2 className="text-md font-bold leading-[1.4] md:text-xl">
                                    Enterprise
                                </h2>
                                <p className="my-3 text-xl font-bold leading-[1.2] sm:text-2xl md:my-4 md:text-3xl lg:text-4xl">
                                     {isAnnual ? <strike>${monthlyPrices.enterprise}</strike> : ''}${isAnnual ? annualPrices.enterprise : monthlyPrices.enterprise}/user/
                                    {isAnnual ? "mo" : "mo"}
                                </p>
                                <p>{isAnnual ? "save 20%" : ""}</p>

                                <p>Best for large organizations.</p>
                            </div>
                            <div className="mt-6 md:mt-8">
                            <Button
                                    title="Get started"
                                    className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                                >
                                    Get started
                                </Button>
                            </div>
                        </div>
                    </div>
                    <h3 className="mt-8 py-5 text-md font-bold leading-[1.4] md:text-xl">
                        Team
                    </h3>

                    <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                        <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                            Max. Team Size
                        </p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                            2
                        </p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                            25
                        </p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                            Unlimited
                        </p>
                    </div>
                    <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                        <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                            Support Response Time
                        </p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                            <BiCheck className="size-6"/>
                        </p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                            <BiCheck className="size-6"/>
                        </p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                            <BiCheck className="size-6"/>
                        </p>
                    </div>
                    <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                        <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                            24/7 Email Support
                        </p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                            <BiCheck className="size-6"/>
                        </p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                            <BiCheck className="size-6"/>
                        </p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                            <BiCheck className="size-6"/>
                        </p>
                    </div>
                    <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                        <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                            Priority Support Access
                        </p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                            <BiCheck className="size-6"/>
                        </p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                            <BiCheck className="size-6"/>
                        </p>
                    </div>
                    <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                        <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                            Dedicated Account Manager
                        </p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                            <BiCheck className="size-6"/>
                        </p>
                    </div>
                    <h3 className="mt-8 py-5 text-md font-bold leading-[1.4] md:text-xl">
                        Leo Capabilities
                    </h3>
                    <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                        <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                            Leo Core Access
                        </p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                            <BiCheck className="size-6"/>
                        </p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                            <BiCheck className="size-6"/>
                        </p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                            <BiCheck className="size-6"/>
                        </p>
                    </div>
                    <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                        <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                            Engineer Type
                        </p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                            SDE Included
                        </p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                            SWE Included
                        </p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                            Choice of SDE, SWE, SRE
                        </p>
                    </div>
                    <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                        <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                            Option to purchase additional Engineer types
                        </p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                            <BiCheck className="size-6"/>
                        </p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                            <BiCheck className="size-6"/>
                        </p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                            <BiCheck className="size-6"/>
                        </p>
                    </div>
                    <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                        <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                            Analytics Tools
                        </p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                            Basic
                        </p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                            Advanced
                        </p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                            Comprehensive
                        </p>
                    </div>
                    <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                        <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                            Github Integration
                        </p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                            <BiCheck className="size-6"/>
                        </p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                            <BiCheck className="size-6"/>
                        </p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                            <BiCheck className="size-6"/>
                        </p>
                    </div>
                    <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                        <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                            Slack Integration
                        </p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">

                        </p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                            <BiCheck className="size-6"/>
                        </p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                            <BiCheck className="size-6"/>
                        </p>
                    </div>
                    <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                        <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                            Audit Trail & Logging
                        </p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                        </p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                        </p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                            <BiCheck className="size-6"/>
                        </p>
                    </div>

                    <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                        <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                            Fine Grained Access Control
                        </p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">

                        </p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                            Limited
                        </p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                            <BiCheck className="size-6"/>
                        </p>
                    </div>
                    <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                        <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                            Deployment Options
                        </p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                            Google Cloud
                        </p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                            Google Cloud, AWS, AZURE
                        </p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                            Google Cloud, AWS, AZURE
                        </p>
                    </div>
                    <h3 className="mt-8 py-5 text-md font-bold leading-[1.4] md:text-xl">
                        Support
                    </h3>
                    <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                        <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                            Training Resources
                        </p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                            Basic
                        </p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                            Intermediate
                        </p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                            Advanced
                        </p>
                    </div>
                    <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                        <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                            Webinars and Workshops
                        </p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                            <BiCheck className="size-6"/>
                        </p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                            <BiCheck className="size-6"/>
                        </p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                            <BiCheck className="size-6"/>
                        </p>
                    </div>
                    <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                        <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                            Documentation and Guides
                        </p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                            <BiCheck className="size-6"/>
                        </p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                            <BiCheck className="size-6"/>
                        </p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                            <BiCheck className="size-6"/>
                        </p>
                    </div>
                    <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                        <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                            Community Forum Access
                        </p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                            <BiCheck className="size-6"/>
                        </p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                            <BiCheck className="size-6"/>
                        </p>
                    </div>
                    <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                        <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                            Personalized Training Sessions
                        </p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                            <BiCheck className="size-6"/>
                        </p>
                        <p className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                            <BiCheck className="size-6"/>
                        </p>
                    </div>
                    <div
                        className="rt-8 mt-8 grid grid-cols-3 gap-x-4 bg-white md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-x-8">
                        <div className="hidden md:block"/>
                        <Button
                            title="Get started"
                            className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                        >
                            Get started
                        </Button>
                        <Button
                            title="Get started"
                            className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                        >
                            Get started
                        </Button>
                        <Button
                            title="Get started"
                            className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                        >
                            Get started
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
