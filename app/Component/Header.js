"use client";
import React, { useEffect, useState } from "react";
import { AiTwotoneDelete, AiOutlinePlus } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";

const Header = () => {
  const [input, setInput] = useState("");

  const [search, setSearch] = useState("");
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [anime, setAnime] = useState(JSON.parse(localStorage.getItem("list")));

  // const [anime, setAnime] = useState([
  //   {
  //     id: 1,
  //     checked: false,
  //     name: "Death Note",
  //   },
  //   {
  //     id: 2,
  //     checked: false,
  //     name: "Death Note",
  //   },
  //   {
  //     id: 3,
  //     checked: false,
  //     name: "Death Note",
  //   },
  // ]);

  const handleCheck = (id) => {
    const check = anime.map((list) =>
      list.id === id ? { ...list, checked: !list.checked } : list
    );
    setAnime(check);
    localStorage.setItem("list", JSON.stringify(check));
  };

  const handleDelete = (id) => {
    const del = anime.filter((data) => data.id !== id);
    setAnime(del);
    localStorage.setItem("list", JSON.stringify(del));
  };

  const searchs = () => {
    const ser = anime.filter((data) =>
      data.name.toLowerCase().includes(search.toLowerCase())
    );
    setAnime(ser);
    // localStorage.setItem("list",JSON.stringify(ser))
    // localStorage.clear()
  };

  const additem = (e) => {
    e.preventDefault();
    if (!input) return;
    else if (input && edit) {
      const a = anime.map((data) =>
        data.id === editId ? { ...data, name: input } : data
      );
      setAnime(a);
      localStorage.setItem("list", JSON.stringify(a));
      setEdit(false);
      setInput("");
    } else {
      const id = anime.length ? anime[anime.length - 1].id + 1 : 1;
      const myadded = { id: id, name: input, checked: false };
      console.log(myadded);
      const arr = [...anime, myadded];
      console.log(arr);
      setAnime(arr);
      setInput("");
      localStorage.setItem("list", JSON.stringify(arr));
    }
  };

  const handleEdit = (id) => {
    setEdit(true);
    const edits = anime.find((data) => {
      return data.id === id;
    });
    setInput(edits.name);
    setEditId(id);
  };

  return (
    <>
      {anime.length ? (
        <>
          <div className="flex flex-col h-screen items-center select-none">
            <div className="w-[50%] flex flex-col justify-center items-center space-y-4 my-3">
              <input
                type="text"
                value={search}
                onInput={searchs}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full p-2 rounded-xl shadow-lg bg-transparent border-2 text-black focus:outline-none"
                placeholder="Search"
              />
              <form className="flex justify-between rounded-xl shadow-lg border-2 w-full items-center">
                <input
                  type="text"
                  name="ayush"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className=" p-2 w-[95%] rounded-xl bg-transparent text-black focus:outline-none"
                  placeholder="Anime List"
                />
                {edit ? (
                  <button
                    onClick={additem}
                    className=" mx-[2px] bg-blue-400 rounded-lg text-white p-2 text-xl"
                  >
                    <BiEdit />
                  </button>
                ) : (
                  <button
                    onClick={additem}
                    className=" mx-[2px] bg-blue-400 rounded-lg text-white p-2 text-xl"
                  >
                    <AiOutlinePlus />
                  </button>
                )}
              </form>
            </div>
            <div className=" text-black w-[50%] my-3">
              {anime.map((data) => (
                <>
                  <div
                    key={data.id}
                    className="flex justify-center border-2 border-black/20 rounded-xl p-1 my-5 shadow-lg items-center w-full"
                  >
                    <div
                      key={data.id}
                      className="flex items-center space-x-2 p-2 w-full"
                    >
                      <input
                        type="checkbox"
                        className="w-8 h-8"
                        onChange={() => handleCheck(data.id)}
                        checked={data.checked}
                      />
                      <li key={data.id} className="list-none text-2xl">
                        {data.name}
                      </li>
                    </div>
                    <button
                      onClick={() => handleEdit(data.id)}
                      className="text-2xl mx-[6px] text-green-600"
                    >
                      <BiEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(data.id)}
                      className="text-2xl mx-[6px] text-red-600"
                    >
                      <AiTwotoneDelete />
                    </button>
                  </div>
                </>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="bg-black h-screen text-white flex flex-col space-y-10  items-center select-none">
            <form
              onSubmit={additem}
              className="flex justify-center w-[50%] mt-28 items-center"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full p-2 rounded-xl shadow-lg bg-transparent border-2 text-white focus:outline-none"
                placeholder="Anime List"
              />
              <button className="bg-blue-500 text-white rounded-md p-2 text-xl mx-1">
                <AiOutlinePlus />
              </button>
            </form>

            <h1 className="flex items-center justify-center text-center leading-snug text-7xl ">
              Oops You dont have
              <br /> any list Item !
            </h1>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
