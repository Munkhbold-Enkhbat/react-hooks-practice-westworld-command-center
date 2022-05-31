import React from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import ColdStorage from "./ColdStorage"
import "../stylesheets/Headquarters.css";
import LogPanel from "./LogPanel"

function Headquarters({ nonActiveHosts, areas, selectedHost, setSelectedHost, pickHost, updateHost }) {
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
        />
      </Grid.Column>
      <Grid.Column width={3}>
        <LogPanel nonActiveHosts={nonActiveHosts}/>
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;
