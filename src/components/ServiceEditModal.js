import { Modal } from "@mui/material";
import React from "react";

const ServiceEditModal = ({ open, onEditClose, selectUser }) => {
  return (
    <Modal open={open} className="flex items-center justify-center">
      <div className="h-[30vh] w-[50%] bg-white">
        <p>{selectUser.device_id}</p>
        <button onClick={onEditClose}>close</button>
      </div>
    </Modal>
  );
};

export default ServiceEditModal;
