import { useSelector } from "react-redux";

function Test() {
  //   let datenow = new Date();
  //   console.log(datenow);
  //   let mileseconds = Date.now();
  //   console.log(mileseconds);
  //   let secound = mileseconds / 1000;
  //   console.log(secound);
  //   let minute = secound / 60;
  //   console.log(minute);
  //   let hour = minute / 60;
  //   console.log(hour);
  //   let day = hour / 24;
  //   console.log(day);
  //   let year = day / 365;
  //   console.log(year);
  //   console.log(datenow.getTime());
  //   console.log(datenow.getFullYear());
  const user = useSelector((state) => state.user);
  console.log(user);
  console.log(user.user.name);
}
export default Test;
