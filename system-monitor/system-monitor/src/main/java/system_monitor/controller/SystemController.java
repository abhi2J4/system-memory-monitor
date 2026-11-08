
package system_monitor.controller;

import system_monitor.service.SystemMonitorService;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/system")
@CrossOrigin(origins = "http://localhost:5173")
public class SystemController {

    private final SystemMonitorService monitorService;

    public SystemController(SystemMonitorService monitorService) {
        this.monitorService = monitorService;
    }

    @GetMapping("/overview")
    public Map<String, Object> getOverview() {
        return monitorService.getSystemOverview();
    }

    @GetMapping("/processes")
    public List<Map<String, Object>> getProcesses() {
        return monitorService.getProcesses();
    }
}
