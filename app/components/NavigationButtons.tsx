"use client";

import React from "react";
import { useRouter } from "next/navigation";

const InputDataButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/input-data");
  };

  return (
    <button
      className="bg-orange-500 hover:bg-orange-700 size-4/12 h-10 text-white rounded"
      onClick={handleClick}
    >
      Input data
    </button>
  );
};

export default InputDataButton;
