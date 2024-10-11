"use client";
import Image from "next/image";
import { useState } from "react";

const FormGoEdu = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    class: "",
    board: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex gap-20 justify-between items-center">
      <div className="w-[795px] h-[539px]   ">
        <Image
          src="/bookingformgoedu.svg"
          alt="School choice"
          width={1000}
          height={1000}
          className="w-[795px] h-[539px] object-cover"
        />
      </div>

      <div className="w-1/2 p-8 bg-white">
        <h3 className="text-xl mb-6 text-[#323232]">
          Fill this form and get in touch with our counsellor
        </h3>
        <form onSubmit={handleSubmit} className="space-y-7">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            className=" p-2 border border-[#D9D9D9] rounded w-[462px] h-[39px] placeholder:text-[#898989]"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            className="w-[462px] h-[39px] p-2 border border-[#D9D9D9] rounded placeholder:text-[#898989]"
          />
          <div className="flex">
            <select className="w-[64px] h-[39px] p-2 border border-[#D9D9D9] rounded-l text-[#898989]">
              <option className="text-[#898989]">🇮🇳</option>
            </select>
            <input
              type="tel"
              name="phone"
              placeholder="Your mobile number"
              value={formData.phone}
              onChange={handleChange}
              className=" p-2 border border-[#D9D9D9] rounded-r w-[398px] h-[39px] placeholder:text-[#898989]"
            />
          </div>
          <div className="flex gap-20">
            <select
              name="class"
              value={formData.class}
              onChange={handleChange}
              className=" p-2 border border-[#D9D9D9] rounded w-[143px] h-[39px] text-[#898989]"
            >
              <option value="" className="text-[#898989]">
                Class
              </option>
              {/* Add class options */}
            </select>
            <select
              name="board"
              value={formData.board}
              onChange={handleChange}
              className=" p-2 border border-[#D9D9D9] rounded w-[143px] h-[39px] text-[#898989]"
            >
              <option value="" className="text-[#898989]">
                BOARD
              </option>
              {/* Add board options */}
            </select>
          </div>
          <div className="pt-20 cursor-pointer">
            <button
              type="submit"
              className="w-[177px] h-[60px]  bg-[#1B6EA1] text-white p-2 rounded-lg hover:bg-[#1b6ea1c9]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default FormGoEdu;
