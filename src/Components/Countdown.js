import React from "react";
import { useSelector } from "react-redux";
const Countdown = (props) => {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <div className="page">
      <h1>
        Countdown to <span className="highlight">{user.user.name}'s</span>
        BIRTHDAY
      </h1>
      <div className="countdown-wrapper">
        <div className="countdown-box">
          {props.countdownDate.days}
          <span className="legend">Day</span>
        </div>
        <div className="countdown-box">
          {props.countdownDate.hours}
          <span className="legend">Hours</span>
        </div>
        <div className="countdown-box">
          {props.countdownDate.minutes}
          <span className="legend">Minutes</span>
        </div>
        <div className="countdown-box">
          {props.countdownDate.secounds}
          <span className="legend">Secounds</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
