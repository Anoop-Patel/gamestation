"use client";
import { usePathname } from "next/navigation";

const IsAuthPage = () => {
  const pathname = usePathname();

  const signInPath = "/signin";
  const signUpPath = "/signup";

  const isAuthPage = pathname === signInPath || pathname === signUpPath;

  return isAuthPage;
};

export default IsAuthPage;
