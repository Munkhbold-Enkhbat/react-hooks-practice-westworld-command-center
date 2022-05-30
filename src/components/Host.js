import React from "react";
import { Card } from "semantic-ui-react";
import "../stylesheets/Host.css";

function Host({ hosts, host, selectedHost, setSelectedHost }) {

  let { id, imageUrl, authorized } = host
  
  const handleClick = () => {
    setSelectedHost(host)
    hosts.forEach(currentHost => currentHost.id === id ? currentHost.authorized = true 
      : currentHost.authorized = false)
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
