import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    number: "",
    email: "",
    msg: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ... preVal,
        [name]: value,
      };
    });
  };

  const fromSubmit = (e) => {
    e.preventDefault();
    alert("Sussecfuly");
  };

  return (
    <>
      <div className="my-6">
        <h1 className="text-center text-3xl font-bold">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto ">
            <form onSubmit={fromSubmit}>
              <div class="mb-3">
                <label class="form-label">
                  FullName
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="fullName"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter your Name"
                />
              </div>
              <div class="mb-3">
                <label  class="form-label">
                  Phone
                </label>
                <input
                  type="mobail number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name=" number"
                  value={data.number}
                  onChange={InputEvent}
                  placeholder="Mobail Number"
                />
              </div>
              <div class="mb-3">
                <label  class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="Enter your Email"
                />
              </div>
              <div class="mb-3">
                <label  class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                  rows="3"
                ></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-primary text-black" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
