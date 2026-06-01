import Image from "next/image";
import React from "react";
import { MdStarRate } from "react-icons/md";
import Marquee from "react-fast-marquee";

export default async function ProductSection() {
  //   const productCollection = dbConnect(collectionNameObj.productCollection);
  //   const data = await productCollection.find({}).toArray();

  const data = [
  {
    service_id: "01",
    title: "Car Engine Plug",
    img: "https://i.ibb.co/fVStFHYF/6.png",
    price: "50.00",
    description:
      "Professional engine plug replacement service for better engine performance and smooth driving experience.",
  },

  {
    service_id: "02",
    title: "Car Tire Change",
    img: "https://i.ibb.co/qYSFbvfw/3.png",
    price: "80.00",
    description:
      "High-quality tire replacement and balancing service to ensure maximum road safety and comfort.",
  },

  {
    service_id: "03",
    title: "Battery Replacement",
    img: "https://i.ibb.co/vxd5HKSv/1.png",
    price: "120.00",
    description:
      "Reliable battery replacement service with premium batteries for long-lasting vehicle performance.",
  },

  {
    service_id: "04",
    title: "Engine Oil Change",
    img: "https://i.ibb.co/m5Q4Z1Fd/2.png",
    price: "40.00",
    description:
      "Premium engine oil changing service to improve engine efficiency and extend vehicle lifespan.",
  },

  {
    service_id: "05",
    title: "Brake Repair",
    img: "https://i.ibb.co/DngFsbS/5.png",
    price: "95.00",
    description:
      "Advanced brake inspection and repair service for safe and reliable driving performance.",
  },

  {
    service_id: "06",
    title: "Electrical System",
    img: "https://i.ibb.co/21jkqyL6/4.png",
    price: "150.00",
    description:
      "Complete electrical diagnostics and repair service for modern cars and automotive systems.",
  },
];

  return (
    <div className="container mx-auto ">
      <Marquee speed={100}>
        <h2 className="md:text-3xl lg:text-5xl  font-bold leading-tight mb-4 text-center ">
          Browse Our Products
        </h2>
      </Marquee>
      <p className="text-center pb-5">
        the majority have suffered alteration in some form, by injected humour,
        or randomised <br /> words which don't look even slightly
        believable.{" "}
      </p>
      <div className="grid grid-cols-12 gap-8 lg:gap-10">
        {data.map((item) => {
          return (
            <div
              key={item?.service_id}
              className="col-span-12 md:col-span-6 lg:col-span-4 w-80 md:w-full text-base-content"
            >
              <div className="card bg-base-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition rounded-4xl">
                <figure className="px-5 pt-5  h-[200px] md:h-[250px] lg:h-[300px] relative">
                  <Image
                    src={item?.img || "/fallback.jpg"}
                    fill
                    alt="card image"
                    className="rounded-2xl object-cover p-5 hover:bg-gradient-to-b from-red-0 to-orange-100"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <div className="flex gap-2">
                    <MdStarRate size={20} className="text-orange-400" />
                    <MdStarRate size={20} className="text-orange-400" />
                    <MdStarRate size={20} className="text-orange-400" />
                    <MdStarRate size={20} className="text-orange-400" />
                  </div>
                  <h2 className="card-title text-3xl font-semibold">
                    {item?.title}
                  </h2>
                  <p className="text-2xl text-red-500">${item?.price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
