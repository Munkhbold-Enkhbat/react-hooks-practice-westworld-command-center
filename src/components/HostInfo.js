import React, { useState } from "react";
import {
  Radio,
  Icon,
  Card,
  Grid,
  Image,
  Dropdown,
  Divider,
} from "semantic-ui-react";
import "../stylesheets/HostInfo.css";
import { Log } from "../services/Log";

function HostInfo({ selectedHost, areas, updateHost, setSelectedHost, addLog }) {

  const { id, firstName, active, imageUrl, gender, area } = selectedHost
  const [options] = useState(areas.map(area => (
      { key: area.name, text: area.text, value: area.name}
    ))
  );

  function handleOptionChange(e, { value }) {    
    const currentArea = areas.find(area => area.name === value)

    if(currentArea.limit > currentArea.hosts.length) {
      
      fetch(`http://localhost:3001/hosts/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          area: value
        })
      }).then(res => res.json())
        .then(hostData => {
          setSelectedHost(hostData)
          updateHost(hostData)  
          addLog(Log.notify(`${firstName} set in area ${currentArea.text}`))        
        })
    } else {
      addLog(Log.error(`Too many hosts. Cannot add ${firstName} to ${currentArea.text}`))
    }  
  }

  function handleRadioChange() {
    fetch(`http://localhost:3001/hosts/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        active: !active
      })
    }).then(res => res.json())
      .then(hostData => {
        setSelectedHost(hostData)
        updateHost(hostData) 
        let status = !active ? 'Activated' : 'Decommissioned'
        addLog(Log.notify(`${status} ${firstName}.`))
      })

  }

  return (
    <Grid>
      <Grid.Column width={6}>
        <Image
          src={imageUrl}
          floated="left"
          size="small"
          className="hostImg"
        />
      </Grid.Column>
      <Grid.Column width={10}>
        <Card>
          <Card.Content>
            <Card.Header>
              {firstName} | {gender==="Male" ? <Icon name="man" /> : <Icon name="woman" />}
            </Card.Header>
            <Card.Meta>
              <Radio
                onChange={handleRadioChange}
                label={active ? "Active" : "Decommissioned"}
                checked={active}
                slider
              />
            </Card.Meta>
            <Divider />
            Current Area:
            <Dropdown
              onChange={handleOptionChange}
              value={area}
              name="area"
              options={options}
              selection
            />
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  );
}

export default HostInfo;
