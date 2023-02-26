import React from "react";
import "./Bcom.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Bcom() {
  return (
    <div className="wraper">
      {/* 1 text */}
      <p className="text-center text-[#898989] p-2">Select Your Subject here</p>
      {/* buttons  */}
      <div className="flex flex-row gap-5 flex-wrap justify-evenly">
        <button className="text-[#2f80ed] opacity-[73%] font-bold shadow-md px-14 py-5 rounded-md border bgblue">
          B. Com
        </button>
        <button className="text-[#2f80ed] opacity-[73%] font-bold shadow-md px-14 py-5 rounded-md border bgblue">
          M. Com
        </button>
        <button className="text-[#2f80ed] opacity-[73%] font-bold shadow-md px-14 py-5 rounded-md border bgblue">
          B.A
        </button>
        <button className="text-[#2f80ed] opacity-[73%] font-bold shadow-md px-14 py-5 rounded-md border bgblue">
          LLB
        </button>
        <button className="text-[#2f80ed] opacity-[73%] font-bold shadow-md px-14 py-5 rounded-md border bgblue">
          B. Sc
        </button>
      </div>
      {/* text after buttons */}
      <div className="text-[#c8c8c8] text-center pt-12 text-[13px]">
        Previous Year Question Papers for B.Com (Both CBCS and Regular)
      </div>
      <div className="text-[#3a3a3a] text-4xl font-semibold text-center pt-4">
        Bachlor of Commerce
      </div>
      <div className="text-[#c8c8c8] text-center pt-6 text-[14px]">
        Under CBCS System
      </div>
      {/* semester buttons */}
      <div className="flex flex-wrap flex-row gap-7 justify-start ml-5 pt-5">
        <button className="font-bold text-[#959595] px-6 py-4 shadow-md bg-[#f3f3f3]">
          Semester 1
        </button>
        <button className="font-bold text-[#959595] px-6 py-4 shadow-md bg-[#f3f3f3]">
          Semester 2
        </button>
        <button className="font-bold text-[#959595] px-6 py-4 shadow-md bg-[#f3f3f3]">
          Semester 3
        </button>
      </div>
      {/* subject section */}
      <div className="flex flex-col mt-10 items-center">
        <div className="flex flex-row w-[90%] bg-[#eaeaea] rounded-md items-center h-10 justify-between">
          <p className=" font-semibold pl-5 text-center">
            Alternative englisgh
          </p>
          <i class="fa-solid fa-plus font-semibold pl-5 text-center mr-5"></i>
        </div>
        <div className="flex flex-row w-[90%] bg-[#eaeaea] rounded-md items-center h-10 justify-between">
          <p className=" font-semibold pl-5 text-center">Bussines law</p>
          <i class="fa-solid fa-plus font-semibold pl-5 text-center mr-5"></i>
        </div>
        <div className="flex flex-row w-[90%] bg-[#eaeaea] rounded-md items-center h-10 justify-between">
          <p className=" font-semibold pl-5 text-center">
            Comunicative english
          </p>
          <i class="fa-solid fa-plus font-semibold pl-5 text-center mr-5"></i>
        </div>
        <div className="flex flex-row w-[90%] bg-[#eaeaea] rounded-md items-center h-10 justify-between">
          <p className=" font-semibold pl-5 text-center">Economics</p>
          <i class="fa-solid fa-plus font-semibold pl-5 text-center mr-5"></i>
        </div>

        <div className="flex flex-row w-[90%] bg-[#eaeaea] rounded-md items-center h-10 justify-between">
          <p className=" font-semibold pl-5 text-center">Finacial Accounting</p>
          <i class="fa-solid fa-plus font-semibold pl-5 text-center mr-5"></i>
        </div>
        {/*space */}
        <div className="flex flex-row w-[90%] mt-20 bg-[#eaeaea] rounded-md items-center h-10 justify-between">
          <p className=" font-semibold pl-5 text-center">
            Alternative englisgh
          </p>
          <i class="fa-solid fa-plus font-semibold pl-5 text-center mr-5"></i>
        </div>
        <div className="flex flex-row w-[90%] bg-[#eaeaea] rounded-md items-center h-10 justify-between">
          <p className=" font-semibold pl-5 text-center">Bussines law</p>
          <i class="fa-solid fa-plus font-semibold pl-5 text-center mr-5"></i>
        </div>
        <div className="flex flex-row w-[90%] bg-[#eaeaea] rounded-md items-center h-10 justify-between">
          <p className=" font-semibold pl-5 text-center">
            Comunicative english
          </p>
          <i class="fa-solid fa-plus font-semibold pl-5 text-center mr-5"></i>
        </div>
        <div className="flex flex-row w-[90%] bg-[#eaeaea] rounded-md items-center h-10 justify-between">
          <p className=" font-semibold pl-5 text-center">Economics</p>
          <i class="fa-solid fa-plus font-semibold pl-5 text-center mr-5"></i>
        </div>

        <div className="flex flex-row w-[90%] bg-[#eaeaea] rounded-md items-center h-10 justify-between">
          <p className=" font-semibold pl-5 text-center">Finacial Accounting</p>
          <i class="fa-solid fa-plus font-semibold pl-5 text-center mr-5"></i>
        </div>
        <div className="w-[50%] bg-[#fffd00] mt-10 text-[#fc0000] rounded-md place-self-center text-center py-2 font-bold">
          Note More CBSC Paper Will be Added Soon
        </div>
      </div>
      {/* text */}
      <div className="text-[#9b9b9b] py-5 text-center text-[14px]">
        Non CBSC Regular Syatem
      </div>
      {/* last btn */}
      <div className="flex flex-row gap-4 flex-wrap justify-center ml-5 pt-5">
        <button className="font-bold text-[#959595] px-6 py-4 shadow-md bg-[#f3f3f3]">
          CBCS Hon
        </button>
        <button className="font-bold text-[#959595] px-6 py-4 shadow-md bg-[#f3f3f3]">
          CBCS Non-Hon
        </button>
        <button className="font-bold text-[#959595] px-6 py-4 shadow-md bg-[#f3f3f3]">
          Non CBCS Regular
        </button>
        <button className="font-bold text-[#959595] px-6 py-4 shadow-md bg-[#f3f3f3]">
          Non CBCS Distance
        </button>
      </div>
      <div className="bg-[#f3f3f3] w-full h-36 text-center py-28">
        {" "}
        Tab To Downlod B.Com CBCS Hons Syllabus For Dibrugarh University
      </div>
      <div className="bg-[#f3f3f3] w-full h-20 mt-10"></div>
      <p className=" opacity-80 my-10 mx-8 mb-20">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis error
        iste, excepturi veritatis asperiores autem blanditiis ut fugit imautem
        blanditiis ut fugit impedit corrupti in. Dolor, minima voluptas?
        Voluptatibus modi quo, aliquam tempora incidunt velit quidem omnis o,
        aliquam tempora incidunt velit quidem omnis debitis?
      </p>
    </div>
  );
}
