"use client"
import Image from "next/image";
import React from "react";

const blogs = [
  {
    id: 1,
    title: "How to Maintain Your Car Engine Properly",
    desc: "Regular maintenance can extend your engine life and improve performance.",
    img: "https://i.ibb.co.com/mrJ030b1/3.jpg",
    date: "April 2026",
  },
  {
    id: 2,
    title: "Top 5 Signs Your Car Needs Repair",
    desc: "Don’t ignore warning signs like strange noise or engine light.",
    img: "https://i.ibb.co.com/cST5zpFq/2.jpg",
    date: "March 2026",
  },
  {
    id: 3,
    title: "Why Regular Oil Change is Important",
    desc: "Oil change keeps your engine clean and improves performance.",
    img: "https://i.ibb.co.com/Ld5G5SpK/1.jpg",
    date: "February 2026",
  },
];

export default function BlogSection() {
  return (
    <section className="py-16 px-6 md:px-16 bg-base-200 text-base-content">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-5xl font-bold text-center hover:text-blue-600">
          Latest Blogs
        </h2>
        <p className="text-base-content text-center mt-3 max-w-2xl mx-auto">
          Stay updated with car maintenance tips, repair guides, and expert advice
          from Car Doctor professionals.
        </p>

        <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className=" border border-gray-600 shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300"
            >

              <div className="relative w-full h-[200px]">
                <Image
                  src={blog.img}
                  alt={blog.title}
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-5">
                <p className="text-sm">{blog.date}</p>

                <h3 className="text-xl font-bold mt-1">
                  {blog.title}
                </h3>

                <p className="mt-2 text-sm">
                  {blog.desc}
                </p>

                <button className="mt-4 btn btn-primary btn-sm">
                  Read More
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}