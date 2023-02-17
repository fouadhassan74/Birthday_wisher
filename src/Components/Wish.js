import React from "react";

const Wish = (props) => {
  return (
    <div className="wish-message">
      HAPPY BIRTHDAY <span className="highlight">{props.name.toUpperCase()}</span> !!!
    </div>
  );
};

export default Wish;
