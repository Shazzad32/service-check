import { Modal } from "@mui/material";
import React from "react";

const ServiceDeleteModal = ({
  open,
  onDeleteClose,
  selectUser,
  deleteUser,
}) => {
  return (
    <Modal open={open} className="flex justify-center items-center">
      <div className="h-[20%] w-[25%] bg-white rounded-md">
        <div className="h-[60%] w-full flex p-4 ">
          <p>
            Do you want to delet{" "}
            <span className="text-red-600 ml-2">{selectUser.device_id}</span>
          </p>
        </div>
        <div className="h-[40%] w-full flex items-center gap-4">
          <button
            onClick={deleteUser}
            className="w-[13%] h-[50%] rounded-md ml-4 bg-cyan-500 text-white"
          >
            YES
          </button>
          <button
            onClick={onDeleteClose}
            className="w-[13%] h-[50%] rounded-md bg-cyan-500 text-white"
          >
            NO
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ServiceDeleteModal;
