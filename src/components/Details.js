import React from "react";
import { Segment, Image } from "semantic-ui-react";
import * as Images from "../services/Images";
import HostInfo from "./HostInfo"

function Details({ selectedHost, setSelectedHost, areas, updateHost, addLog }) {
  return (
    <Segment id="details" className="HQComps">
      {selectedHost ? 
        <HostInfo 
          selectedHost={selectedHost} 
          setSelectedHost={setSelectedHost}
          areas={areas} 
          updateHost={updateHost}
          addLog={addLog}
        /> : 
        <Image size="medium" src={Images.westworldLogo} />}
    </Segment>
  );
}

export default Details;
