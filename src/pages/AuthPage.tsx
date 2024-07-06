import { useState } from "react";
import AppInput from "../ui/AppInput";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "src/services/authService";
import toast from "react-hot-toast";

const AuthPage = () => {
  const {
    mutateAsync,
    isPending,
    data: otpResponse,
  } = useMutation({
    mutationFn: getOtp,
  });
  const [phoneNumber, setPhoneNumber] = useState("");
  console.log(otpResponse, isPending);

  const getOtpHandler = async () => {
    try {
      const data = await mutateAsync({ mobile: phoneNumber, force_otp: false });
      console.log("test", data);
    } catch (error) {
      toast.error("error mide");
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="inline-flex justify-center mb-10 mt-20">
        <img src="/assets/images/logo.svg" alt="logo" />
      </div>
      <p>برای سفارش غذا شماره همراه خود را وارد کنید.</p>
      <AppInput
        id="telephone"
        label="تلفن همراه"
        value={phoneNumber}
        placeholder="*********۰۹"
        className="w-[100%]"
        inputmode="tel"
        maxLength={11}
        onChange={(event) => setPhoneNumber(event.target.value)}
      />
      <button
        className="btn btn-error text-white mt-8"
        disabled={phoneNumber.length < 11}
        onClick={getOtpHandler}
      >
        ادامه
      </button>
    </div>
  );
};

export default AuthPage;
