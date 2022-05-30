import React from "react";
import "../stylesheets/Area.css";

function Area({ area }) {

  console.log("Area:", area);
  const { name, limit, text } = area

  return (
    <div
      className="area"
      id={name}
    >
      <h3 className="labels">
        {text} | Limit: {limit}
      </h3>
      {/* See Checkpoint 1 item 2 in the Readme for a clue as to what goes here */}
    </div>
  );
}

Area.propTypes = {
  hosts: function (props) {
    if (props.hosts.length > props.limit) {
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      );
    }
  },
};

export default Area;
