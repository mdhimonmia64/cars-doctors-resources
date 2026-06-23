import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowRight } from "react-icons/go";

export default async function ServicesSection() {

  const serviceCollection = dbConnect(collectionNameObj.servicesCollection);
  const data = await serviceCollection.find({}).toArray();

  return (
    <div id="ser" className="container mx-auto">
      <h2 className="md:text-3xl lg:text-5xl  font-bold leading-tight mb-4 text-center ">
        Our Service Area
      </h2>
      <p className="text-center pb-5">
       the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. {" "}
      </p>
      <div className="grid grid-cols-12 gap-8 lg:gap-10">
        {data.map((item) => {
          return (
            <div
              key={item?._id?.toString()}
              className="col-span-12 md:col-span-6 lg:col-span-4"
            >
              <div className="card bg-base-100 shadow-sm">
                <figure className="px-5 pt-5">
                  <Image
                    src={item?.img || "/fallback.png"}
                    width={400}
                    height={308}
                    alt="card image"
                    className="rounded-2xl"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-3xl font-semibold text-base-content">
                    {item?.title || 'service title'}
                  </h2>
                  <div className="flex gap-28 items-center text-red-500">
                    <p className="text-2xl ">Price : ${item?.price}</p>
                    <Link href={`/services/${item?._id}`}>
                      <GoArrowRight size={30} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
