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
      <div className="w-[795px] h-[539px] md:block hidden  ">
        <Image
          src="/bookingformgoedu.svg"
          alt="School choice"
          width={1000}
          height={1000}
          className="w-[795px] h-[539px] object-cover"
        />
      </div>

      <div className="md:w-1/2 w-full p-6 bg-white">
        <div className="md:hidden block w-[226px] text-[20px]">
          Confuse to choose the Best School ?
        </div>
        <h3 className="md:text-xl mt-8 text-[12px] mb-6 text-[#323232]">
          Fill this form and get in touch with our counsellor
        </h3>
        <form onSubmit={handleSubmit} className="space-y-7">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            className="p-2 border-b-2 border-[#D9D9D9] w-full h-[39px] placeholder:text-[#898989] sm:border sm:rounded sm:w-[462px] sm:border-[#D9D9D9]"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 border-b-2 border-[#D9D9D9] w-full h-[39px] placeholder:text-[#898989] sm:border sm:rounded sm:w-[462px] sm:border-[#D9D9D9]"
          />
          <div className="flex">
            <select className="w-[64px] h-[39px] border-b-2 border-[#D9D9D9] rounded-l placeholder:text-[#898989] sm:border sm:rounded-l sm:p-2 sm:border-[#D9D9D9]">
              <option className="text-[#898989]">🇮🇳</option>
            </select>
            <input
              type="tel"
              name="phone"
              placeholder="Your mobile number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full h-[39px] p-2 border-b-2 border-[#D9D9D9] placeholder:text-[#898989] sm:border sm:rounded-r sm:w-[398px] sm:border-[#D9D9D9]"
            />
          </div>

          <div className="flex md:gap-20 gap-8">
            <select
              name="class"
              value={formData.class}
              onChange={handleChange}
              className="p-2 border-b-2 border-[#D9D9D9] rounded md:w-[143px] w-[120px] h-[39px] placeholder:text-[#898989] md:border md:rounded "
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
              className="p-2 border-b-2 border-[#D9D9D9] rounded md:w-[143px] w-[120px] h-[39px] placeholder:text-[#898989] md:border md:rounded"
            >
              <option value="" className="text-[#898989]">
                BOARD
              </option>
              {/* Add board options */}
            </select>
          </div>
          <div className="md:pt-20 pt-8 cursor-pointer">
            <button
              type="submit"
              className="md:w-[177px] md:h-[60px] md:px-0 px-8 md:py-0 py-3  bg-[#1B6EA1] text-white p-2 rounded-lg hover:bg-[#1b6ea1c9]"
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