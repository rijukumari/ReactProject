import React from "react";
import { NavLink } from "react-router-dom";
import images1 from './asset/images1.jfif'
import Comman from "./Comman";

const Home = () => {
  return (
    <Comman  name="Grown your business with " imgsrc={images1} visit="/services" btnname ="Get Started"/>
  );
};

export default Home;
