import { Modal } from "@mui/material";
import React from "react";

const DeModal = ({ open, handelDeleteClose, deleteNumber, selectNumber }) => {
  return (
    <Modal open={open} className="flex items-center justify-center">
      <div className="bg-white h-2/8 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-md flex flex-col">
        <div className="h-[65%] w-full  text-left flex items-center p-4 gap-2 uppercase text-base sm:text-sm md:text-base">
          <h1>Delete The Number</h1>
          <span className="text-red-700 font-bold">{selectNumber.number}</span>
        </div>
        <div className="h-[35%] w-full flex items-center gap-4 p-4">
          <button
            className="h-[35px] w-[70px] bg-cyan-700 flex justify-center items-center text-white rounded-md cursor-pointer uppercase text-sm"
            onClick={deleteNumber}
          >
            Yes
          </button>
          <button
            className="h-[35px] w-[70px] bg-cyan-700 flex justify-center items-center text-white rounded-md cursor-pointer uppercase text-sm"
            onClick={handelDeleteClose}
          >
            No
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeModal;
