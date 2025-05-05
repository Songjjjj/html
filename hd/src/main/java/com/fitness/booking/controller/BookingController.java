package com.fitness.booking.controller;

import com.fitness.booking.model.BookingRequest;
import com.opencsv.CSVWriter;
import org.springframework.web.bind.annotation.*;

import java.io.FileWriter;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class BookingController {

    private static final String CSV_FILE_PATH = "bookings.csv";

    @PostMapping("/book")
    public Map<String, String> submitBooking(@RequestBody BookingRequest request) {
        Map<String, String> response = new HashMap<>();
        
        try (CSVWriter writer = new CSVWriter(new FileWriter(CSV_FILE_PATH, true))) {
            // 准备CSV行数据
            String[] data = {
                LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME),
                request.getName(),
                request.getEmail(),
                request.getTopic(),
                request.getSuggestion()
            };
            
            // 写入CSV文件
            writer.writeNext(data);
            
            response.put("status", "success");
            response.put("message", "预约信息已成功保存");
        } catch (IOException e) {
            response.put("status", "error");
            response.put("message", "保存预约信息时发生错误: " + e.getMessage());
        }
        
        return response;
    }
} 