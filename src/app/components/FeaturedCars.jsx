"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const cars = [
  {
    id: 1,
    name: "Toyota Supra",
    type: "Sports Car",
    image: "/nice1.jpg",
    price: "$45,000",
    mileage: "12,500 km",
    fuel: "Petrol",
    transmission: "Automatic",
  },
  {
    id: 2,
    name: "BMW M4",
    type: "Luxury Sports",
    image: "/nice2.jpg",
    price: "$68,000",
    mileage: "18,200 km",
    fuel: "Petrol",
    transmission: "Automatic",
  },
  {
    id: 3,
    name: "Mercedes AMG",
    type: "Premium Sedan",
    image: "/nice3.jpg",
    price: "$72,000",
    mileage: "15,800 km",
    fuel: "Petrol",
    transmission: "Automatic",
  },
  {
    id: 4,
    name: "Audi R8",
    type: "Super Car",
    image: "/nice4.jpg",
    price: "$95,000",
    mileage: "9,500 km",
    fuel: "Petrol",
    transmission: "Automatic",
  },
];

const CarCard = ({ car, index, total }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    [180, 0, -40]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    [0.9, 1, 0.95]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.45],
    [0, 0.6, 1]
  );

  return (
    <motion.div
      ref={ref}
      style={{
        y,
        scale,
        opacity,
        zIndex: index + 1,
        top: `${index * 35}px`,
      }}
      className="sticky mx-auto mb-[-100px] w-full aura aura-dual"
    >
      <div className="overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-2xl ">
        <div className="grid items-center md:grid-cols-2">

          <div className="relative h-[280px] overflow-hidden bg-base-200 md:h-[420px] ">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="h-full w-full"
            >
              <Image
                src={car.image}
                alt={car.name}
                fill
                className="object-cover"
              />
            </motion.div>

            <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-black/70 text-lg font-bold text-white backdrop-blur">
              0{index + 1}
            </div>
           
          </div>
          <div className="p-7 md:p-10">
            <h3 className="mt-2 text-3xl font-bold md:text-4xl">
              {car.name}
            </h3>
            <p className="mt-3 text-base-content/60">
              Experience exceptional performance, premium comfort and
              advanced automotive technology.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedCars = () => {
  return (
    <section className="bg-base-200 py-20 md:py-32">

      <div className="container mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            Explore Our Premium Cars
          </h2>

          <p className="mt-4 text-base-content/60">
            Discover our carefully selected collection of premium,
            performance and luxury vehicles.
          </p>
        </motion.div>

        <div className="relative">
          {cars.map((car, index) => (
            <CarCard
              key={car.id}
              car={car}
              index={index}
              total={cars.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;