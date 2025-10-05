"use client";

// import Link from "next/link";
import Footer from "@/components/Footer";
const Page: React.FC<{ children: React.ReactNode, menuList: any }> = ({ children, menuList }) => {
  return (
    <>
      <div className="page-wrapper">
        {children}
        <Footer menuList={menuList} />
      </div>
      <a className="btn-backtotop" href="#">
        BACK TO TOP
      </a>
    </>
  );
};

export default Page;
