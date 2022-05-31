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

  const updateHost = (chosenHost) => {
    const reNewedHosts = hosts.map(host => host.id === chosenHost.id ? chosenHost : host)
    setHosts(reNewedHosts)
  }

  function updateBackEnd(item) {
    fetch(`http://localhost:3001/hosts/${item.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        active: !item.active
      })
    }).then(res => res.json())
      .then(updatedItem => findAndUpdate(updatedItem))
  }

  const findAndUpdate = (hostObject) => {
    return hosts.map(host => host.id === hostObject.id ? hostObject : host)
  }

  function handleActivateBtn(e, chosenHost) {
    if(e.target.textContent === 'ACTIVATE ALL') {
      const activatedOnes = hosts.map(host => {
        if(host.active === false)  {
          updateBackEnd(host)
          return {...host, active: true} 
        } else {
          return host
        } 
      })
      activatedOnes.forEach(host => chosenHost.id === host.id ? setSelectedHost(host) : host)
      setHosts(activatedOnes)
    } else {
      const nonActivedOnes = hosts.map(host => {
        if(host.active === true)  {
          updateBackEnd(host)
          return {...host, active: false} 
        } else {
          return host
        } 
      })
      nonActivedOnes.forEach(host => chosenHost.id === host.id ? setSelectedHost(host) : host)
      setHosts(nonActivedOnes)
    }
  }

  return (
    <Segment id="app">
      <WestworldMap updatedAreas={updatedAreas} pickHost={pickHost}/>
      <Headquarters 
        areas={updatedAreas}
        setHosts={setHosts}
        nonActiveHosts={nonActiveHosts}
        selectedHost={selectedHost}
        setSelectedHost={setSelectedHost}
        pickHost={pickHost}
        updateHost={updateHost}
        handleActivateBtn={handleActivateBtn}
      />
    </Segment>
  );
}

export default App;
