import React from "react";
import "../stylesheets/Area.css";
import HostList from "./HostList"

function Area({ area, pickHost }) {
  const { name, limit, text, hosts } = area

  return (
    <div className="area" id={name}>
      <h3 className="labels">
        {text} | Limit: {limit}
      </h3>
      <HostList hosts={hosts} pickHost={pickHost}/>
    </div>
  );
}

export default Area;
