import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import ServiceTable from "./ServiceTable";
import ServiceEditModal from "./ServiceEditModal";
import ServiceForm from "./ServiceForm";
import ServiceDeleteModal from "./ServiceDeleteModal";

const ServiceCheck = () => {
  const [state, setState] = useState({
    datas: [],
    open: false,
    editOpen: false,
    deleteOpen: false,
    selectUser: "",
    dataResults: "",
    searchItem: "",
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("http://localhost:3001/users").then((res) => {
      let data = res.data.users;
      let old = { ...state };
      old.datas = data;
      old.dataResults = data;
      console.log("data", old.datas);
      setState(old);
    });
  };

  const saveUser = (user) => {
    axios
      .post("http://localhost:3001/users", user)
      .then((x) => {
        let old = { ...state };
        old.open = false;
        old.datas = [...old.datas, x.data];
        old.selectUser = ""; // Reset selectUser
        setState(old);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteUser = () => {
    if (state.selectUser) {
      axios
        .delete("http://localhost:3001/users/" + state.selectUser._id)
        .then((response) => {
          let old = { ...state };
          old.datas = old.datas.filter((x) => x._id !== state.selectUser._id);
          old.deleteOpen = false;
          setState(old);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("No number selected for deletion");
    }
  };

  const updateUser = (user) => {
    axios
      .put("http://localhost:3001/users/" + user._id, user)
      .then((x) => {
        let datas = [...state.datas].map((x) =>
          x._id === user._id ? user : x
        );
        setState((old) => ({ ...old, datas: datas, open: false }));
      })
      .catch((err) => {
        console.log(err);
        console.log("ttt", user);
      });
  };

  const modalOpen = () => {
    const old = { ...state };
    old.open = true;
    setState(old);
  };

  const handelClose = () => {
    const old = { ...state };
    old.open = false;
    setState(old);
  };

  const onEditOpen = (user) => {
    const old = { ...state };
    old.open = true;
    old.selectUser = user;
    setState(old);
  };
  const onEditClose = () => {
    const old = { ...state };
    old.editOpen = false;
    setState(old);
  };
  const onDeleteOpen = (user) => {
    const old = { ...state };
    old.deleteOpen = true;
    old.selectUser = user;
    setState(old);
  };

  const onDeleteClose = () => {
    const old = { ...state };
    old.deleteOpen = false;
    setState(old);
  };

  const searchText = (e) => {
    let searchTxt = e.target.value.toLowerCase();
    console.log(searchTxt);
    let old = { ...state };
    if (searchTxt === "") {
      old.datas = [...old.dataResults];
    } else {
      old.datas = [...old.dataResults].filter((x) => {
        return (
          (x.device_id &&
            x.device_id.toLowerCase().includes(searchTxt.toLowerCase())) ||
          (x.district &&
            x.district.toLowerCase().includes(searchTxt.toLowerCase())) ||
          (x.address &&
            x.address.toLowerCase().includes(searchTxt.toLowerCase())) ||
          (x.customer_no &&
            x.customer_no.toLowerCase().includes(searchTxt.toLowerCase())) ||
          (x.reg_no &&
            x.reg_no.toLowerCase().includes(searchTxt.toLowerCase())) ||
          (x.problems &&
            x.problems.toLowerCase().includes(searchTxt.toLowerCase())) ||
          (x.customer_no &&
            x.customer_no.toLowerCase().includes(searchTxt.toLowerCase()))
        );
      });
    }
    old.searchItem = searchTxt;
    console.log(old.searchItem);
    setState(old);
  };

  return (
    <div className="h-[100vh] w-full bg-yellow-900">
      <div className="h-[10vh] w-full bg-cyan-800 flex">
        <div className="h-full w-[30%] flex items-center">
          {" "}
          <Link
            to="/"
            className="h-[40px] ml-4 w-[60px] text-white bg-gray-700 shadow-xl mr-4 flex items-center justify-center rounded-md cursor-pointer text-lg"
          >
            <PiArrowFatLinesLeftFill />
          </Link>
        </div>
        <div className="h-full w-[40%] flex items-center justify-center text-white uppercase">
          <h1>Service Check List</h1>
        </div>
        <div className="h-full w-[30%] flex items-center justify-center">
          <button
            className="h-[40px] w-[60px] text-white bg-gray-700 shadow-xl mr-4 flex items-center justify-center rounded-md cursor-pointer text-lg"
            onClick={modalOpen}
          >
            +
          </button>
          <input
            type="search"
            id="search"
            className="bg-gray-50 border w-[250px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mr-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
            value={state.searchItem}
            onChange={searchText}
          />
        </div>
      </div>
      <div className="h-[90vh] w-full bg-gray-300 flex justify-center items-center">
        <div className="h-[98%] w-[99%] bg-white">
          <div
            style={{
              height: 50,
              backgroundColor: "rgb(21 94 117)",
              color: "white",
              display: "flex",
              alignItems: "center",
              textAlign: "left",
              padding: 10,
            }}
            className="uppercase"
          >
            <div style={{ flex: 8, display: "flex" }}>
              <p style={{ flex: 1.2 }}>Device Id</p>
              <p style={{ flex: 1.2 }}>Reg N0</p>
              <p style={{ flex: 1.2 }}>Customer No</p>
              <p style={{ flex: 1.2 }}>Vehicle Type</p>
              <p style={{ flex: 1.2 }}>Last Update</p>
              <p style={{ flex: 1.2 }}>District</p>
              <p style={{ flex: 1.2 }}>Location</p>
              <p style={{ flex: 1.2 }}>problem</p>
            </div>
            <p style={{ flex: 2, textAlign: "center" }}>Action</p>
          </div>
          <div className="h-[92%] w-full overflow-x-auto">
            {state.datas.map((x, i) => (
              <div>
                <ServiceTable
                  key={i}
                  item={x}
                  onEditOpen={onEditOpen}
                  onDeleteOpen={onDeleteOpen}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {state.open && (
        <ServiceForm
          open={state.open}
          handelClose={handelClose}
          selectUser={state.selectUser}
          saveUser={saveUser}
          onEditOpen={onEditOpen}
          updateUser={updateUser}
        />
      )}
      {/* {state.editOpen && (
        <ServiceEditModal
          open={state.editOpen}
          onEditClose={onEditClose}
          selectUser={state.selectUser}
          updateUser={updateUser}
        />
      )} */}
      {state.deleteOpen && (
        <ServiceDeleteModal
          selectUser={state.selectUser}
          open={state.deleteOpen}
          onDeleteClose={onDeleteClose}
          deleteUser={deleteUser}
        />
      )}
    </div>
  );
};

export default ServiceCheck;
