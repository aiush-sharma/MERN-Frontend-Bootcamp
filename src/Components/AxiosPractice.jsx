import React from "react";
import { useState } from "react";
import axios from "axios";
const AxiosPractice = () => {
  let url = "https://dummyjson.com/users";
  const [users, setUsers] = useState([]);
  //   async function FetchData() {
  //     try {
  //       const response = await fetch(url);
  //       const data = await response.json();

  //       console.log(data);
  //     //   setUsers(data.data.users)
  //       console.log(data.data.users)
  //     } catch (err) {
  //       console.log("An Error Occured ", err);
  //     }
  //   }
  async function AxiosData() {
    try {
      const data = await axios.get(url);
      setUsers(data.data.users);
    } catch (err) {
      console.log("An Error Occured ", err);
    }
  }

  return (
    <>
      <button className="p-5 bg-amber-400">Fetch</button>

      {users.map((user, idx) => (
        <>
          <div className=" flex-col w-full">
            <div className=" bg-green-300 p-5 m-5 rounded-md " key={idx}>
              <p key={user.id}>{user.id}</p>
              <p key={user.firstName}>{user.firstName}</p>
              <p key={user.lastName}>{user.lastName}</p>
              <p key={user.email}>{user.email}</p>
              <p key={user.address}>{user.address.city}</p>
            </div>
          </div>
        </>
      ))}
      <button className="p-5 bg-amber-400" onClick={AxiosData}>
        Axios Data
      </button>
    </>
  );
};

export default AxiosPractice;

// first name last name email and address
