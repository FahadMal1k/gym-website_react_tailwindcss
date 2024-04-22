import React from "react";
import AboutImg1 from "../Images/About1.jpg"
import AboutImg2 from "../Images/About2.jpg"


export default function About () {
    return(
        <section id="about" class="bg-white dark:bg-gray-900">
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">ABOUT US</h2>
            <p class="mb-4">GYMUSLE provides a 24/7 Fitness facility to residents of xyz, as well as surrounding areas to help people reach and maintain their goals. We combine different types of fitness equipment to meet different fitness needs and levels. </p>
            <p>Our Staff, Trainers & Group Exercise Instructors are committed to offering our members a great fitness experience. Whether you’re a mom looking to get back into shape, a marathon runner trying to shave a few minutes off your personal best or just trying to stay healthy we would love to help you realize your potential and meet your goals!</p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
            <img class="w-full rounded-lg" src={AboutImg1} alt="office content 1"></img>
            <img class="mt-4 w-full lg:mt-10 rounded-lg" src={AboutImg2} alt="office content 2"></img>
        </div>
    </div>
</section>
    )
}