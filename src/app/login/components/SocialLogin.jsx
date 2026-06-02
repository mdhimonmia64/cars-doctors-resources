import { signIn } from "next-auth/react";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

export default function SocialLogin() {
    const handleSocialLogin = async (providerName) => {
        console.log("social login clicked for", providerName);
        const result = await signIn(providerName, {redirect: false})
        console.log(result);
    };
  return (
    <div className="flex items-center justify-center gap-8">
      <p onClick={() => handleSocialLogin("google")}><FcGoogle size={35} /></p>
      <p onClick={() => handleSocialLogin("github")}><BsGithub size={30} /></p>
    </div>
  );
}
