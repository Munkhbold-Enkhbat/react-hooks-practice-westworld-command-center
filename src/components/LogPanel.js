import React from "react";
import { Segment, Button } from "semantic-ui-react";
import { Log } from "../services/Log";

function LogPanel({ nonActiveHosts, handleActivateBtn, selectedHost, addLog, logs }) {

  let isAllHostsActive = nonActiveHosts.length === 0 ? true : false

  const handleClick = (e) => {
    isAllHostsActive = !isAllHostsActive
    isAllHostsActive ? addLog(Log.notify("Decommissiong all hosts.")) : 
    addLog(Log.warn("Activating all hosts!"))
    handleActivateBtn(e, selectedHost)
  }

  return (
    <Segment className="HQComps" id="logPanel">
      <pre>
        {logs.map((log, i) => (
          <p key={i} className={log.type}>
            {log.msg}
          </p>
        ))}
      </pre>
      <Button fluid 
        color={isAllHostsActive ? "green" : "red"} 
        content={isAllHostsActive ? "DECOMMISSION ALL" : "ACTIVATE ALL"}
        onClick={handleClick}
      />        
    </Segment>
  );
}

export default LogPanel;
