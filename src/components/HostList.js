import React from "react";
import { Card } from "semantic-ui-react";
import Host from "./Host"

function HostList({ hosts, nonActiveHosts, selectedHost, setSelectedHost }) {

  function renderHosts() {
    return nonActiveHosts.map(host => {
      return (
        <Host key={host.id} 
          hosts={hosts}
          host={host} 
          selectedHost={selectedHost}
          setSelectedHost={setSelectedHost}
        />
      )
    })
  }

  return (
    <Card.Group itemsPerRow={6}>{renderHosts()}</Card.Group>
  );
}

export default HostList;
