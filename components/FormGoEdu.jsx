"use client";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const FormGoEdu = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",

    phone: "",
    source: "Goedu - https://www.goedu.in/",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(formData);
    try {
      const response = await axios.post(
        "https://goedunodemailer.onrender.com/send-email",
        formData
      );
      if (response.status === 200) {
        alert("Form submitted successfully.");
        setFormData({
          name: "",
          phone: "",
          source: "Goedu - https://www.goedu.in/",
        });
      } else {
        alert("Try again");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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
              required
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="p-2 border-b-2 border-[#D9D9D9] w-full h-[39px] placeholder:text-[#898989] sm:border sm:rounded lg:w-[498px] sm:border-[#D9D9D9]"
            />
            {/* <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 border-b-2 border-[#D9D9D9] w-full h-[39px] placeholder:text-[#898989] sm:border sm:rounded sm:w-[462px] sm:border-[#D9D9D9]"
          /> */}
            <div className="flex  w-full lg:w-[498px]">
              <PhoneInput
                className="w-full border-[#D9D9D9] border-b-2 rounded md:border md:rounded"
                country={"in"}
                value={formData.phone}
                onChange={handlePhoneChange}
                inputStyle={{
                  width: "100%",
                  height: "39px",
                  border: "none",
                }}
                buttonStyle={{
                  border: "2px solid #D9D9D9",
                }}
              />
            </div>

            {/* <div className="flex md:gap-20 gap-8">
            <select
              name="class"
              value={formData.class}
              onChange={handleChange}
              className="p-2 border-b-2 border-[#D9D9D9] rounded md:w-[143px] w-[120px] h-[39px] placeholder:text-[#898989] md:border md:rounded "
            >
              <option value="" className="text-[#898989]">
                Class
              </option>
              
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
              
            </select>
          </div> */}
            <div className="md:pt-2 pt-8 cursor-pointer">
              {/* <button
                type="submit"
                className="md:w-[160px] md:h-[50px] md:px-0 px-8 md:py-0 py-3  bg-[#1B6EA1] text-white p-2 rounded-lg hover:bg-[#1b6ea1c9]"
              >
                Submit
              </button> */}
              <button
                type="submit"
                disabled={loading}
                className={`md:w-[160px] md:h-[50px] md:px-0 px-8 md:py-0 py-3 bg-[#1B6EA1] text-white p-2 rounded-lg ${
                  loading
                    ? "cursor-not-allowed opacity-70"
                    : "hover:bg-[#1b6ea1c9]"
                }`}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default FormGoEdu;
