import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import ColdStorage from "./ColdStorage"
import "../stylesheets/Headquarters.css";
import LogPanel from "./LogPanel"

function Headquarters({ nonActiveHosts, areas, selectedHost, setSelectedHost, pickHost, updateHost, handleActivateBtn }) {
  
  const [logs, setLogs] = useState([])

  const addLog = (log) => {
    setLogs([...logs, log])
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
