import React from "react";
import { NavLink } from "react-router-dom";
import image from './asset/image.png'
import Comman from "./Comman"; 

const About = () => {
  return (
   <Comman name="Welcome to About page " imgsrc={image} visit="/contact" btnname ="Contact Now"/>
  );
};

export default About;
