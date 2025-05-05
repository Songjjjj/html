package com.fitness.booking.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class BookingRequest {
    private String name;
    private String email;
    private String topic;
    private String suggestion;
} 