import React from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import ColdStorage from "./ColdStorage"
import "../stylesheets/Headquarters.css";

function Headquarters({ hosts, setHosts, areas, nonActiveHosts, selectedHost, setSelectedHost }) {
  return (
    <Grid celled="internally">
      <Grid.Column width={8}>{/* Something goes here.... */}</Grid.Column>
        <ColdStorage 
          hosts={hosts} 
          nonActiveHosts={nonActiveHosts} 
          selectedHost={selectedHost}
          setSelectedHost={setSelectedHost}
        />
      <Grid.Column width={5}>
        <Details selectedHost={selectedHost} areas={areas}/>
      </Grid.Column>
      <Grid.Column width={3}>
        {/* and here. Take visual cues from the screenshot/video in the Readme. */}
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;
