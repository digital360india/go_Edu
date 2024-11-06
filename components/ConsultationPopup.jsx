import React, { useState } from "react";
import Image from "next/image"; // Import Image from Next.js
import { RxCross1 } from "react-icons/rx";

export default function ConsultationPopup({ setClose }) {
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
    // console.log(formData);
    setClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="relative md:flex   gap-5  md:items-center bg-white rounded-lg shadow-lg w-full max-w-[90vw] md:max-w-[80vw] ">
        <button
          onClick={setClose}
          className="absolute bg-[#1B6EA1] px-1 py-1 md:px-2 z-50 rounded-full  md:py-2 top-2 right-2 text-2xl font-bold text-white hover:text-gray-900"
        >
          <div className="flex justify-center items-center">
            <RxCross1 />
          </div>
        </button>

        <div className="w-[80vw] h-[539px] hidden md:block z-0 ">
          <Image
            src="/popup.svg"
            alt="School choice"
            width={1000}
            height={1000}
            className="w-[660px] h-full object-cover rounded-lg"
          />
        </div>

        <div className="w-full z-50 md:w-[470px] h-full rounded-l-2xl p-8 md:absolute md:top-0 md:right-14 bg-white">
          <h3 className=" md:text-xl mb-6 text-[#323232]">
            Fill this form and get in touch with our counsellor
          </h3>
          <form onSubmit={handleSubmit} className="space-y-7 md:space-y-6">
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
              <option value="🇮🇳">🇮🇳 +91</option>
    <option value="🇺🇸">🇺🇸 +1</option>
    <option value="🇬🇧">🇬🇧 +44</option>
    <option value="🇨🇦">🇨🇦 +1</option>
    <option value="🇦🇺">🇦🇺 +61</option>
    <option value="🇳🇿">🇳🇿 +64</option>
    <option value="🇿🇦">🇿🇦 +27</option>
    <option value="🇸🇬">🇸🇬 +65</option>
    <option value="🇦🇪">🇦🇪 +971</option>
    <option value="🇸🇦">🇸🇦 +966</option>
    <option value="🇫🇷">🇫🇷 +33</option>
    <option value="🇩🇪">🇩🇪 +49</option>
    <option value="🇮🇹">🇮🇹 +39</option>
    <option value="🇪🇸">🇪🇸 +34</option>
    <option value="🇧🇷">🇧🇷 +55</option>
    <option value="🇲🇽">🇲🇽 +52</option>
    <option value="🇯🇵">🇯🇵 +81</option>
    <option value="🇰🇷">🇰🇷 +82</option>
    <option value="🇨🇳">🇨🇳 +86</option>
    <option value="🇹🇷">🇹🇷 +90</option>
    <option value="🇷🇺">🇷🇺 +7</option>
    <option value="🇮🇩">🇮🇩 +62</option>
    <option value="🇵🇭">🇵🇭 +63</option>
    <option value="🇻🇳">🇻🇳 +84</option>
    <option value="🇹🇭">🇹🇭 +66</option>
    <option value="🇲🇾">🇲🇾 +60</option>
    <option value="🇳🇬">🇳🇬 +234</option>
    <option value="🇪🇬">🇪🇬 +20</option>
    <option value="🇮🇱">🇮🇱 +972</option>
    <option value="🇰🇪">🇰🇪 +254</option>
    <option value="🇦🇷">🇦🇷 +54</option>
    <option value="🇨🇱">🇨🇱 +56</option>
    <option value="🇵🇪">🇵🇪 +51</option>
    <option value="🇨🇴">🇨🇴 +57</option>
    <option value="🇻🇪">🇻🇪 +58</option>
    <option value="🇺🇦">🇺🇦 +380</option>
    <option value="🇵🇱">🇵🇱 +48</option>
    <option value="🇳🇱">🇳🇱 +31</option>
    <option value="🇧🇪">🇧🇪 +32</option>
    <option value="🇸🇪">🇸🇪 +46</option>
    <option value="🇨🇭">🇨🇭 +41</option>
    <option value="🇦🇹">🇦🇹 +43</option>
    <option value="🇩🇰">🇩🇰 +45</option>
    <option value="🇫🇮">🇫🇮 +358</option>
    <option value="🇮🇪">🇮🇪 +353</option>
    <option value="🇳🇴">🇳🇴 +47</option>
    <option value="🇨🇿">🇨🇿 +420</option>
    <option value="🇸🇰">🇸🇰 +421</option>
    <option value="🇷🇴">🇷🇴 +40</option>
    <option value="🇭🇺">🇭🇺 +36</option>
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
                <option value="Nursery">Nursery</option>
                    <option value="KG">KG</option>
                    <option value="Class 1">Class 1</option>
                    <option value="Class 2">Class 2</option>
                    <option value="Class 3">Class 3</option>
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
                <option value="ICSE">ICSE</option>
                    <option value="IGCSE">IGCSE</option>
                    <option value="IB">IB</option>
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
    </div>
  );
}
