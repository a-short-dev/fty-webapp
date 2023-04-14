"use client";
import FormInput from "@/app/components/input/FormIputs";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const RegisterClient = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/register", data)
      .then(() => {
        toast.success("Registered!");
      })
      .catch((error) => {
        toast.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen mx-auto bg-gray-800/60">
      <div className="relative flex flex-col p-5 sm:p-10 sm:bg-white   rounded-3xl sm:w-2/4 lg:w-3/6 xl:w-2/6 sm:shadow space-y-10  ">
        <h1 className="text-xl font-bold text-slate-50 sm:text-black sm:text-3xl ">
          Create an account
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-5 flex md:p-2.5 p-0 flex-col gap-10"
        >
          <FormInput
            id="firstName"
            type="text"
            label="First name"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <FormInput
            id="lastName"
            type="text"
            label="Last name"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
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
            id="phone"
            type="tel"
            label="phone"
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
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterClient;
