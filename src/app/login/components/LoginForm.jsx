"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import SocialLogin from "./SocialLogin";

export default function LoginForm() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({email,password})
    toast("submitting....")
    try {
      const response = await signIn("credentials", { email, password, callbackUrl: "/" ,redirect:false,});
      if(response.ok){
        toast.success("Logged In successfully")
        router.push("/");
        form.reset();
      }
      else{
      toast.error("Failed to Log In");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to Log In");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-8 bg-blue-100 p-8 md:p-20 rounded-2xl">
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
        <div className="relative">
          <input
            type={show ? "text" : "password"}
            name="password"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
          <span
            onClick={() => {
              setShow(!show);
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
          >
            {show ? <IoMdEyeOff size={20} /> : <IoMdEye size={20} />}
          </span>
        </div>
      </label>
      <button className="w-full h-12 bg-orange-500 text-white font-bold mt-6 rounded">
        Sign In
      </button>
      <p className="text-center">Or Sign In with</p>
      <SocialLogin />
      <p className="text-center">
        Already have an account?{" "}
        <Link href="/register" className="text-orange-500 font-bold">
          Register
        </Link>
      </p>
    </form>
  );
}

