import { FC, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const backgrounds: string[] = [
  "bg-[url('/assets/images/food-background-1.svg')]",
  "bg-[url('/assets/images/food-background-2.svg')]",
  "bg-[url('/assets/images/food-background-3.svg')]",
  "bg-[url('/assets/images/food-background-4.svg')]",
  "bg-[url('/assets/images/food-background-5.svg')]",
];

const LoginLayout: FC = () => {
  const [background, setBackground] = useState<string>("");

  useEffect(() => {
    const randomBackground =
      backgrounds[Math.floor(Math.random() * backgrounds.length)];
    setBackground(randomBackground);
  }, []);

  return (
    <div className="flex flex-row items-center h-screen">
      <div className="w-[25%] bg-[url('/assets/images/login-background.svg')] bg-no-repeat	bg-cover bg-center h-full p-10">
        <Outlet />
      </div>
      <div
        className={`w-[75%] ${background} bg-no-repeat	bg-cover bg-center h-full`}
      />
    </div>
  );
};

export default LoginLayout;
