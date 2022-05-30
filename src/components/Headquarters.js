import React from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import ColdStorage from "./ColdStorage"
import "../stylesheets/Headquarters.css";

function Headquarters({ nonActiveHosts, setHosts, areas, selectedHost, pickHost }) {
  return (
    <Grid celled="internally">
      <Grid.Column width={8}>{/* Something goes here.... */}</Grid.Column>
        <ColdStorage 
          nonActiveHosts={nonActiveHosts}
          selectedHost={selectedHost}
          pickHost={pickHost}
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
