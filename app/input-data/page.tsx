"use client";

import React, { useState } from "react";
import Header from "@/app/header";

const InputDataPage = () => {
  const [inputFieldsCount, setInputFieldsCount] = useState([
    { note: "", amount: 0 },
  ]);

  const addNote = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    inputFieldsCount[index].note = e.target.value;
  };

  const addAmount = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    inputFieldsCount[index].amount = parseFloat(e.target.value);
  };
  console.log("Function: InputDataPage - Line 14 - ", inputFieldsCount);
  return (
    <>
      <Header />
      {/*<div className="flex flex-col py-24">*/}
      {/*  <div className="flex flex-col md:flex-row">*/}
      {/*    <div className="w-full md:w-1/4 py-4" />*/}

      {/*    <div className="w-full md:w-1/2 text-center justify-between border-solid border-2 border-sky-500 py-4">*/}
      {inputFieldsCount.map((item, index) => {
        return (
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Note (spending type)"
                onChange={(e) => addNote(e, index)}
              />
            </div>
            <div>
              <input
                type="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Ammount"
                onChange={(e) => addAmount(e, index)}
              />
            </div>
          </div>
        );
      })}

      <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
          <button
            type="submit"
            className="text-gray-600  focus:ring-4  focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
            onClick={() =>
              setInputFieldsCount([
                ...inputFieldsCount,
                { note: "", amount: 0 },
              ])
            }
          >
            + Add spending
          </button>
        </div>
        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Click to add more spending input
        </label>
      </div>
      <button className="text-white bg-orange-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Submit
      </button>

      {/*    </div>*/}
      {/*    <div className="w-full md:w-1/4 py-4" />*/}
      {/*  </div>*/}
      {/*</div>*/}
    </>
  );
};

export default InputDataPage;
