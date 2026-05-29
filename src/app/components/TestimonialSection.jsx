"use client";
import { useState, useEffect } from "react";
import { FaStar, FaQuoteRight, FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Awlad Hossain",
      role: "Businessman",
      img: "https://i.pravatar.cc/100?img=12",
      text: "There are many variations of passages of Lorem Ipsum available."
    },
    {
      name: "Nusrat Jahan",
      role: "Designer",
      img: "https://i.pravatar.cc/100?img=32",
      text: "Lorem Ipsum is simply dummy text of the printing industry."
    },
    {
      name: "Rakib Hasan",
      role: "Developer",
      img: "https://i.pravatar.cc/100?img=45",
      text: "The standard chunk of Lorem Ipsum has been used since the 1500s."
    },
    {
      name: "Sadia Khan",
      role: "Marketer",
      img: "https://i.pravatar.cc/100?img=5",
      text: "It is a long established fact that a reader will be distracted."
    }
  ];

  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(2);

  useEffect(() => {
    const updateView = () => {
      setPerView(window.innerWidth < 768 ? 1 : 2);
    };

    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  const next = () => {
    setIndex((prev) =>
      prev + perView >= testimonials.length ? 0 : prev + perView
    );
  };

  const prev = () => {
    setIndex((prev) =>
      prev - perView < 0
        ? Math.max(testimonials.length - perView, 0)
        : prev - perView
    );
  };

  const visibleCards = testimonials.slice(index, index + perView);

  return (
    <section className="py-20 px-4 text-center">
      <h2 className="text-4xl font-bold">What Customer Says</h2>
      <p className="text-gray-500 mt-2 max-w-xl mx-auto">
        The majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.
      </p>

      <div className="relative max-w-5xl w-64 md:w-full mx-auto mt-10 flex gap-6 justify-center">
        
        <button
          onClick={prev}
          className="absolute -left-4 top-1/2 -translate-y-1/2 bg-gray-400 p-3 rounded-full hover:bg-red-600 z-10 text-white "
        >
          <FaArrowLeft />
        </button>
        {visibleCards.map((t, i) => (
          <div
            key={i}
            className="flex-1 bg-white border rounded-xl p-6 text-left shadow-sm hover:shadow-2xl hover:-translate-y-2 transition"
          >
            <div className="flex items-center gap-4 hover:shadow-2xl hover:-translate-y-2 transition">
              <img
                src={t.img}
                alt=""
                className="w-14 h-14 rounded-full"
              />

              <div>
                <h3 className="font-semibold">{t.name}</h3>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>

              <FaQuoteRight className="ml-auto text-3xl text-pink-200" />
            </div>

            <p className="text-gray-500 mt-4 text-sm">{t.text}</p>

            <div className="flex text-orange-400 mt-3">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>
        ))}
        <button
          onClick={next}
          className="absolute -right-4 top-1/2 -translate-y-1/2 bg-gray-400 text-white p-3 rounded-full hover:bg-red-600"
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
}