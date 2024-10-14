"use client";
import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { BsSearch, BsNewspaper } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
import { base } from "@/app/api/airtable.jsx";
import { useState } from "react";
import { useEffect } from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import SchoolCardMini from "./SchoolCardMini";
import Filter from "./Filter";
import EnquireForm from "./EnquireForm";
import { Icon } from "@iconify/react";
import Image from "next/image";
const SchoolCard = ({ categoryData }) => {
  const [citySlug, setCitySlug] = useState("");
  const [filterdata, setfilterdata] = useState({
    toggle: false,
    employees: [],
    globaldata: [],
    search: "",
    boards: [],
    classification: [],
    type: [],
    price: [],
  });

  const [page, setPage] = useState(1);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const scrollPage = () => {
    window.scrollTo({ top: 700, left: 0, behavior: "smooth" });
  };

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    const filter1 = filterdata.globaldata.filter((item) => {
      const itemName = item?.fields?.name?.toLowerCase() || "";
      return searchValue === "" ? item : itemName.includes(searchValue);
    });
    console.log(filter1);
    setfilterdata({
      ...filterdata,
      search: searchValue,
      employees: filter1,
    });
  };

  useEffect(() => {
    if (categoryData?.slug) {
      const city = categoryData.slug.split("-");
      setCitySlug(city[city.length - 1]);
    }
  }, [categoryData]);

  useEffect(() => {
    if (citySlug) {
      base(citySlug)
        .select({})
        .eachPage(
          (records, fetchNextPage) => {
            let filteredRecords = records.filter((item) => {
              if (categoryData.slug === `day-boarding-schools-in-${citySlug}`) {
                return item?.fields?.day_boarding_schools === "checked";
              } else if (
                categoryData.slug === `girls-boarding-schools-in-${citySlug}`
              ) {
                return item?.fields?.girls_schools === "checked";
              } else if (
                categoryData.slug === `boys-boarding-schools-in-${citySlug}`
              ) {
                return item?.fields?.boys_schools === "checked";
              } else if (
                categoryData.slug === `full-boarding-schools-in-${citySlug}`
              ) {
                return item?.fields?.full_boarding_schools === "checked";
              } else {
                return true;
              }
            });
            filteredRecords = filteredRecords
              .map((a) => {
                return a;
              })
              .sort((a, b) => {
                if (
                  categoryData?.filtType in a?.fields &&
                  categoryData?.filtType in b?.fields
                ) {
                  return (
                    b?.fields[categoryData?.filtType] -
                    a?.fields[categoryData?.filtType]
                  );
                } else if (categoryData?.filtType in a?.fields) {
                  return -1;
                } else if (categoryData?.filtType in b?.fields) {
                  return 1;
                } else {
                  return 0;
                }
              });
            setfilterdata({
              ...filterdata,
              employees: filteredRecords,
              globaldata: filteredRecords,
            });
            fetchNextPage();
          },
          (err) => {
            if (err) {
              console.error(err);
            }
          }
        );
    }
  }, [citySlug]);

  return (
    <>
      <div className=" ">
        <div className="bg-[#1B6EA1] w-full h-[400px]flex justify-center items-center p-10">
          <h2 className="md:px-[45px] my-8 lg:my-4 sm:text-[30px] text-[#FFFFFF] text-[20px]">
            {" "}
            List of {Math.ceil(filterdata?.employees.length)} Best Schools in{" "}
            {citySlug[0]?.toUpperCase() + citySlug.slice(1, citySlug.length)}
          </h2>
          <div className="flex  justify-center sm:justify-start    items-center p-10">
            <div className="flex   justify-start w-[291px] h-[32px] sm:w-[100%] lg:h-[59px] lg:w-[100%] xl:w-[620px]  border-2 outline-none rounded-3xl   bg-[#1B6EA1]">
              <input
                onChange={handleSearch}
                className="xl:w-[890px] p-3 text-[#FFFFFF] rounded-3xl h-full bg-[#1B6EA1] placeholder:text-[#FFFFFF]  outline-none"
                type="text"
                placeholder="Search School"
              />
              <Image
                src="/searching.svg"
                width={1000}
                height={1000}
                className="w-[30px] rounded-full m-3  h-[30px] text-[#FFFFFF] cursor-pointer"
              ></Image>
            </div>
            <FiFilter
              onClick={() => {
                setfilterdata({ ...filterdata, toggle: true });
              }}
              className="text-2xl xl:hidden"
              categoryData={categoryData}
            ></FiFilter>
          </div>
        </div>
      </div>
      <div className="  flex justify-center md:justify-start xl:justify-between sm:px-[100px] lg:gap-6">
        <div className="bg-white ">
          <div className=" bg-white">
            <div className="items-center bg-white justify-between md:mt-8 pb-8">
              {/* <div className="flex  justify-center sm:justify-start gap-4   items-center">
                <div className="flex   justify-start w-[291px] h-[32px] sm:w-[100%] lg:h-[46px] lg:w-[100%] xl:w-[820px] border-2 outline-none rounded-r-xl rounded-l-xl bg-[#F8F8F8]">
                  <BsSearch className="w-10 p-2 h-full text-[#AEAEAE] "></BsSearch>
                  <input
                    onChange={handleSearch}
                    className="xl:w-[890px] w-[242px] h-full bg-[#F8F8F8] outline-none"
                    type="text"
                    placeholder="Search"
                  />
                </div>
                <FiFilter
                  onClick={() => {
                    setfilterdata({ ...filterdata, toggle: true });
                  }}
                  className="text-2xl xl:hidden"
                  categoryData={categoryData}
                ></FiFilter>
              </div> */}
            </div>
          </div>

          <div>
            <div className="flex flex-col md:flex-wrap justify-center md:justify-start items-center md:items-start gap-5 ">
              {filterdata?.employees
                .filter((item) => {
                  return filterdata?.search.toLowerCase() === "" ||
                    undefined ||
                    null
                    ? item
                    : item?.fields?.name == undefined
                    ? ""
                    : item?.fields?.name
                        .toLowerCase()
                        .includes(filterdata?.search);
                })
                .slice(page * 8 - 8, page * 8)
                .map((items, index) => {
                  return (
                    <>
                      <SchoolCardMini
                        data={items}
                        index={index}
                        citySlug={citySlug}
                      />
                    </>
                  );
                })}
            </div>
          </div>

          {/* paginate */}

          <div className="flex gap-3 text-black  items-center justify-center lg:w-[820px]   mt-4 ">
            <div className="text-center flex items-center">
              <span>
                <GrFormPrevious className="text-2xl lg:text-xl disabled:text-[#AEAEAE] disabled:cursor-not-allowed " />{" "}
              </span>
              <button
                className="flex gap-5 items-center cursor-pointer text-xl  disabled:text-[#AEAEAE]  disabled:cursor-not-allowed lg:text-[13px]   lg:text-2xl"
                onClick={() => setPage(page - 1)}
                disabled={page <= 1}
              >
                {" "}
                Prev
              </button>
            </div>

            <span className=" text-white cursor-pointer bg-[#02618f] px-2 rounded-full">
              {page}
            </span>
            {
              <span
                className="text-xl cursor-pointer"
                onClick={() => setPage(page + 1)}
              >
                {page + 1}
              </span>
            }

            {
              <span
                className="text-xl cursor-pointer"
                onClick={() => setPage(page + 2)}
              >
                {page + 2}
              </span>
            }
            <div className="text-center flex items-center">
              <button
                disabled={filterdata?.employees?.length / 8 <= page}
                className="flex items-center cursor-pointer text-xl disabled:text-[#AEAEAE]  disabled:cursor-not-allowed  lg:text-[13px]  lg:text-2xl"
                onClick={() => {
                  setPage(page + 1);
                  scrollPage();
                }}
              >
                Next
                <span>
                  {" "}
                  <GrFormNext className="text-2xl disabled:text-[#AEAEAE]  lg:text-xl" />{" "}
                </span>{" "}
              </button>
            </div>
          </div>
        </div>

        <div className="hidden xl:block mt-8 space-y-5">
          <div className=" top-8">
            <div className="w-[340px] h-[776px] bg-[#F8F8F8] rounded-lg">
              <Filter filterdata={filterdata} setfilterdata={setfilterdata} />
            </div>
            <div className="w-[340px] h-[436px] bg-[#F8F8F8] rounded-lg mt-5">
              <p className="text-[24px] font-medium mt-10 ml-5">Enquire Now</p>
              <EnquireForm />
            </div>
          </div>
        </div>

        <Popup
          open={filterdata?.toggle}
          closeOnDocumentClick={false}
          lockScroll={true}
          closeOnEscape={false}
          contentStyle={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <div className=" bg-white  relative overflow-y-auto ">
            <button className=" float-right outline-none mt-5 mr-3 bg-[#02618f] rounded-full p-2">
              <Icon
                icon="charm:cross"
                className=" text-white text-[20px] "
                onClick={() => {
                  setfilterdata({ ...filterdata, toggle: false });
                }}
              />
            </button>
            <Filter filterdata={filterdata} setfilterdata={setfilterdata} />
            <div className=" mt-2 flex justify-center">
              {" "}
              <button
                className="w-[120px] h-[40px] bg-[#02618f] text-white rounded-lg    "
                onClick={() => {
                  setfilterdata({ ...filterdata, toggle: false });
                }}
              >
                Apply
              </button>
            </div>
          </div>
        </Popup>
      </div>
    </>
  );
};

export default SchoolCard;
