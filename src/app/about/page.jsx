
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AboutSection() {
  return (
    <section className="py-16 px-6 md:px-16 bg-base-100">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="relative w-full h-[300px] md:h-[400px]"
        >
          <Image
            src="https://i.ibb.co.com/hFN7BKKx/person.jpg"
            alt="Car Doctor Service"
            fill
            className="rounded-2xl object-cover shadow-lg"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-base-content hover:text-blue-500">
            About Car Doctor
          </h2>

          <p className=" mt-4 leading-relaxed text-base-content">
            Car Doctor is a modern car service platform designed to make vehicle
            maintenance simple, fast, and reliable. We provide high-quality car
            repair, diagnostics, and maintenance services with professional
            mechanics and advanced tools.
          </p>

          <p className=" mt-4 leading-relaxe text-base-content">
            Our goal is to ensure your car runs smoothly and safely on the road.
            From engine diagnostics to full servicing, we deliver trusted
            solutions at an affordable price.
          </p>

          <div className="mt-6 flex gap-4">
            <Link href={'/'} className="btn">Learn More</Link>
            <Link href={"/components/ServiceSection"} className="btn">
              Our Service
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
}
