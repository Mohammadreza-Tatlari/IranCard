"use client";
import React, { useCallback, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Cookies from "js-cookie";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";

import useLoginModal from "@/app/hooks/useLoginModal";
import useUserState from "@/app/hooks/useUserState";

import Heading from "../Heading";
import Input from "../Inputs/Input";
import Button from "../Button";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function LoginModal() {
  const loginModal = useLoginModal();
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [isInputWrong, setIsInputWrong] = useState<boolean>(false);
  //this will save username after loggin
  // const [receivedData , setReceivedData] = useState<any>()
  const userState = useUserState();

  var inOneDay = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  //var inOneMinute = new Date(new Date().getTime() + 1 * 60 * 1000); //for testing

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
    
  }, [isLoading, loginModal]);

  

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsloading(true);
    console.log(data);
    //here is where the API call that sends data to backend should be set
    try {
      const response = await axios({
        url: `${process.env.NEXT_PUBLIC_IRANMTAURL}/auth/login`,
        method: "POST",
        data: {
          username: data.name,
          password: data.password,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        const userToken = response.data.jwt;
        const userName = response.data.Name;
        const needToVerify = response.data.needToVerify;
        //WARNING
        //THE JWT ARE ACCESSIBLE FROM CLIENT SIDE. POTENTIAL OF XSS ATTACKS
        Cookies.set("JWTToken", userToken, {
          expires: inOneDay,
          secure: true,
          httpOnly: false,
        });
        Cookies.set("userName", userName, {
          expires: inOneDay,
          secure: true,
          httpOnly: false,
        });
        Cookies.set("needToVerify", needToVerify, {
          expires: inOneDay,
          secure: true,
          httpOnly: false,
        });
        loginModal.onClose();
        toast.success("خوش آمدین", { duration: 1500 });
         //setTimeout(hardReload, 1500);
      } else {
        console.error("Login Failed with status:", response.status);
      }
    } catch (error: any) {
      console.error("Error during API call", error);
      if (error.response.status == 401) {
        toast.error("اطلاعات وارد شده اشتباه است");
        setIsInputWrong(true);
      }
    }

    setIsloading(false);
  };
  function hardReload() {
    window.location.reload();
  }
  //for showing and hiding password
  const toggleShowPass = useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);

  function handleInputChanged() {
    setIsInputWrong(false);
  }

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
              <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-600 text-white outline-none focus:outline-none">
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
                        isInputWrong={isInputWrong}
                        InputChanged={handleInputChanged}
                        required
                      />
                      <Input
                        id="password"
                        label="password"
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        isInputWrong={isInputWrong}
                        InputChanged={handleInputChanged}
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
                        usedIn="loginModal"
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
