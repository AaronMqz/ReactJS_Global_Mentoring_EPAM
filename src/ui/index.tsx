import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ContenList from "./ContentList";
import { mockData } from "../service/mockData";

export const HomePage = () => {
  return (
    <>
      <Header />
      <ContenList items={mockData.data} />
      <Footer />
    </>
  );
};
