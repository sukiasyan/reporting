"use client";

import React, { useState } from "react";
import Header from "@/app/header";
import { TrashIcon } from "@heroicons/react/16/solid";

const InputDataPage = () => {
  const [inputFieldsCount, setInputFieldsCount] = useState([
    { note: "", amount: "" },
  ]);

  const removeField = (index: number) => {
    setInputFieldsCount((prevFields) =>
      prevFields.filter((_, i) => i !== index),
    );
  };

  const addNote = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newFields = [...inputFieldsCount];
    newFields[index].note = e.target.value;
    setInputFieldsCount(newFields);
  };

  const addAmount = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    const newFields = [...inputFieldsCount];
    newFields[index].amount = value === "" ? "" : value;
    setInputFieldsCount(newFields);
  };

  const isSubmitDisabled = inputFieldsCount.some(
    (field) => !field.note || !field.amount || isNaN(Number(field.amount)),
  );

  console.log("Function: InputDataPage - Line 35 - ", inputFieldsCount);

  return (
    <>
      <section className="w-10/12 p-12">
        {inputFieldsCount.map((item, index) => (
          <div
            className="grid gap-6 mb-6 md:grid-cols-2 items-center"
            key={index}
          >
            <div className="w-full">
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Note (spending type)"
                value={item.note}
                onChange={(e) => addNote(e, index)}
              />
            </div>
            <div className="w-full flex items-center">
              <input
                type="number"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Amount"
                value={item.amount === "" ? "" : item.amount.toString()}
                onChange={(e) => addAmount(e, index)}
              />

              <TrashIcon
                className="h-5 w-5 text-red-400 ml-2 cursor-pointer"
                onClick={() => removeField(index)}
              />
            </div>
          </div>
        ))}

        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <button
              type="button"
              className="text-gray-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              onClick={() =>
                setInputFieldsCount([
                  ...inputFieldsCount,
                  { note: "", amount: "" },
                ])
              }
            >
              + Add spending
            </button>
          </div>
          <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-400">
            Click to add more spending input
          </label>
        </div>
        <button
          className={`text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center focus:outline-none focus:ring-4 ${
            isSubmitDisabled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-orange-600 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          }`}
          disabled={isSubmitDisabled}
        >
          Submit
        </button>
      </section>
    </>
  );
};

export default InputDataPage;
