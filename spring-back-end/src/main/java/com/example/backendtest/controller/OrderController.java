package com.example.backendtest.controller;

import com.example.backendtest.entity.Order;
import com.example.backendtest.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/orders")
public class OrderController {
    private final OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @CrossOrigin
    @GetMapping(path = "/hello")
    public String getMessage() {
        return "Hello boot";
    }

    @CrossOrigin
    @GetMapping(path = "/getall")
    public List<Order> getAllOrders() {
        return orderService.getAllOrders();
    }

    @CrossOrigin
    @GetMapping("/getone/{orderId}")
    public Order getOrder(@PathVariable(name = "orderId") Long orderId) {
        return orderService.getOrder(orderId);
    }

    @CrossOrigin
    @PostMapping("/save")
    public Order saveOrder(@RequestBody Order order) {

        return orderService.saveOrder(order);
    }

    @CrossOrigin
    @PutMapping("/update")
    public Order updateOrder(@RequestBody Order order) {
        return orderService.updateOrder(order);
    }

    @CrossOrigin
    @DeleteMapping("/delete/{orderId}")
    public void deleteOrder(@PathVariable(name = "orderId") Long orderId) {
        orderService.deleteOrder(orderId);
    }


}
