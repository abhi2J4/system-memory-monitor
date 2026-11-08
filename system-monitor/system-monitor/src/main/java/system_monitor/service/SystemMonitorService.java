
package system_monitor.service;
import oshi.SystemInfo;
import oshi.hardware.CentralProcessor;
import oshi.hardware.GlobalMemory;
import oshi.software.os.OSFileStore;
import oshi.software.os.OSProcess;

import java.util.*;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

@Service
public class SystemMonitorService {

    private final SystemInfo systemInfo = new SystemInfo();

    public Map<String, Object> getSystemOverview() {

        Map<String, Object> data = new HashMap<>();

        GlobalMemory memory =
                systemInfo.getHardware().getMemory();

        long total = memory.getTotal();
        long available = memory.getAvailable();
        long used = total - available;

        double totalGB = total / (1024.0 * 1024 * 1024);
        double usedGB = used / (1024.0 * 1024 * 1024);
        double availableGB = available / (1024.0 * 1024 * 1024);

        double memoryPercent =
                total == 0 ? 0 : (used * 100.0 / total);

        CentralProcessor processor =
                systemInfo.getHardware().getProcessor();

      


// Get previous CPU ticks
long[] previousTicks = processor.getSystemCpuLoadTicks();

// Wait for CPU measurement interval
try {
    Thread.sleep(1000);
} catch (InterruptedException e) {
    Thread.currentThread().interrupt();
}

// Get CPU usage percentage
double cpuUsage =
        processor.getSystemCpuLoadBetweenTicks(previousTicks) * 100;


        long diskTotal = 0;
        long diskAvailable = 0;

        for (OSFileStore disk :
                systemInfo.getOperatingSystem()
                        .getFileSystem().getFileStores()) {

            diskTotal += disk.getTotalSpace();
            diskAvailable += disk.getUsableSpace();
        }

        data.put("totalMemoryGB", round(totalGB));
        data.put("usedMemoryGB", round(usedGB));
        data.put("availableMemoryGB", round(availableGB));
        data.put("memoryUsagePercent", round(memoryPercent));

        data.put("cpuUsagePercent", round(cpuUsage));

        data.put("diskTotalGB",
                round(diskTotal / (1024.0 * 1024 * 1024)));

        data.put("diskUsedGB",
                round((diskTotal - diskAvailable)
                        / (1024.0 * 1024 * 1024)));

        return data;
    }

    public List<Map<String, Object>> getProcesses() {

        List<OSProcess> processes =
                systemInfo.getOperatingSystem().getProcesses();

        return processes.stream()
                .sorted((a, b) ->
                        Long.compare(
                                b.getResidentSetSize(),
                                a.getResidentSetSize()
                        ))
                .limit(20)
                .map(process -> {

                    Map<String, Object> item = new HashMap<>();

                    double ramGB =
                            process.getResidentSetSize()
                            / (1024.0 * 1024 * 1024);

                    item.put("id", process.getProcessID());
                    item.put("name", process.getName());
                    item.put("ram", round(ramGB));

                    return item;
                })
                .collect(Collectors.toList());
    }

    private double round(double value) {
        return Math.round(value * 100.0) / 100.0;
    }
}
