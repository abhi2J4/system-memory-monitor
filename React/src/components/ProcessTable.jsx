
import React from "react";

export function ProcessTable() {

  const processes = [
    { id: 1, name: "Google Chrome", ram: "2.1 GB", cpu: "12%" },
    { id: 2, name: "IntelliJ IDEA", ram: "1.8 GB", cpu: "15%" },
    { id: 3, name: "VS Code", ram: "0.8 GB", cpu: "5%" },
    { id: 4, name: "Node.js", ram: "0.5 GB", cpu: "3%" },
    { id: 5, name: "System", ram: "1.2 GB", cpu: "8%" }
  ];

  return (
    <div className="process-card">

      <h2>Running Processes</h2>

      <table>
        <thead>
          <tr>
            <th>Application</th>
            <th>Memory Usage</th>
            <th>CPU Usage</th>
          </tr>
        </thead>

        <tbody>
          {processes.map((process) => (
            <tr key={process.id}>
              <td>{process.name}</td>
              <td>{process.ram}</td>
              <td>{process.cpu}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}
