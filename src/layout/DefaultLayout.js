import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router";

function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />

      {/* <RenderRouter /> */}

      <Footer />
    </>
  );
}

export default DefaultLayout;
