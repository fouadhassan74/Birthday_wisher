import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SET_User } from "../rtk/user_slice";

const Genrate = () => {
  const [name, setName] = useState("Fouad");
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState(1);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const genrate = () => {
    dispatch(
      SET_User({
        name: name,
        month: month,
        day: day,
      })
    );
    navigate("/birthday");
  };
  console.log(user);

  return (
    <div className="page">
      <h1>Genrate Here</h1>
      <div className="form">
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter the name"
          value={name}
        />
        <input
          type="number"
          placeholder="Enter the day"
          onChange={(e) => setDay(e.target.value)}
          value={day}
          min={1}
          max={31}
        />
        <select value={month} onChange={(e) => setMonth(e.target.value)}>
          <option value="1"> January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">Agust</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
      </div>
      <button className="btn" onClick={() => genrate()}>
        Add
      </button>

      {/* {Link !== "" ? (
        <>
          <p className="gen-link">{Link}</p>
          <Link to={`birthday/${name}/${day}/${month}`}>
            <button className="btn">Visit Link</button>
          </Link>
        </>
      ) : (
        ""
      )} */}
    </div>
  );
};

export default Genrate;
