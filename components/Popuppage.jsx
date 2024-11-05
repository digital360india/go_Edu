"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";

export default function TailwindPopupForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    date: "",
    mode: "",
    slot: "",
  });
  const form = useRef();

  const intervalRef = useRef(null);

  useEffect(() => {
    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        if (!isOpen) {
          setIsOpen(true);
        }
      }, 30000); 
    };

    startInterval(); 

    return () => {
      clearInterval(intervalRef.current); 
    };
  }, [isOpen]);

  const closePopup = () => {
    setIsOpen(false);
  
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isOpen) {
        setIsOpen(true);
      }
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: "edu123 popup",
      name: formData.name,
      email: formData.email,
      number: formData.number,
      date: formData.date,
      mode: formData.mode,
      slot: formData.slot,
    };

    emailjs
      .send(
        "service_57nnwwl",
        "template_4p9n98g",
        templateParams,
        "irB56rRK5zm2576zv"
      )
      .then(() => {
        alert("Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          number: "",
          date: "",
          mode: "",
          slot: "",
        });
        closePopup(); // Close the popup on successful submission
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert(`Failed to send the message. Error: ${error.text}`);
      });
  };
  return (
    <div className="flex items-center justify-center ">
      {/* Popup Form */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50 p-4 bg-opacity-50 ">
          <div className="max-h-screen overflow-y-auto bg-white rounded-lg md:p-6 p-4 h-auto w-full md:max-w-[45rem] relative  lg:mx-8">
            <button
              onClick={closePopup}
              className="absolute top-[1.5rem] right-[0.75rem] text-gray-500 hover:text-gray-800"
            >
              <Image
                src="/xclose.svg"
                alt="Close"
                className="cursor-pointer"
                onClick={closePopup}
                width={25}
                height={25}
              />
            </button>

            <h2 className="text-[1.3rem] md:text-xl font-bold text-red-800 flex justify-between pb-5">
              Book a free Counseling Session
            </h2>
            <form onSubmit={handleSubmit} ref={form}>
              <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-semibold text-[#000000] text-[1rem]"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 p-2 w-full h-[3.3rem] border border-gray-300 rounded-md text-red-800 placeholder-red-800"
                  />
                </div>
                <div>
                  <label
                    htmlFor="number"
                    className="block font-semibold text-[#000000] text-[1rem]"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="number"
                    id="number"
                    placeholder="Phone Number"
                    value={formData.number}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (/^\d*$/.test(value) && value.length <= 10) {
                        setFormData({ ...formData, number: value });
                      }
                    }}
                    maxLength={10}
                    className="mt-1 p-2 w-full h-[3.3rem] border border-gray-300 rounded-md text-red-800 placeholder-red-800"
                  />
                </div>
              </div>
              <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block font-semibold text-[#000000] text-[1rem]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 p-2 w-full h-[3.3rem] border border-gray-300 rounded-md text-red-800 placeholder-red-800"
                  />
                </div>
                <div>
                  <label
                    htmlFor="date"
                    className="block font-semibold text-[#000000] text-[1rem]"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="mt-1 p-2 w-full h-[3.3rem] border border-gray-300 rounded-md text-red-800 placeholder-red-800"
                  />
                </div>
              </div>
              <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                <div className="space-y-1">
                  <label
                    htmlFor="mode"
                    className="block font-semibold text-[#000000] text-[1rem]"
                  >
                    Mode of Counseling
                  </label>
                  <select
                    name="mode"
                    id="mode"
                    value={formData.mode}
                    onChange={handleChange}
                    className="w-full h-[3.3rem] p-2 border border-gray-300 rounded-md text-red-800 placeholder-red-800"
                    required
                  >
                    <option value="">Select mode</option>
                    <option value="Phone Counseling">Phone Counseling</option>
                    <option value="Video Counseling">Video Counseling</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label
                    htmlFor="slot"
                    className="block font-semibold text-[#000000] text-[1rem]"
                  >
                    Preferred Slot
                  </label>
                  <select
                    name="slot"
                    id="slot"
                    value={formData.slot}
                    onChange={handleChange}
                    required
                    className="w-full h-[3.3rem] p-2 border border-gray-300 rounded-md text-red-800 placeholder-red-800"
                  >
                    <option value="">Select slot</option>
                    <option value="Morning Slot">
                      Morning Slot - (10:30am - 12:00pm)
                    </option>
                    <option value="Afternoon Slot">
                      Afternoon Slot - (12:30pm - 3:00pm)
                    </option>
                    <option value="Evening Slot">
                      Evening Slot - (4:00pm - 6:00pm)
                    </option>
                  </select>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className="h-[3rem] w-full sm:w-[14.125rem] bg-red-700 text-white py-2 rounded-md hover:bg-red-600 transition-colors duration-300"
                >
                  Book consultation
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
