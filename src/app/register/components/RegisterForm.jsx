"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
// import { registerUser } from "@/app/actions/auth/registerUser";
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
// import SocialLogin from "@/app/login/components/SocialLogin";

export default function RegisterForm() {
  const [show, setShow] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    await registerUser({ name, email, password });
    alert('Register successfully')
    form.reset()
  };
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-8 bg-blue-100 p-8 md:p-20 rounded-2xl">
      <label className="form-control w-full">
        <div className="label w-full">
          <span className="label-text  font-bold">Name</span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
          name="name"
        />
      </label>
      <label className="form-control w-full">
        <div className="label w-full">
          <span className="label-text  font-bold">Email</span>
        </div>
        <input
          type="text"
          name="email"
          placeholder="Type here"
          className="input input-bordered w-full"
        />
      </label>
      <label className="form-control w-full">
        <div className="label w-full">
          <span className="label-text font-bold">Password</span>
        </div>
        <div className="relative ">
          <input
            type={show ? "text" : "password"}
            name="password"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
          <span onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
            {show ? <IoMdEyeOff size={20}/> : <IoMdEye size={20}/>}
          </span>
        </div>
      </label>
      <button className="w-full h-12 bg-orange-500 text-white font-bold mt-6 rounded">
        Sign Up
      </button>
      <p className="text-center">Or Sign In with</p>
      <p className="text-center">
        Don't Have an account?{" "}
        <Link href="/login" className="text-orange-500 font-bold">
          Login
        </Link>
      </p>
    </form>
  );
}
