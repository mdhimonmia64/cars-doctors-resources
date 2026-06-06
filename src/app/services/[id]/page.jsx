import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default async function ServiceDetailsPage({params}) {
    const p = await params;
    const res = await fetch(`http://localhost:3000/api/service/${p.id}`);
    const data = await res.json();
  return (
    <div>
      <section className="flex justify-center">
        <figure className=" relative " data-aos="zoom-in">
          <Image
            src={"/assets/images/checkout/checkout.png"}
            width={1537}
            height={300}
            alt="service details banner"
          />
          <div className="transparent-layer overlay-bg rounded-2xl absolute w-full h-full top-0">
            <div className="w-full h-full font-bold text-2xl md:text-4xl lg:text-6xl flex items-center ps-5 md:ps-20 lg:ps-36">
              <div>
                <h1 className="text-white">Service Details</h1>
              </div>
            </div>
          </div>
        </figure>
      </section>
      <section className="container mx-auto grid grid-cols-12 gap-1 md:gap-4 pt-5 md:pt-16">
        <div className="col-span-9 space-y-4 md:space-y-10 p-3 md:p-0">
          <div className="relative w-full h-[200px] md:h-[400px] overflow-hidden">
            <Image
              className="rounded-2xl object-cover animate-float"
              src={data?.img}
              fill
              alt="service image"
            />
          </div>
          <h1 className="font-bold text-2xl md:text-3xl">{data.title}</h1>
          <p className="text-justify">{data?.description}</p>
        </div>
        <div
          className="col-span-3 "
        >
          <Link href={`/checkout/${data._id}`}>
            <button className="w-full text-white h-9 bg-orange-500 cursor-pointer rounded">
              Checkout
            </button>
          </Link>
          <p className="text-center text-[15px] md:text-xl font-bold pt-3">
            Price: $ {data?.price}
          </p>
        </div>
      </section>
    </div>
  )
}
