import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import ColdStorage from "./ColdStorage"
import LogPanel from "./LogPanel"
import "../stylesheets/Headquarters.css";

function Headquarters({ nonActiveHosts, areas, selectedHost, setSelectedHost, pickHost, updateHost, handleActivateBtn }) {
  
  const [logs, setLogs] = useState([])

  function addLog(log) {
    setLogs([log, ...logs])
  }

  return (
    <Grid celled="internally">
      <Grid.Column width={8}>
      <ColdStorage 
          nonActiveHosts={nonActiveHosts}
          pickHost={pickHost}
        />
      </Grid.Column>       
      <Grid.Column width={5}>
        <Details 
          selectedHost={selectedHost} 
          setSelectedHost={setSelectedHost}
          areas={areas}
          updateHost={updateHost}
          addLog={addLog}
        />
      </Grid.Column>
      <Grid.Column width={3}>
        <LogPanel 
          nonActiveHosts={nonActiveHosts}
          handleActivateBtn={handleActivateBtn}
          selectedHost={selectedHost}
          addLog={addLog}
          logs={logs}
        />
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;
