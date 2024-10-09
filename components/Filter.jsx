import React, { useState } from "react";

export default function Filter({ filterdata, setfilterdata }) {
  const [board, setboard] = useState("");

  function handleboards(info) {
    const filter1 = filterdata?.globaldata.filter((item) => {
      return filterdata?.search?.toLowerCase() === "" || undefined || null
        ? item
        : item?.fields?.name == undefined
        ? ""
        : item?.fields?.name.toLowerCase().includes(filterdata?.search);
    });
    if (filterdata?.boards.includes(info)) {
      filterdata.boards = filterdata?.boards?.filter((item) => item !== info);
    } else {
      filterdata?.boards.push(info);
    }
    if (filterdata?.boards != 0) {
      var filter2 = filter1?.filter((item) => {
        if (filterdata?.boards.includes("cbse")) {
          if (item?.fields?.cbse_schools) {
            return item;
          }
        }
        if (filterdata?.boards.includes("icse_isc")) {
          if (item?.fields?.icse_isc_schools) {
            return item;
          }
        }
        if (filterdata?.boards.includes("cie")) {
          if (item?.fields?.cie_schools) {
            return item;
          }
        }
        if (filterdata?.boards.includes("ib")) {
          if (item?.fields?.ib_schools) {
            return item;
          }
        }
        if (filterdata?.boards.includes("igcse")) {
          if (item?.fields?.igcse_schools) {
            return item;
          }
        }
      });
    } else {
      var filter2 = filter1;
    }
    setfilterdata({
      ...filterdata,
      boards: filterdata?.boards,
      employees: filter2,
    });
  }

  function handleClassification(info) {
    const filter1 = filterdata?.globaldata.filter((item) => {
      return filterdata?.search?.toLowerCase() === "" || undefined || null
        ? item
        : item?.fields?.name == undefined
        ? ""
        : item?.fields?.name.toLowerCase().includes(filterdata?.search);
    });
    if (filterdata?.boards != 0) {
      var filter2 = filter1?.filter((item) => {
        if (filterdata?.boards.includes("cbse")) {
          if (item?.fields?.cbse_schools) {
            return item;
          }
        }
        if (filterdata?.boards.includes("icse_isc")) {
          if (item?.fields?.icse_isc_schools) {
            return item;
          }
        }
        if (filterdata?.boards.includes("cie")) {
          if (item?.fields?.cie_schools) {
            return item;
          }
        }
        if (filterdata?.boards.includes("ib")) {
          if (item?.fields?.ib_schools) {
            return item;
          }
        }
        if (filterdata?.boards.includes("igcse")) {
          if (item?.fields?.igcse_schools) {
            return item;
          }
        }
      });
    } else {
      var filter2 = filter1;
    }

    if (filterdata?.classification.includes(info)) {
      filterdata.classification = filterdata?.classification?.filter(
        (item) => item !== info
      );
    } else {
      filterdata?.classification.push(info);
    }

    if (filterdata?.classification != 0) {
      var filter3 = filter1?.filter((item) => {
        if (filterdata?.classification.includes("co-ed")) {
          if (item?.fields?.coed_schools) {
            return item;
          }
        }
        if (filterdata?.classification.includes("boys")) {
          if (item?.fields?.boys_schools) {
            return item;
          }
        }
        if (filterdata?.classification.includes("girls")) {
          if (item?.fields?.girls_schools) {
            return item;
          }
        }
      });
    } else {
      var filter3 = filter1;
    }

    setfilterdata({
      ...filterdata,
      classification: filterdata?.classification,
      employees: filter3,
    });
  }

  function handleType(info) {
    const filter1 = filterdata?.globaldata.filter((item) => {
      return filterdata?.search?.toLowerCase() === "" || undefined || null
        ? item
        : item?.fields?.name == undefined
        ? ""
        : item?.fields?.name.toLowerCase().includes(filterdata?.search);
    });
    if (filterdata?.boards != 0) {
      var filter2 = filter1?.filter((item) => {
        if (filterdata?.boards.includes("cbse")) {
          if (item?.fields?.cbse_schools) {
            return item;
          }
        }
        if (filterdata?.boards.includes("icse_isc")) {
          if (item?.fields?.icse_isc_schools) {
            return item;
          }
        }
        if (filterdata?.boards.includes("cie")) {
          if (item?.fields?.cie_schools) {
            return item;
          }
        }
        if (filterdata?.boards.includes("ib")) {
          if (item?.fields?.ib_schools) {
            return item;
          }
        }
        if (filterdata?.boards.includes("igcse")) {
          if (item?.fields?.igcse_schools) {
            return item;
          }
        }
      });
    } else {
      var filter2 = filter1;
    }

    if (filterdata?.classification != 0) {
      var filter3 = filter2?.filter((item) => {
        if (filterdata?.classification.includes("co-ed")) {
          if (item?.fields?.coed_schools) {
            return item;
          }
        }
        if (filterdata?.classification.includes("boys")) {
          if (item?.fields?.boys_schools) {
            return item;
          }
        }
        if (filterdata?.classification.includes("girls")) {
          if (item?.fields?.girls_schools) {
            return item;
          }
        }
      });
    } else {
      var filter3 = filter2;
    }

    if (filterdata?.type.includes(info)) {
      filterdata.type = filterdata?.type?.filter((item) => item !== info);
    } else {
      filterdata?.type.push(info);
    }

    if (filterdata?.type != 0) {
      var filter4 = filter3?.filter((item) => {
        if (filterdata?.type.includes("day_schools")) {
          if (item?.fields?.day_schools) {
            return item;
          }
        }
        if (filterdata?.type.includes("day_boarding_schools")) {
          if (item?.fields?.day_boarding_schools) {
            return item;
          }
        }
        if (filterdata?.type.includes("full_boarding_schools")) {
          if (item?.fields?.full_boarding_schools) {
            return item;
          }
        }
      });
    } else {
      var filter4 = filter3;
    }

    setfilterdata({
      ...filterdata,
      type: filterdata?.type,
      employees: filter4,
    });
  }

  return (
    <>
      <div className="p-5 ">
        <div className=" space-y-3 sm:space-y-5 ">
          <p className="text-[24px] font-medium">Filter</p>
          <div className=" space-y-5">
            <p className="text-[18px] mt-5">Sort</p>
            <div className="flex justify-between">
              <p className="text-[12px]">Popularity</p>
              <div className="flex gap-2">
                <button className="bg-[#02618f] w-[20px] h-[20px] grid place-content-center rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="#fff"
                      d="M208.49 120.49a12 12 0 0 1-17 0L140 69v147a12 12 0 0 1-24 0V69l-51.51 51.49a12 12 0 0 1-17-17l72-72a12 12 0 0 1 17 0l72 72a12 12 0 0 1 0 17Z"
                    />
                  </svg>
                </button>
                <button className="bg-[#02618f70] w-[20px] h-[20px] grid place-content-center mx-auto rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 256 256"
                  >
                    <g transform="rotate(180 128 128)">
                      <path
                        fill="#02618f"
                        d="M208.49 120.49a12 12 0 0 1-17 0L140 69v147a12 12 0 0 1-24 0V69l-51.51 51.49a12 12 0 0 1-17-17l72-72a12 12 0 0 1 17 0l72 72a12 12 0 0 1 0 17Z"
                      />
                    </g>
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-[12px]">Price</p>
              <div className="flex gap-2">
                <button className="bg-[#02618f60] w-[20px] h-[20px] grid place-content-center rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="#02618f"
                      d="M208.49 120.49a12 12 0 0 1-17 0L140 69v147a12 12 0 0 1-24 0V69l-51.51 51.49a12 12 0 0 1-17-17l72-72a12 12 0 0 1 17 0l72 72a12 12 0 0 1 0 17Z"
                    />
                  </svg>
                </button>
                <button className="bg-[#02618f] w-[20px] h-[20px] grid place-content-center mx-auto rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 256 256"
                  >
                    <g transform="rotate(180 128 128)">
                      <path
                        fill="#fff"
                        d="M208.49 120.49a12 12 0 0 1-17 0L140 69v147a12 12 0 0 1-24 0V69l-51.51 51.49a12 12 0 0 1-17-17l72-72a12 12 0 0 1 17 0l72 72a12 12 0 0 1 0 17Z"
                      />
                    </g>
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-[12px]">Recommendation</p>
              <button className="bg-[#02618f70] w-[20px] h-[20px] grid place-content-center rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="none"
                    stroke="#02618f"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="m2.75 8.75l3.5 3.5l7-7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div>
            <p className="text-[18px]">Fee Range</p>
          </div>

          <div className="space-y-5">
            <p className="text-[18px]">Boards</p>
            <div className="flex flex-wrap gap-x-5 gap-y-3 text-[12px]">
              <div className="flex  justify-between pr-3 min-w-[140px]">
                <p>CBSE</p>
                <button
                  onClick={() => handleboards("cbse")}
                  className="bg-[#02618f70] w-[20px] h-[20px] grid place-content-center rounded-md"
                  onChange={(e) => {
                    setboard(e.target.value);
                  }}
                >
                  {filterdata.boards.includes("cbse") ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="none"
                        stroke="#02618f"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="m2.75 8.75l3.5 3.5l7-7.5"
                      />
                    </svg>
                  ) : (
                    ""
                  )}
                </button>
              </div>

              <div className="flex justify-between w-[140px] pr-3">
                <p>ICSE/ISC</p>
                <button
                  onClick={() => handleboards("icse_isc")}
                  className="bg-[#02618f70] w-[20px] h-[20px] grid place-content-center rounded-md"
                  onChange={(e) => {
                    setboard(e.target.value);
                  }}
                >
                  {filterdata.boards.includes("icse_isc") ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="none"
                        stroke="#02618f"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="m2.75 8.75l3.5 3.5l7-7.5"
                      />
                    </svg>
                  ) : (
                    ""
                  )}
                </button>
              </div>

              <div className="flex justify-between w-[140px] pr-3">
                <p>CIE</p>
                <button
                  onClick={() => handleboards("cie")}
                  className="bg-[#02618f70] w-[20px] h-[20px] grid place-content-center rounded-md"
                >
                  {filterdata.boards.includes("cie") ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="none"
                        stroke="#02618f"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="m2.75 8.75l3.5 3.5l7-7.5"
                      />
                    </svg>
                  ) : (
                    ""
                  )}
                </button>
              </div>

              <div className="flex justify-between w-[140px] pr-3">
                <p>IB</p>
                <button
                  onClick={() => handleboards("ib")}
                  className="bg-[#02618f70] w-[20px] h-[20px] grid place-content-center rounded-md"
                >
                  {filterdata.boards.includes("ib") ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="none"
                        stroke="#02618f"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="m2.75 8.75l3.5 3.5l7-7.5"
                      />
                    </svg>
                  ) : (
                    ""
                  )}
                </button>
              </div>

              <div className="flex justify-between w-[140px] pr-3">
                <p>IGCSE</p>
                <button
                  onClick={() => handleboards("igcse")}
                  className="bg-[#02618f70] w-[20px] h-[20px] grid place-content-center rounded-md"
                >
                  {filterdata.boards.includes("igcse") ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="none"
                        stroke="#02618f"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="m2.75 8.75l3.5 3.5l7-7.5"
                      />
                    </svg>
                  ) : (
                    ""
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <p className="text-[18px]">Classification</p>
            <div className="flex flex-wrap gap-x-5 gap-y-3 text-[12px]">
              <div className="flex justify-between w-[140px] pr-3 ">
                <p>CO-ED</p>
                <button
                  className="bg-[#02618f70] w-[20px] h-[20px] grid place-content-center rounded-md"
                  onClick={() => handleClassification("co-ed")}
                >
                  {filterdata.classification.includes("co-ed") ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="none"
                        stroke="#02618f"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="m2.75 8.75l3.5 3.5l7-7.5"
                      />
                    </svg>
                  ) : (
                    ""
                  )}
                </button>
              </div>
              <div className="flex justify-between w-[140px] pr-3">
                <p>Girls Only</p>
                <button
                  className="bg-[#02618f70] w-[20px] h-[20px] grid place-content-center rounded-md"
                  onClick={() => handleClassification("girls")}
                >
                  {filterdata.classification.includes("girls") ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="none"
                        stroke="#02618f"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="m2.75 8.75l3.5 3.5l7-7.5"
                      />
                    </svg>
                  ) : (
                    ""
                  )}
                </button>
              </div>
              <div className="flex justify-between w-[140px] pr-3">
                <p>Boys-Only</p>
                <button
                  className="bg-[#02618f70] w-[20px] h-[20px] grid place-content-center rounded-md"
                  onClick={() => handleClassification("boys")}
                >
                  {filterdata.classification.includes("boys") ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="none"
                        stroke="#02618f"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="m2.75 8.75l3.5 3.5l7-7.5"
                      />
                    </svg>
                  ) : (
                    ""
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <p className="text-[18px]">Type</p>
            <div className="flex flex-wrap gap-x-3 gap-y-5 text-[12px]">
              <div className="flex justify-between min-w-[140px] pr-3">
                <p>Boarding</p>
                <button
                  className="bg-[#02618f70] w-[20px] h-[20px] grid place-content-center rounded-md"
                  onClick={() => handleType("full_boarding_schools")}
                >
                  {filterdata.type.includes("full_boarding_schools") ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="none"
                        stroke="#02618f"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="m2.75 8.75l3.5 3.5l7-7.5"
                      />
                    </svg>
                  ) : (
                    ""
                  )}
                </button>
              </div>

              <div className="flex justify-between pl-1 min-w-[140px] pr-2">
                <p>Day Boarding</p>
                <button
                  className="bg-[#02618f70] w-[20px] h-[20px] grid place-content-center rounded-md"
                  onClick={() => handleType("day_boarding_schools")}
                >
                  {filterdata.type.includes("day_boarding_schools") ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="none"
                        stroke="#02618f"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="m2.75 8.75l3.5 3.5l7-7.5"
                      />
                    </svg>
                  ) : (
                    ""
                  )}
                </button>
              </div>
              <div className="flex justify-between  min-w-[140px] pr-3">
                <p>Day School</p>
                <button
                  className="bg-[#02618f70] w-[20px] h-[20px] grid place-content-center rounded-md"
                  onClick={() => handleType("day_schools")}
                >
                  {filterdata.type.includes("day_schools") ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="none"
                        stroke="#02618f"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="m2.75 8.75l3.5 3.5l7-7.5"
                      />
                    </svg>
                  ) : (
                    ""
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
