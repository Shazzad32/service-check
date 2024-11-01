import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

const ServiceTable = ({ key, item, onEditOpen, onDeleteOpen }) => {
  const {
    device_id,
    reg_no,
    customer_no,
    district,
    address,
    problems,
    status,
    vehicle_type,
    last_update,
  } = item;
  console.log(item, "djdjjd");

  return (
    <div
      style={{
        height: 50,
        display: "flex",
        alignItems: "center",
        padding: 10,
        fontSize: 14,
        borderBottom: "1px solid black",
      }}
      key={item.id}
    >
      <div
        style={{
          height: "100%",
          flex: 8,
          display: "flex",
          alignItems: "center",
          textAlign: "left",
        }}
      >
        {" "}
        <p style={{ flex: 1.2 }}>{device_id}</p>
        <p style={{ flex: 1.2 }}>{reg_no}</p>
        <p style={{ flex: 1.2 }}>{customer_no}</p>
        <p style={{ flex: 1.2 }}>{vehicle_type}</p>
        <p style={{ flex: 1.2 }}>{last_update}</p>
        <p style={{ flex: 1.2 }}>{district}</p>
        <p style={{ flex: 1.2 }}>{address}</p>
        <p style={{ flex: 1.2, textOverflow: "ellipsis" }}>{problems}</p>
      </div>
      <div
        style={{
          flex: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            flex: 7,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 70,
          }}
        >
          <button style={{}} onClick={() => onEditOpen(item)}>
            <FiEdit className="text-black" />
          </button>
          <button style={{}} onClick={() => onDeleteOpen(item)}>
            <AiOutlineDelete className="text-red-700" />
          </button>
        </div>
        <div
          style={{
            flex: 3,
            color: status === "Complete" ? "green" : "red",
            border: "1px solid black",
            padding: 1,
            borderRadius: 4,
            borderColor: status === "Complete" ? "green" : "red",
          }}
        >
          {status}
        </div>
      </div>
    </div>
  );
};

export default ServiceTable;
