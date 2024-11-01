import { Checkbox, FormControlLabel, Modal, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";

const EdModal = ({ open, handelEditClose, selectNumber, updateNumber }) => {
  const [state, setState] = useState({ ...selectNumber });

  useEffect(() => {
    setState({ ...selectNumber });
  }, [selectNumber]);

  const handelSubmit = (e) => {
    e.preventDefault();
    updateNumber(state);
  };

  const handelInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <Modal
      open={open}
      onClose={handelEditClose}
      className="flex items-center justify-center"
    >
      <form
        onSubmit={handelSubmit}
        className="w-5/6 max-w-md p-4 bg-white rounded-md text-base flex flex-col gap-4"
      >
        <div className="w-full flex justify-center items-center border-b-2 text-white bg-cyan-700 uppercase text-lg py-2">
          Edit Number
          <p className="font-bold text-orange-500 ml-4">{state.number}</p>
        </div>

        <div className="flex flex-col items-center gap-4 mt-4">
          <TextField
            fullWidth
            type="number"
            name="number"
            label="Sum Number"
            variant="outlined"
            onChange={handelInput}
            value={state.number}
          />
          <TextField
            fullWidth
            type="date"
            name="date"
            label="Date"
            variant="outlined"
            onChange={handelInput}
            value={state.date}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.status === "Active"}
                onChange={(e) =>
                  handelInput({
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

        <div className="w-full flex justify-end gap-4 border-t-2 pt-4">
          <button
            type="submit"
            className="h-[35px] w-[65px] bg-cyan-700 flex justify-center items-center text-white rounded-md cursor-pointer uppercase text-sm"
          >
            Update
          </button>
          <button
            type="button"
            onClick={handelEditClose}
            className="h-[35px] w-[65px] bg-cyan-700 flex justify-center items-center text-white rounded-md cursor-pointer uppercase text-sm"
          >
            No
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default EdModal;
