import React from "react";
import { Segment } from "semantic-ui-react";
import Area from "./Area"

function WestworldMap({ areas, activeHosts }) {

  function renderAreas() {
    return areas.map(area => {
      const hostsInArea = activeHosts.filter(host => host.area === area.name)
      return <Area key={area.id} area={area} hostsInArea={hostsInArea}/>
    })
  }

  return (
    <Segment id="map">
      {renderAreas()}
    </Segment>
  )
}

export default WestworldMap;
