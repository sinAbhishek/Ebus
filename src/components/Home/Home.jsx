import React from "react";
import Navbar from "../Navbar/Navbar";
import { IoLocationOutline } from "react-icons/io5";
import "./home.css";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className=" w-screen h-screen flex justify-center mt-8">
        <div className=" w-4/5 h-full ">
          <div className="w-full h-2/3 relative flex justify-center">
            <img
              className=" w-full h-full bg-cover rounded-3xl"
              src="./wc23.png"
              alt=""
            />
            <div className="det-1 w-4/5 bg-white h-32 absolute -bottom-16 rounded-3xl flex items-center">
              <div className=" flex flex-col w-max mt-8 ml-4  h-full ">
                <div className=" flex items-center">
                  <div className=" bg-slate-200 flex justify-center items-center rounded-full p-1">
                    <IoLocationOutline color=" #2256f2" size={".9rem"} />
                  </div>

                  <h1 className=" text-2xl ml-2 text-slate-800">From City</h1>
                </div>
                <input
                  type="text"
                  placeholder="From City"
                  style={{ border: "none", borderBottom: "1px solid gray" }}
                  className=" text-slate-500 outline-none  p-2 ml-8 mt-4"
                />
              </div>
              <div className="  border border-l-slate-300 h-2/3 ml-8 "></div>
              <div className=" flex flex-col w-max mt-8 ml-4  h-full ">
                <div className=" flex items-center">
                  <div className=" bg-slate-200 flex justify-center items-center rounded-full p-1">
                    <IoLocationOutline color=" #2256f2" size={".9rem"} />
                  </div>

                  <h1 className=" text-2xl ml-2 text-slate-800">To City</h1>
                </div>
                <input
                  type="text"
                  placeholder="To City"
                  style={{ border: "none", borderBottom: "1px solid gray" }}
                  className=" text-slate-500 outline-none  p-2 ml-8 mt-4"
                />
              </div>
              <div className="  border border-l-slate-300 h-2/3 ml-8 "></div>
              <div className=" flex flex-col w-max mt-8 ml-4  h-full ">
                <div className=" flex items-center">
                  <h1 className=" text-2xl ml-2 text-slate-800">Date</h1>
                </div>
                <input
                  type="text"
                  placeholder="To City"
                  style={{ border: "none", borderBottom: "1px solid gray" }}
                  className=" text-slate-500 outline-none  p-2 ml-8 mt-4"
                />
              </div>
              <div className="  border border-l-slate-300 h-2/3 ml-8 "></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
