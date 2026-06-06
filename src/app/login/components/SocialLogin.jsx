"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

export default function SocialLogin() {
  const router = useRouter();
  const session = useSession();
    const handleSocialLogin =(providerName) => {
        signIn(providerName);
    };
    useEffect(() => {
      if(session.status == "authenticated"){
        router.push("/");
        toast.success("Successfully Logged In");
      }
    })
  return (
    <div className="flex items-center justify-center gap-8">
      <p onClick={() => handleSocialLogin("google")}><FcGoogle size={35} /></p>
      <p onClick={() => handleSocialLogin("github")}><BsGithub size={30} /></p>
    </div>
  );
}
