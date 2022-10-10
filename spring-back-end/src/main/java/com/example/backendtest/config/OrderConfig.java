package com.example.backendtest.config;

import com.example.backendtest.entity.Order;
import com.example.backendtest.repository.OrderRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class OrderConfig {

    @Bean
    CommandLineRunner commandLineRunner(OrderRepository repository) {
        return args -> {
            Order order01 = new Order(
                    "iphone",
                    2,
                    "No.33, Bemmulla",
                    1000000,
                    "202210100313",
                    "NEW"
            );
            repository.saveAll(List.of(order01));
        };
    }
}
