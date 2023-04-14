"use client";

import FormInput from "../components/input/FormIputs";
import { useState } from "react";
import { signIn } from "next-auth/react";

import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Link from "next/link";

const LoginClient = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        toast.success("Logged in");
        //add router to dashboard
        router.push("/user/dashboard");
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };
  return (
    <>
      {" "}
      <div className="flex flex-col items-center justify-center min-h-screen mx-auto bg-gray-800/60">
        <div className="relative flex flex-col p-5 sm:p-10  rounded-3xl sm:bg-slate-500 sm:w-2/4 lg:w-3/6 xl:w-2/6 sm:shadow space-y-10  ">
          <h1 className="text-xl font-bold text-slate-50 sm:text-black sm:text-3xl ">
            Login to continue
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-5 flex md:p-2.5 p-0 flex-col gap-10"
          >
            <FormInput
              id="email"
              type="email"
              label="Email"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />
            <FormInput
              id="password"
              type="password"
              label="Password"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />
            <button
              type="submit"
              className="bg-pink-400 rounded-md focus:outline-transparent h-12 sm:h-14 cursor-pointer text-lg sm:text-2xl text-white font-semibold hover:-translate-y-1 transition-all duration-150 ease-out"
            >
              Log in
            </button>
          </form>
          <p className="text-base font-medium">
            Don&apos;t have an account?{" "}
            <Link href="/auth/register">Sign up</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginClient;
