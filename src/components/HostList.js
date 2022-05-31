import React from "react";
import { Card } from "semantic-ui-react";
import Host from "./Host"

function HostList({ hosts, pickHost }) {

  function renderHosts() {
    return hosts.map(host => {      
      return (
        <Host key={host.id} 
          host={host} 
          pickHost={pickHost}
        />
      )
    })
  }

  return (
    <Card.Group itemsPerRow={6}>{renderHosts()}</Card.Group>
  );
}

export default HostList;
