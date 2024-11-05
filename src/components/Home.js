import axios from "axios";
import { React, useEffect, useState } from "react";
import InForm from "./InForm";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import EdModal from "./EdModal";
import DeModal from "./DeModal";
import { Link } from "react-router-dom";
import ServiceCheck from "./ServiceCheck";
import ServiceTable from "./ServiceTable";
import { FaPlus } from "react-icons/fa";

const Home = () => {
  const [state, setState] = useState({
    datas: [],
    open: false,
    deleteOpen: false,
    editOpen: false,
    dataResults: [],
    searchItem: "",
    selectNumber: null,
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("http://103.129.238.8:3001/numbers")
      .then((res) => {
        let data = res.data.numbers.map((item) => {
          return {
            ...item,
            date: new Date(item.date).toISOString().split("T")[0],
          };
        });

        let old = { ...state };
        old.datas = data;
        old.dataResults = data;
        setState(old);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const saveData = (info) => {
    axios
      .post("http://103.129.238.8:3001/numbers", info)
      .then((x) => {
        let old = { ...state };
        old.open = false;
        old.datas = [...old.datas, x.data];
        setState(old);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteNumber = () => {
    if (state.selectNumber) {
      axios
        .delete("http://103.129.238.8:3001/numbers/" + state.selectNumber._id)
        .then((response) => {
          let old = { ...state };
          old.datas = old.datas.filter((x) => x._id !== state.selectNumber._id);
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

  const updateNumber = (number) => {
    axios
      .put("http://103.129.238.8:3001/numbers/" + number._id, number)
      .then((x) => {
        let datas = [...state.datas].map((x) =>
          x._id === number._id ? number : x
        );
        setState((old) => ({ ...old, datas: datas, editOpen: false }));
      })
      .catch((err) => {
        console.log(err);
        console.log("ttt", number);
      });
  };

  const handelOpen = () => {
    const old = { ...state };
    old.open = true;
    setState(old);
  };

  const handelEditOpen = (item) => {
    const old = { ...state };
    old.editOpen = true;
    old.selectNumber = item;
    setState(old);
  };

  const handelDeleteOpen = (item) => {
    const old = { ...state };
    old.deleteOpen = true;
    old.selectNumber = item;
    setState(old);
  };
  const handelDeleteClose = () => {
    const old = { ...state };
    old.deleteOpen = false;
    setState(old);
  };

  const handelEditClose = () => {
    const old = { ...state };
    old.editOpen = false;
    setState(old);
  };

  const handelClose = () => {
    const old = { ...state };
    old.open = false;
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
          (x.number &&
            x.number.toLowerCase().includes(searchTxt.toLowerCase())) ||
          (x.status &&
            x.status.toLowerCase().includes(searchTxt.toLowerCase())) ||
          (x.date && x.date.toLowerCase().includes(searchTxt.toLowerCase()))
        );
      });
    }
    old.searchItem = searchTxt;
    console.log(old.searchItem);
    setState(old);
  };

  return (
    <div>
      <div className="h-[100vh] w-full bg-slate-400">
        <div className="h-[10vh] w-full bg-cyan-800 flex items-center justify-end">
          <button>
            <Link
              to="/service"
              className="h-[40px] w-[70px] text-white bg-gray-700 shadow-xl mr-4 flex items-center justify-center rounded-md cursor-pointer text-start"
            >
              Service
            </Link>
          </button>
          <button
            className="h-[40px] w-[60px] text-white bg-gray-700 shadow-xl mr-4 flex items-center justify-center rounded-md cursor-pointer text-lg"
            onClick={handelOpen}
          >
            <FaPlus />
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
        <div className="h-[90vh] w-full bg-gray-500 flex justify-center items-center">
          <div className="h-[98%] w-[99%] bg-white shadow-md">
            <div
              style={{
                height: 50,
                backgroundColor: "rgb(21 94 117)",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                padding: 5,
              }}
              className="uppercase"
            >
              <p style={{ flex: 5 }}>Number</p>
              <p style={{ flex: 5 }}>Status</p>
              <p style={{ flex: 5 }}>Date</p>
              <p style={{ flex: 5 }}>Action</p>
            </div>
            <div className="h-[92%] w-full overflow-x-auto ">
              {state.datas.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    borderBottom: "1px solid silver",
                    padding: 5,
                  }}
                >
                  <p style={{ flex: 5, padding: 5 }}>{item.number}</p>
                  <p style={{ flex: 5, padding: 5 }}>{item.status}</p>
                  <p style={{ flex: 5, padding: 5 }}>{item.date}</p>
                  <div
                    style={{
                      flex: 5,
                      padding: 5,
                      display: "flex",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <button onClick={() => handelEditOpen(item)}>
                      <FiEdit className="text-red-700" />
                    </button>
                    <button onClick={() => handelDeleteOpen(item)}>
                      <AiOutlineDelete className="text-red-700" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {state.open && (
        <InForm
          open={state.open}
          handelClose={handelClose}
          saveData={saveData}
          selectNumber={state.selectNumber}
        />
      )}
      {state.editOpen && (
        <EdModal
          open={state.editOpen}
          selectNumber={state.selectNumber}
          updateNumber={updateNumber}
          handelEditClose={handelEditClose}
        />
      )}
      {state.deleteOpen && (
        <DeModal
          open={state.deleteOpen}
          handelDeleteClose={handelDeleteClose}
          deleteNumber={deleteNumber}
          selectNumber={state.selectNumber}
        />
      )}
    </div>
  );
};

export default Home;
