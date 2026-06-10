"use client";

import Image from "next/image";
import Typewriter from "typewriter-effect";

export default function AboutSection() {
  return (
    <div className="bg-gray-200 dark:bg-base-200  text-black container mx-auto rounded-2xl my-10">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="relative" data-aos="fade-down">
          <div className="w-[75%] hover-3d">
            <Image
              src={"/assets/images/about_us/person.jpg"}
              alt="mechanic"
              width={400}
              height={500}
              className="rounded-xl"
            />
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="absolute bottom-[-40px] lg:right-[100px] right-0 w-[60%] md:w-[60%] lg:w-[40%] border border-white rounded-xl shadow-lg hover-3d">
            <Image
              src={"/assets/images/about_us/parts.jpg"}
              alt="parts"
              width={300}
              height={300}
              className="rounded-xl"
            />
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl lg:text-5xl  font-bold leading-tight mb-4">
            <Typewriter
              className="text-9xl"
              options={{
                strings: [
                  "We are qualified",
                  "& of experience",
                  "in this field",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>

          <p className="text-gray-600 mb-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly
            believable.
          </p>

          <p className="text-gray-600 mb-6">
            The majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly
            believable.
          </p>

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 md:px-6 py-2 md:py-3 rounded-lg font-semibold">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
}
