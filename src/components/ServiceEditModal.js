// import {
//   Autocomplete,
//   Checkbox,
//   FormControlLabel,
//   Modal,
//   TextField,
// } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import districtOptions from "../data";

// const vehicleTypeOptions = [
//   "Car",
//   "Truck",
//   "Bus",
//   "Bike",
//   "CNG",
//   "Pic-Up",
//   "Trucktor",
//   "Auto",
//   "Ship",
// ];

// const ServiceEditModal = ({ open, onEditClose, selectUser, updateUser }) => {
//   const [user, setUser] = useState({ ...selectUser });

//   useEffect(() => {
//     setUser({ ...selectUser });
//   }, [selectUser]);

//   const handleChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const handleAutocompleteChange = (name, newValue) => {
//     setUser((prevUser) => ({
//       ...prevUser,
//       [name]: newValue,
//     }));
//   };

//   const handelSubmit = (e) => {
//     e.preventDefault();
//     updateUser(user);
//   };
//   return (
//     <Modal open={open} className="flex items-center justify-center">
//       <form
//         onSubmit={handelSubmit}
//         className="h-[90%] w-[40%] bg-white rounded-md"
//       >
//         <div className="h-[10%] flex items-center justify-center bg-cyan-600 text-white uppercase">
//           {selectUser ? "Update Information" : "Enter Information"}
//         </div>
//         <div className="h-[80%] flex items-center justify-center">
//           <div className="h-[100%] w-full flex flex-col items-center justify-center gap-2">
//             <TextField
//               type="number"
//               name="device_id"
//               value={user.device_id}
//               onChange={handleChange}
//               label="Device Id"
//               className="w-[75%] mt-4"
//             />
//             <TextField
//               type="text"
//               name="reg_no"
//               value={user.reg_no}
//               onChange={handleChange}
//               label="Reg Number"
//               className="w-[75%]"
//             />
//             <TextField
//               type="text"
//               name="customer_no"
//               value={user.customer_no}
//               onChange={handleChange}
//               label="Customer No"
//               className="w-[75%]"
//             />
//             <TextField
//               type="text"
//               name="address"
//               value={user.address}
//               onChange={handleChange}
//               label="Address"
//               className="w-[75%]"
//             />
//             <Autocomplete
//               className="w-[75%]"
//               options={districtOptions}
//               value={user.district}
//               onChange={(e, newValue) =>
//                 handleAutocompleteChange("district", newValue)
//               }
//               renderInput={(params) => (
//                 <TextField {...params} label="District" />
//               )}
//             />

//             <TextField
//               type="text"
//               name="problems"
//               value={user.problems}
//               onChange={handleChange}
//               label="Problems"
//               className="w-[75%]"
//             />

//             <div className="w-[75%] flex gap-4">
//               <TextField
//                 type="text"
//                 name="last_update"
//                 value={user.last_update}
//                 onChange={handleChange}
//                 label="Last Update"
//                 className="w-[48%]"
//               />
//               <Autocomplete
//                 className="w-[75%]"
//                 options={vehicleTypeOptions}
//                 value={user.vehicle_type}
//                 onChange={(e, newValue) =>
//                   handleAutocompleteChange("vehicle_type", newValue)
//                 }
//                 renderInput={(params) => (
//                   <TextField {...params} label="Vehicle Type" />
//                 )}
//               />
//             </div>
//             <FormControlLabel
//               className="w-[75%]"
//               control={
//                 <Checkbox
//                   checked={user.status === "Complete"}
//                   onChange={(e) =>
//                     handleChange({
//                       target: {
//                         name: "status",
//                         value: e.target.checked ? "Complete" : "Incomplete",
//                       },
//                     })
//                   }
//                   name="status"
//                   color="primary"
//                 />
//               }
//               label="Complete"
//             />
//           </div>
//         </div>
//         <div className="h-[10%] flex items-center gap-4">
//           <button
//             type="submit"
//             onClick={handelSubmit}
//             className="ml-4 h-[60%]  w-[11%] bg-cyan-600 text-white rounded-md"
//           >
//             {/* {selectUser ? "Update" : "Send"} */}Update
//           </button>
//           <button
//             onClick={onEditClose}
//             className=" h-[60%] w-[11%] bg-cyan-600 text-white rounded-md"
//           >
//             Cansel
//           </button>
//         </div>
//       </form>
//     </Modal>
//   );
// };

// export default ServiceEditModal;
