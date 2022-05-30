import React from "react";
import { Segment } from "semantic-ui-react";
import HostList from "./HostList";

function ColdStorage({ nonActiveHosts, selectedHost, setSelectedHost, hosts }) {

  return (
    <Segment.Group className="HQComps">
      <Segment compact>
        <h3 className="labels">ColdStorage</h3>
      </Segment>
      <Segment compact>
        <HostList 
          nonActiveHosts={nonActiveHosts}
          selectedHost={selectedHost} 
          setSelectedHost={setSelectedHost} 
          hosts={hosts}
        />
      </Segment>
    </Segment.Group>
  );
}

export default ColdStorage;
