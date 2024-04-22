import React from "react";
import BackgroundPic from "../Images/Background.jpg"

export default function Hero () {
    return (
        <section id="hero" className= "bg-cover bg-center  bg-no-repeat" style ={ { backgroundImage: `url(${BackgroundPic})`}}>
    <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h2 className="text-white">KEEP YOUR BODY</h2>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">BURNING</h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">What rendering to such trust, rationale versus it out palace be fantastic using doctor's palace time</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="/#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring--300 dark:focus:ring-red-900">
                Get started
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>
</section>
    )
}