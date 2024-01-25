import React from "react";
import { Header } from "../Header/component";
import { Footer } from "../Footer/component";

export const Layout = ({ children }) => {
  return (
    <div className="">
      <Header />
      {children}
      <Footer />
    </div>
  )
}