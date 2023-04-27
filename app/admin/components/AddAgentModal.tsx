"use Client";

import axios from "axios";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import FormInput from "@/app/components/input/FormIputs";
import Modal from "@/app/components/Modal";
import { useModalHook } from "@/app/hooks/useModalHook/useCustomerModal";
const AddAgentModal = () => {
  const addAgentModal = useModalHook();
  const [isLoading, setIsLoading] = useState(false);

  // use react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
  });
  //Form onSubmit function
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    const url = "/api/register";
    //send data using axios
    axios
      .post(url, data)
      .then(() => {
        addAgentModal.onClose();
      })
      .then(() => {
        addAgentModal.onClose();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const modalBody = (
    <div className="flex flex-col">
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
    </div>
  );
  return (
    <Modal
      disabled={isLoading}
      isOpen={addAgentModal.isOpen}
      title="Add Customer"
      actionLabel="Continue"
      onClose={addAgentModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={modalBody}
    />
  );
};

export default AddAgentModal;
