import { Checkbox, FormControlLabel, Modal, TextField } from "@mui/material";
import { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const InForm = ({ open, handelClose, saveData }) => {
  const [info, setInfo] = useState({
    number: "018",
    status: "",
    date: "",
  });

  const handelSubmit = (e) => {
    e.preventDefault();
    saveData(info);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };

  return (
    <Modal
      open={open}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
      className="flex items-center justify-center"
    >
      <form
        onSubmit={handelSubmit}
        className="h-[50vh] w-[80vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw] bg-white rounded-md shadow-lg"
      >
        {/* Header */}
        <div className="h-[15%] w-full flex justify-center items-center border-b-2 bg-cyan-700 text-white text-lg font-semibold">
          Enter Sim Number
        </div>

        {/* Content */}
        <div className="h-[70%] w-full flex flex-col items-center gap-4 p-4">
          <TextField
            type="number"
            name="number"
            value={info.number}
            onChange={handleChange}
            label="Sim Number"
            className="w-5/6"
          />

          <TextField
            type="date"
            name="date"
            value={info.date}
            onChange={handleChange}
            label="Date"
            className="w-5/6"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={info.status === "Active"}
                onChange={(e) =>
                  handleChange({
                    target: {
                      name: "status",
                      value: e.target.checked ? "Active" : "Inactive",
                    },
                  })
                }
                name="status"
                color="primary"
              />
            }
            label="Active"
          />
        </div>

        {/* Footer */}
        <div className="h-[15%] w-full flex items-center justify-end border-t-2 p-2 gap-4">
          <button
            type="submit"
            onClick={saveData}
            className="h-8 w-16 bg-sky-900 text-white rounded-md uppercase text-sm "
          >
            Yes
          </button>
          <button
            onClick={handelClose}
            className="h-8 w-16 bg-sky-900 text-white rounded-md uppercase text-sm mr-8"
          >
            No
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default InForm;
