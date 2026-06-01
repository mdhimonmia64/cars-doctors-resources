import Image from "next/image";
import React from "react";
import LoginForm from "./components/LoginForm";

export default function LoginPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src="/22989-332257696_medium.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative z-10">
        <h1 className="text-3xl font-bold text-center my-8 text-white">
          Login
        </h1>

        <section className="container mx-auto grid grid-cols-12">
          <div className="col-span-12 md:col-span-6 flex justify-center items-center">
            <Image
              className="hidden md:block"
              src={"/assets/images/login/login.svg"}
              width={460}
              height={500}
              alt="Authentication Image"
            />
          </div>

          <div className="col-span-12 md:col-span-6 flex justify-center items-center">
            <LoginForm />
          </div>

        </section>
      </div>
    </div>
  );
}