"use client";
import React, { useCallback, useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";

import { useForm, FieldValues, SubmitHandler } from "react-hook-form";

import useLoginModal from "@/app/hooks/useLoginModal";

import Heading from "../Heading";
import Input from "../Inputs/Input";
import Button from "../Button";

export default function LoginModal() {
  const loginModal = useLoginModal();
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      password: "",
    },
  });
  //redundent may get deletion
  // useEffect(() => {}, [loginModal.isOpen]);

  //close the modal and makes a delay
  const handleClose = useCallback(() => {
    if (isLoading) {
      return null;
    }
    // setShowModal(false)
    loginModal.onClose();
    console.log(loginModal.isOpen);
  }, [isLoading, loginModal]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsloading(true);
    //here is where the API call that sends data to backend should be set
  };

  const toggleShowPass = useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);
  //for showing and hiding password
  return (
    <>
      {loginModal.isOpen && (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-700/60">
          <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
            <div
              className={`duration-300 h-full${
                loginModal.isOpen ? "translate-y-0" : "translate-y-100"
              } ${loginModal.isOpen ? "opacity-100" : "opacity-0"}`}
            >
              <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
                  <button
                    className="p-1 border-0 hover:opacity-70 transition absolute left-9"
                    onClick={handleClose}
                  >
                    <IoMdClose size={18} />
                  </button>
                  <div className="text-lg font-semibold">Login</div>
                </div>
                <div>
                  {/* Body Content Start*/}
                  <div className="relative p-6 flex-auto">
                    <div className="flex flex-col gap-4">
                      <Heading
                        title="Welcome to IranMTA"
                        subtitle="Login to your Account"
                      />
                      <Input
                        id="name"
                        label="name"
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        required
                      />
                      <Input
                        id="password"
                        label="password"
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        type={showPassword ? "password" : ""}
                        required
                      />
                      <div className="flex flex-row gap-1">
                        <p>show Password</p>
                        <input type="checkbox" onClick={toggleShowPass} />
                      </div>
                    </div>
                    {/* End Of Body */}
                  </div>
                  {/* Start of Footer */}
                  <div className="flex flex-col gap-2 p-6">
                    <div className="flex flex-row items-center gap-4 w-full justify-center">
                      {/* Primary */}
                      <Button
                        disabled={isLoading}
                        label="Continue"
                        onClick={handleSubmit(onSubmit)}
                      />
                    </div>
                  </div>
                  {/* End of Footer */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
