import React, { useEffect, useState } from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import WestworldMap from "./WestworldMap";
import Headquarters from "./Headquarters";

function App() {

  const [areas, setAreas] = useState([])
  const [hosts, setHosts] = useState([])
  const [selectedHost, setSelectedHost] = useState(null)    

  useEffect(() => {
    fetch('http://localhost:3001/areas')
      .then(res => res.json())
      .then(areaData => setAreas(areaData))
  }, [])

  useEffect(() => {
    fetch('http://localhost:3001/hosts')
      .then(res => res.json())
      .then(hostsData => setHosts(hostsData))
  }, [])

  const activeHosts = hosts.filter(host => host.active)
  const nonActiveHosts = hosts.filter(host => !host.active)

  // console.log("Active hosts:", activeHosts);
  // console.log("Non-active hosts:", nonActiveHosts);
  // console.log("selected host:", selectedHost);

  const updatedAreas = areas.map(area => {
    const strArr =area.name.split(/[_]/)
    const area_name = strArr.map(str => str[0].toUpperCase() + str.slice(1)).join(' ')
    const areaHosts = activeHosts.filter(host => host.area === area.name)
    return ({...area, text: area_name, hosts: areaHosts})
  })

  const pickHost = (host) => {
    setSelectedHost(host)
    hosts.forEach(currentHost => currentHost.id === host.id ? currentHost.authorized = true 
      : currentHost.authorized = false)
  }

  return (
    <Segment id="app">
      <WestworldMap updatedAreas={updatedAreas} pickHost={pickHost}/>
      <Headquarters 
        areas={updatedAreas}
        setHosts={setHosts}
        nonActiveHosts={nonActiveHosts}
        selectedHost={selectedHost}
        pickHost={pickHost}
      />
    </Segment>
  );
}

export default App;
