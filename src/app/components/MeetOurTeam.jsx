"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function MeetOurTeam() {
  const data = [
  {
    "title": "Car Engine Plug",
    "img": "https://i.ibb.co.com/Ld5G5SpK/1.jpg",
    "engine": "Engine Expert"
  },
  {
    "title": "Brake System Kit",
    "img": "https://i.ibb.co.com/mrJ030b1/3.jpg",
    "engine": "Brake Master"
  },
  {
    "title": "Air Filter Pro",
    "img": "https://i.ibb.co.com/cST5zpFq/2.jpg",
    "engine": "Filter Expert"
  },
  {
    "title": "Oil Change Set",
    "img": "https://i.ibb.co.com/hFN7BKKx/person.jpg",
    "engine": "Oil Specialist"
  },
  {
    "title": "Car Battery Ultra",
    "img": "https://i.ibb.co.com/yFpC9D66/4.jpg",
    "engine": "Battery Expert"
  },
  {
    "title": "Spark Plug Max",
    "img": "https://i.ibb.co.com/6c27ftLc/2.jpg",
    "engine": "Ignition Expert"
  },
  {
    "title": "Radiator Cool Pro",
    "img": "https://i.ibb.co.com/VYCXQmmK/3.jpg",
    "engine": "Cooling Expert"
  }
];

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl md:text-3xl lg:text-5xl  font-bold leading-tight text-center mt-10 hover:text-orange-400">
        Meet Our Team
      </h2>
      <p className="text-center py-5 px-2">
        the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable.
      </p>
      <Swiper 
        slidesPerView={3}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          320: { slidesPerView: 1 },
          375: { slidesPerView: 1 },
          425: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-4 rounded-xl shadow-md hover:-translate-y-1 transition ">
              <Image
                src={item?.img}
                width={300}
                height={200}
                alt="team"
                className="w-full rounded-lg"
              />

              <h3 className="mt-4 font-semibold text-2xl text-center">{item?.title}</h3>
              <p className="text-gray-400 text-sm mb-3 text-center">{item?.engine}</p>

              <div className="flex justify-center gap-3">
                <a className="bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-full">
                  <FaFacebookF />
                </a>
                <a className="bg-sky-400 text-white w-8 h-8 flex items-center justify-center rounded-full">
                  <FaTwitter />
                </a>
                <a className="bg-blue-700 text-white w-8 h-8 flex items-center justify-center rounded-full">
                  <FaLinkedinIn />
                </a>
                <a className="bg-pink-500 text-white w-8 h-8 flex items-center justify-center rounded-full">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}