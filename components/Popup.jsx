"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // Import Image from Next.js

export default function Popup({ setClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    class: "",
    board: "",
  });
  
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Show popup every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIsPopupVisible(true); // Open the popup
    }, 4000); // Interval for 4 seconds

    return () => clearInterval(timer); // Cleanup the interval on unmount
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle form submission logic here
    setIsPopupVisible(false); // Close the popup on form submit
  };

  const handleClose = () => {
    setIsPopupVisible(false); // Close the popup manually
    setClose(); // Notify the parent if necessary
  };

  return (
    <>
      {isPopupVisible && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="relative flex gap-10 justify-between items-center bg-white rounded-lg shadow-lg">
            {/* Close button */}
            <button 
              onClick={handleClose} 
              className="absolute bg-[#1B6EA1] px-4 z-50 rounded-full py-2 top-2 right-2 text-2xl font-bold text-white hover:text-gray-900"
            >
              &times;
            </button>

            {/* Image section */}
            <div className="w-[75vw] h-[539px] hidden md:block z-0">
              <Image
                src="/popup.svg"
                alt="School choice"
                width={1000}
                height={1000}
                className="w-[700px] h-full object-cover rounded-lg"
              />
            </div>

            {/* Form section */}
            <div className="w-full z-50 md:w-[580px] h-full rounded-l-2xl p-8 absolute top-0 right-14 bg-white">
              <h3 className="text-xl mb-6 text-[#323232]">
                Fill this form and get in touch with our counsellor
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-[#D9D9D9] rounded placeholder:text-[#898989]"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-[#D9D9D9] rounded placeholder:text-[#898989]"
                  required
                />
                <div className="flex">
                  <select
                    className="w-[64px] p-2 border border-[#D9D9D9] rounded-l text-[#898989]"
                    defaultValue="🇮🇳"
                  >
                    <option value="🇮🇳">🇮🇳</option>
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your mobile number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-2 border border-[#D9D9D9] rounded-r placeholder:text-[#898989]"
                    required
                  />
                </div>

                <div className="flex gap-4">
                  <select
                    name="class"
                    value={formData.class}
                    onChange={handleChange}
                    className="w-[143px] p-2 border border-[#D9D9D9] rounded text-[#898989]"
                    required
                  >
                    <option value="" disabled>
                      Class
                    </option>
                    <option value="Nursery">Nursery</option>
                    <option value="KG">KG</option>
                    <option value="Class 1">Class 1</option>
                    <option value="Class 2">Class 2</option>
                    <option value="Class 3">Class 3</option>
                    {/* Add more class options as needed */}
                  </select>

                  <select
                    name="board"
                    value={formData.board}
                    onChange={handleChange}
                    className="w-[143px] p-2 border border-[#D9D9D9] rounded text-[#898989]"
                    required
                  >
                    <option value="" disabled>
                      Board
                    </option>
                    <option value="CBSE">CBSE</option>
                    <option value="ICSE">ICSE</option>
                    <option value="IGCSE">IGCSE</option>
                    <option value="IB">IB</option>
                    {/* Add more board options if needed */}
                  </select>
                </div>

                <div className="pt-10">
                  <button
                    type="submit"
                    className="w-full md:w-[177px] h-[48px] bg-[#1B6EA1] text-white p-2 rounded-lg hover:bg-[#1b6ea1c9] transition"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
