package com.example.backendtest.config;

import com.example.backendtest.entity.Item;
import com.example.backendtest.repository.ItemRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class ItemConfig {

//    @Bean
    CommandLineRunner commandLineRunner(ItemRepository repository){
        return args -> {
            Item coconut = new Item(
                    "Coconut",
                    250
            );

            Item iphone = new Item(
                    "iphone 14",
                    500000
            );
            repository.saveAll(List.of(coconut, iphone));
        };
    }
}
