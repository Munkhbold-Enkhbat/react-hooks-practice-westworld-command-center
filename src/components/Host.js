import React from "react";
import { Card } from "semantic-ui-react";
import "../stylesheets/Host.css";

function Host({ host, pickHost }) {

  let { imageUrl, authorized } = host  
  const handleClick = () => {
    pickHost(host)
  }
  
  return (
    <Card
      className={authorized ? "host selected" : "host"}
      onClick={handleClick}
      image={imageUrl}
      raised
      link
    />
  );
}

export default Host;
