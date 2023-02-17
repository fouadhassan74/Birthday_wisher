import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Countdown from "./Countdown";
import logo from "../images/25231.png";
const Birthday = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  const [state, setState] = useState({
    secounds: 0,
    hours: 0,
    minutes: 0,
    days: 0,
    isItBday: false,
  });
  const currentTime = new Date();
  const CurrentYear = currentTime.getFullYear(); //2023
  //   we need to revision it
  const isItBday =
    currentTime.getDate() === user.user.day &&
    currentTime.getMonth() === user.user.month - 1;
  // ############################################
  let birth = new Date(CurrentYear, user.user.month - 1, user.user.day);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let birthMonth = monthNames[birth.getMonth()];
  let increase = new Date();
  let test = increase.getFullYear();
  if (
    user.user.day < currentTime.getDate() &&
    user.user.month - 1 <= currentTime.getMonth()
  ) {
    test += 1;
  }

  useEffect(() => {
    setInterval(() => {
      const countdown = () => {
        const dateAtm = new Date();
        let birthdayDay = new Date(
          CurrentYear,
          user.user.month - 1,
          user.user.day
        );
        if (dateAtm > birthdayDay) {
          birthdayDay = new Date(
            CurrentYear + 1,
            user.user.month - 1,
            user.user.day
          );
        } else if (dateAtm.getFullYear() === birthdayDay.getFullYear() + 1) {
          birthdayDay = new Date(
            CurrentYear,
            user.user.month - 1,
            user.user.day
          );
        }
        const currentTime = dateAtm.getTime();
        const birthDayTime = birthdayDay.getTime();
        const timeRemaining = birthDayTime - currentTime;
        let secounds = Math.floor(timeRemaining / 1000);
        let minutes = Math.floor(secounds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);
        secounds %= 60;
        minutes %= 60;
        hours %= 24;
        setState((prevState) => ({
          ...prevState,
          secounds,
          minutes,
          hours,
          days,
          isItBday,
        }));
        console.log(`${days}:${hours}:${minutes}:${secounds} , ${isItBday}`);
      };
      if (!isItBday) {
        countdown();
      } else {
        setState((prevState) => ({
          ...prevState,
          isItBday: true,
        }));
      }
    }, 1000);
  }, [CurrentYear, user.user.day, isItBday, user.user.month]);

  return (
    <div className="page">
      <Countdown countdownDate={state} />
      <div className="birthdate">
        Birth-Date: {user.user.day} {birthMonth} {/*{test} */}
      </div>
      <div className="credits">
        <a href="https://github.com/fouadhassan74" target="_blank">
          <img src={logo} alt="Github-Logo" className="github-logo" />
        </a>
      </div>
    </div>
  );
};

export default Birthday;
