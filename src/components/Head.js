import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer"
          onClick={() => toggleMenuHandler()}
          alt="menu"
          src="https://tse3.mm.bing.net/th/id/OIP.6E_njRMJUwSjSkWsmqeWPAAAAA?rs=1&pid=ImgDetMain"
        />
        <img
          className="h-8 mx-2"
          alt="logo"
          src="https://tse3.mm.bing.net/th/id/OIP.r4kJoxYZN2_2tQjUdRdtkQHaGF?rs=1&pid=ImgDetMain"
        />
      </div>
      <div className="col-span-10 text-center">
        <input
          type="text"
          className="w-1/2 border border-gray-400 rounded-l-full"
        />
        <button className="border border-gray-400 p-2 rounded-r-full">
          search
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://www.logolynx.com/images/logolynx/4b/4beebce89d681837ba2f4105ce43afac.png"
        />
      </div>
    </div>
  );
};

export default Head;
