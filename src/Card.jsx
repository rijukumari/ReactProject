import React from "react";
import { NavLink } from "react-router-dom";
import images9 from "./asset/images5.jfif";
import images8 from "./asset/images8.jfif";
import images7 from "./asset/images9.jfif";
import images6 from "./asset/images6.jfif";
import images5 from "./asset/images7.jfif";

const Card = () => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={images5} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="font-bold">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to="" className="btn btn-primary">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={images5} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="font-bold">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to="" className="btn btn-primary">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={images6} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="font-bold">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to="" className="btn btn-primary">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={images7} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="font-bold">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to="" className="btn btn-primary">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={images8} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="font-bold">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to="" className="btn btn-primary">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={images9} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="font-bold">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to="" className="btn btn-primary">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
