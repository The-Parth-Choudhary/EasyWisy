import { animationCreate } from "@/utils/utils";
import React, {useEffect} from "react";
import BackToTop from "../lib/BackToTop";
import FooterThree from "./footers/footer";
import HeaderThree from "./headers/header";

const WrapperThree = ({ children }) => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate()
    }, 500);
  },[])


  return (
    <>
      <HeaderThree />
      {children}
      <FooterThree />
      <BackToTop />
    </>
  );
};

export default WrapperThree;
