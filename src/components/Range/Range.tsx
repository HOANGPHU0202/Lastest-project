"use client";
import { useAppContext } from "@/providers/MyProvider";
import { useState } from "react";

export default function Range({
  setTimeStart,
  setTimeEnd,
}: {
  setTimeStart?: any;
  setTimeEnd?: any;
}) {
  const [selectedOption, setSelectedOption] = useState<string>("00");
  const [selectedMinute, setSelectedMinute] = useState<string>("00");
  const [selectedStleH, setSelectedStyleH] = useState<string>("AM");

  const [selectedOption1, setSelectedOption1] = useState<string>("00");
  const [selectedMinute1, setSelectedMinute1] = useState<string>("00");
  const [selectedStleH1, setSelectedStyleH1] = useState<string>("AM");

  const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);
  const [isOptionSelected2, setIsOptionSelected2] = useState<boolean>(false);
  const [isOptionSelected3, setIsOptionSelected3] = useState<boolean>(false);

  const [isCheckedOn, setIsCheckedOn] = useState<boolean>(false);
  const [isCheckedOff, setIsCheckedOff] = useState<boolean>(false);

  const [valueRange, setValueRange] = useState();

  const Minute: string[] = [];
  const Hour: string[] = [];
  const styleH: string[] = ["AM", "PM"];

  for (let i = 0; i < 60; i++) {
    Minute.push(i.toString().padStart(2, "0"));
  }
  for (let i = 0; i < 24; i++) {
    Hour.push(i.toString().padStart(2, "0"));
  }

  const changeTextColor = () => {
    setIsOptionSelected(true);
  };

  return (
    <div className="flex justify-between border p-2">
      <div className="w-[50px]">{valueRange || 50}%</div>
      <div className="">
        <input
          type="range"
          id="vol"
          name="vol"
          min="0"
          max="100"
          onChange={(value: any) => setValueRange(value.target.value)}
        />
      </div>
      <div>
        <div className="">
          <label className="mb-2 block pl-4 pr-4 text-sm font-medium text-black dark:text-white">
            THỜI GIAN BẮT ĐẦU
          </label>
          <div className="relative z-20 mb-5 bg-white dark:bg-form-input">
            <div className="flex items-center">
              <select
                value={selectedOption}
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                  changeTextColor();
                }}
                className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-2 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input ${
                  isOptionSelected ? "text-black dark:text-white" : ""
                }`}
              >
                {Hour.map((e) => {
                  return (
                    <option
                      key={e}
                      value={e}
                      className="text-body dark:text-bodydark"
                    >
                      {e}
                    </option>
                  );
                })}
              </select>
              :
              <span className="absolute left-7 top-1/2 z-10 -translate-y-1/2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.8">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                      fill="#637381"
                    ></path>
                  </g>
                </svg>
              </span>
              <select
                value={selectedMinute}
                onChange={(e) => {
                  setSelectedMinute(e.target.value);
                  changeTextColor();
                }}
                className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-2 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input ${
                  isOptionSelected2 ? "text-black dark:text-white" : ""
                }`}
              >
                {Minute.map((e) => {
                  return (
                    <option
                      key={e}
                      value={e}
                      className="text-body dark:text-bodydark"
                    >
                      {e}
                    </option>
                  );
                })}
              </select>
              <span className="absolute right-14 top-1/2 z-10 -translate-y-1/2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.8">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                      fill="#637381"
                    ></path>
                  </g>
                </svg>
              </span>
              :
              <select
                value={selectedStleH}
                onChange={(e) => {
                  setSelectedStyleH(e.target.value);
                  changeTextColor();
                }}
                className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-2 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input ${
                  isOptionSelected3 ? "text-black dark:text-white" : ""
                }`}
              >
                {styleH.map((e) => {
                  return (
                    <option
                      key={e}
                      value={e}
                      className="text-body dark:text-bodydark"
                    >
                      {e}
                    </option>
                  );
                })}
              </select>
              <span className="absolute left-[142px] top-1/2 z-10 -translate-y-1/2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.8">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                      fill="#637381"
                    ></path>
                  </g>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="">
          <label className="mb-2 block pl-4 pr-4 text-sm font-medium text-black dark:text-white">
            THỜI GIAN BẮT ĐẦU
          </label>
          <div className="relative z-20 bg-white dark:bg-form-input">
            <div className="flex items-center">
              <select
                value={selectedOption1}
                onChange={(e) => {
                  setSelectedOption1(e.target.value);
                  changeTextColor();
                }}
                className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-2 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input ${
                  isOptionSelected ? "text-black dark:text-white" : ""
                }`}
              >
                {Hour.map((e) => {
                  return (
                    <option
                      key={e}
                      value={e}
                      className="text-body dark:text-bodydark"
                    >
                      {e}
                    </option>
                  );
                })}
              </select>
              :
              <span className="absolute left-7 top-1/2 z-10 -translate-y-1/2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.8">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                      fill="#637381"
                    ></path>
                  </g>
                </svg>
              </span>
              <select
                value={selectedMinute1}
                onChange={(e) => {
                  setSelectedMinute1(e.target.value);
                  changeTextColor();
                }}
                className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-2 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input ${
                  isOptionSelected2 ? "text-black dark:text-white" : ""
                }`}
              >
                {Minute.map((e) => {
                  return (
                    <option
                      key={e}
                      value={e}
                      className="text-body dark:text-bodydark"
                    >
                      {e}
                    </option>
                  );
                })}
              </select>
              <span className="absolute right-14 top-1/2 z-10 -translate-y-1/2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.8">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                      fill="#637381"
                    ></path>
                  </g>
                </svg>
              </span>
              :
              <select
                value={selectedStleH1}
                onChange={(e) => {
                  setSelectedMinute1(e.target.value);
                  changeTextColor();
                }}
                className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-2 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input ${
                  isOptionSelected3 ? "text-black dark:text-white" : ""
                }`}
              >
                {styleH.map((e) => {
                  return (
                    <option
                      key={e}
                      value={e}
                      className="text-body dark:text-bodydark"
                    >
                      {e}
                    </option>
                  );
                })}
              </select>
              <span className="absolute left-[142px] top-1/2 z-10 -translate-y-1/2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.8">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                      fill="#637381"
                    ></path>
                  </g>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      <button
      className="border p-2 "
        onClick={() => {
          setTimeStart(
            selectedOption + ":" + selectedMinute + ":" + selectedStleH,
          );
          setTimeEnd(
            selectedOption1 + ":" + selectedMinute1 + ":" + selectedStleH1,
          );
        }}
      >
        Ok
      </button>
    </div>
  );
}
