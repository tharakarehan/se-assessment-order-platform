package com.example.backendtest.service;

import com.example.backendtest.entity.Order;
import com.example.backendtest.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    private final OrderRepository orderRepository;

    @Autowired
    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public Order saveOrder(Order order) {
        return orderRepository.save(order);
    }


    public Order updateOrder(Order order) {
        return orderRepository.save(order);
    }



    public List<Order> getAllOrders() {
        return (List<Order>) orderRepository.findAll();
    }


    public Order getOrder(Long orderId) {
        return orderRepository.findById(orderId).get();
    }


    public void deleteOrder(Long orderId) { orderRepository.deleteById(orderId);}
}
