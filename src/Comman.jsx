import React from "react";
import { NavLink } from "react-router-dom";
// import image from './asset/images1.jfif'

const Comman = (props) => {
  return (
    <section className="d-flex align-items-center">
      <div className="container-fluid ">
        <div className="row">
         <div className="col-10 mx-auto">
          <div className="row">
          <div className="col-md-6 pt-5  pt-lg-0 order-2 order-lg-1 d-flex justify-center flex-col">
          <h1 className="text-4xl  font-semibold"> {props.name}
          <br/> with{" "}
          <strong className="text-blue-400">Rahul Saikh</strong>
          </h1>
          <h2 className="my-3 text-xl">
          We are team of talented developer making webdites
          </h2>
          <div className="mt-9">
          <NavLink to={props.visit}className="bg-blue-400 p-2 pl-12 cursor-pointer rounded-full">
           {props.btnname}
          </NavLink>
          </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 header-img">
          <img src={props.imgsrc} className ='w-96 h-80 mt-24' alt="img"/>
          </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comman;
