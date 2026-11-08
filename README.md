# System Memory Monitor

A real-time system monitoring dashboard built using **Java Spring Boot, React.js, and OSHI**. It monitors system resources such as RAM, CPU, disk usage, and running processes through a web-based dashboard.

## 🚀 Features

- **RAM Monitoring:** Displays total RAM, used RAM, available RAM, and memory usage percentage.
- **CPU Monitoring:** Tracks real-time CPU utilization.
- **Disk Monitoring:** Displays total and used disk space.
- **Performance Charts:** Visualizes RAM and CPU usage over time.
- **Process Monitoring:** Displays running processes with their process IDs and RAM consumption.
- **Process Search:** Search for applications by process name.
- **Process Sorting:** Sort processes based on RAM usage.
- **Auto Refresh:** Updates system information periodically.
- **Responsive Dashboard:** Clean dashboard interface with dark theme.

## 🛠️ Technologies Used

### Backend
- Java
- Spring Boot
- OSHI (Operating System and Hardware Information)
- Maven
- REST APIs

### Frontend
- React.js
- Vite
- JavaScript
- Recharts
- Lucide React
- CSS

## 📁 Project Structure

```text
system-monitor/
│
├── backend/
│   └── src/
│       └── main/
│           └── java/
│               └── system_monitor/
│                   ├── config/
│                   │   └── CorsConfig.java
│                   ├── controller/
│                   │   └── SystemController.java
│                   ├── service/
│                   │   └── SystemMonitorService.java
│                   └── SystemMonitorApplication.java
│
└── frontend/
    └── src/
        ├── components/
        │   ├── Navbar.jsx
        │   ├── MemoryCard.jsx
        │   ├── ResourceChart.jsx
        │   └── ProcessTable.jsx
        ├── pages/
        │   └── Dashboard.jsx
        ├── App.jsx
        ├── App.css
        └── index.css
```

*Note: Adjust the folder names if your actual project structure is different.*

## ⚙️ Installation and Setup

### Prerequisites

Make sure you have installed:

- Java JDK 17 or compatible version configured in your project
- Node.js and npm
- Maven (or use the Maven Wrapper included in the project)
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/system-monitor.git
cd system-monitor
```

### 2. Start the Backend

Open a terminal in the Spring Boot backend directory.

Using Maven Wrapper on Windows:

```bash
.\mvnw.cmd clean install
.\mvnw.cmd spring-boot:run
```

The backend will start at:

```text
http://localhost:8080
```

### 3. Start the Frontend

Open another terminal in the frontend directory:

```bash
cd frontend
npm install
npm run dev
```

The React application will start at:

```text
http://localhost:5173
```

Open the frontend URL in your browser.

## 🔗 REST API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/system/overview` | Retrieves system resource information |
| GET | `/api/system/processes` | Retrieves running process information |

### Example System Overview Response

```json
{
  "availableMemoryGB": 0.77,
  "diskTotalGB": 475.11,
  "diskUsedGB": 266.23,
  "usedMemoryGB": 6.91,
  "totalMemoryGB": 7.68,
  "memoryUsagePercent": 89.93,
  "cpuUsagePercent": 15.78
}
```

*Example response only. Actual values depend on the system being monitored.*

## 📊 Dashboard Preview

The dashboard provides a centralized view of:

- RAM utilization
- CPU utilization
- Disk usage
- Live performance history
- Running applications and their memory consumption

## 🧠 How It Works

1. The Spring Boot backend uses the OSHI library to collect operating system and hardware information.
2. The service retrieves memory, CPU, disk, and process details.
3. REST APIs expose the collected information.
4. The React frontend fetches data from the backend.
5. Recharts displays resource utilization in graphical form.
6. The dashboard refreshes periodically to show updated system information.

## 🎯 Project Objective

The objective of this project is to develop a real-time system monitoring application that helps users understand resource utilization, track running processes, and observe system performance through an interactive dashboard.

## 👨‍💻 Author

**Abhishek Yadav**

- GitHub: [abhi2J4](https://github.com/abhi2J4)
- LinkedIn: [Abhishek Yadav](https://www.linkedin.com/in/abhishek-yadav-4a0835283/)

---

⭐ If you find this project useful, consider giving it a star on GitHub!
