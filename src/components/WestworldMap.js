import React from "react";
import { Segment } from "semantic-ui-react";
import Area from "./Area"

function WestworldMap({ updatedAreas, pickHost }) {
  
  const areaList = updatedAreas.map(area => {
    return <Area key={area.id} area={area} pickHost={pickHost}/>
  })

  return (
    <Segment id="map">
      {areaList}
    </Segment>
  )
}

export default WestworldMap;
