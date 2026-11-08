
import React, { useEffect, useState } from "react";

import { MemoryCard } from "../components/MemoryCard";
import { ResourceChart } from "../components/ResourceChart";
import { ProcessTable } from "../components/ProcessTable";

import {
  Cpu,
  HardDrive,
  MemoryStick,
  Activity
} from "lucide-react";

function Dashboard() {

  const [system, setSystem] = useState(null);
  const [processes, setProcesses] = useState([]);
  const [memoryData, setMemoryData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {

    const fetchData = async () => {

      try {

        // Call Java backend API
        const response = await fetch(
          "http://localhost:8080/api/system/overview"
        );

        if (!response.ok) {
          throw new Error("API request failed");
        }

        const data = await response.json();

        // Store backend response in React state
        setSystem(data);

        // Call processes API
        const processResponse = await fetch(
          "http://localhost:8080/api/system/processes"
        );

        if (!processResponse.ok) {
          throw new Error("Process API failed");
        }

        const processData = await processResponse.json();

        setProcesses(processData);
        setError("");

        // Update memory graph
        setMemoryData(previous => [
          ...previous,
          {
            name: new Date().toLocaleTimeString(),
            usage: data.memoryUsagePercent
          }
        ].slice(-10));

      } catch (err) {

        console.error(err);
        setError("Unable to connect to Java backend.");

      }
    };

    fetchData();

    // Refresh data every 2 seconds
    const interval = setInterval(fetchData, 2000);

    return () => clearInterval(interval);

  }, []);

  if (!system) {
    return <h2>{error || "Loading system information..."}</h2>;
  }

  return (

    <div className="dashboard">

      <div className="dashboard-header">
        <div>
          <h1>System Memory Monitor</h1>
          <p>Real-time computer performance</p>
        </div>

        <span className="status">● System Online</span>
      </div>

      <div className="cards-grid">

        <MemoryCard
          title="Total Memory"
          value={`${system.totalMemoryGB} GB`}
          subtitle="Installed RAM"
          icon={MemoryStick}
        />

        <MemoryCard
          title="Used Memory"
          value={`${system.usedMemoryGB} GB`}
          subtitle={`${system.memoryUsagePercent}% used`}
          icon={Activity}
        />

        <MemoryCard
          title="CPU Usage"
          value={`${system.cpuUsagePercent}%`}
          subtitle="Processor utilization"
          icon={Cpu}
        />

        <MemoryCard
          title="Disk Used"
          value={`${system.diskUsedGB} GB`}
          subtitle={`Total ${system.diskTotalGB} GB`}
          icon={HardDrive}
        />

      </div>

      <div className="chart-section">
        <ResourceChart data={memoryData} />
      </div>

      <div className="process-section">
        <ProcessTable processes={processes} />
      </div>

    </div>

  );
}

export default Dashboard;
