"use client";

import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Typewriter from "typewriter-effect";
import WaterEffect from "./Animation/WaterEffect";

export default function BannerPage() {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      showArrows={false}
      className="my-1"
    >
      <div className="relative w-full h-[400px] md:h-[550px] lg:h-[700px] overflow-hidden rounded-2xl">
        <Image
          src="https://i.ibb.co.com/mrJ030b1/3.jpg"
          alt="banner 1"
          fill
          className="object-cover"
        />
        <WaterEffect />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex flex-col justify-center text-left text-white pl-4 md:pl-24 lg:pl-60 max-w-2xl">
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <Typewriter
              className="text-9xl"
              options={{
                strings: ["Affordable", "Price For Car", "Servicing"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="mt-2 md:mt-4 text-[16px] md:text-2xl leading-relaxed">
            There are many variations of passages available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex gap-3 pt-5">
            <button className="btn bg-red-500 text-white border-none">
              Discover More
            </button>
            <button className="btn ">Latest Project</button>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[400px] md:h-[550px] lg:h-[700px] overflow-hidden rounded-2xl">
        <Image
          src="https://i.ibb.co/yFpC9D66/2.jpg"
          alt="banner 2"
          fill
          className="object-cover"
        />
        <WaterEffect />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex flex-col justify-center text-left text-white pl-4 md:pl-24 lg:pl-60 max-w-2xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <Typewriter
              className="text-9xl"
              options={{
                strings: ["Affordable", "Price For Car", "Servicing"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          <p className="mt-2 md:mt-4 text-[16px] md:text-2xl leading-relaxed">
            There are many variations of passages available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex gap-3 pt-5">
            <button className="btn bg-red-500 text-white border-none">
              Discover More
            </button>
            <button className="btn ">Latest Project</button>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[400px] md:h-[550px] lg:h-[700px] overflow-hidden rounded-2xl">
        <Image
          src="https://i.ibb.co.com/cST5zpFq/2.jpg"
          alt="banner 3"
          fill
          className="object-cover"
        />
        <WaterEffect />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex flex-col justify-center text-left text-white pl-4 md:pl-24 lg:pl-60 max-w-2xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <Typewriter
              className="text-9xl"
              options={{
                strings: ["Affordable", "Price For Car", "Servicing"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          <p className="mt-2 md:mt-4 text-[16px] md:text-2xl leading-relaxed">
            There are many variations of passages available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex gap-3 pt-5">
            <button className="btn bg-red-500 text-white border-none">
              Discover More
            </button>
            <button className="btn ">Latest Project</button>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[400px] md:h-[550px] lg:h-[700px] overflow-hidden rounded-2xl">
        <Image
          src="https://i.ibb.co.com/hFN7BKKx/person.jpg"
          alt="banner 4"
          fill
          className="object-cover"
        />
        <WaterEffect />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex flex-col justify-center text-left text-white pl-4 md:pl-24 lg:pl-60 max-w-2xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <Typewriter
              className="text-9xl"
              options={{
                strings: ["Affordable", "Price For Car", "Servicing"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="mt-2 md:mt-4 text-[16px] md:text-2xl leading-relaxed">
            There are many variations of passages available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex gap-3 pt-5">
            <button className="btn bg-red-500 text-white border-none">
              Discover More
            </button>
            <button className="btn ">Latest Project</button>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
