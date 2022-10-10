package com.example.backendtest.controller;

import com.example.backendtest.entity.Item;
import com.example.backendtest.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/v1/items")
public class ItemController {

    private final ItemService itemService;

    @Autowired
    public ItemController(ItemService itemService) {
        this.itemService = itemService;
    }

    @CrossOrigin
    @GetMapping(path = "/hello")
    public String getMessage() {
        return "Hello boot";
    }

    @CrossOrigin
    @GetMapping(path = "/getall")
    public List<Item> getAllItems() {
        return itemService.getAllItems();
    }

    @CrossOrigin
    @PostMapping("/save")
    public Item saveItem(@RequestBody Item item) {

        return itemService.saveItem(item);
    }

    @CrossOrigin
    @PutMapping("/update")
    public Item updateItem(@RequestBody Item item) {
        return itemService.updateItem(item);
    }

    @CrossOrigin
    @DeleteMapping("/delete/{itemId}")
    public void deleteItem(@PathVariable(name = "itemId") Long itemId) {
        itemService.deleteItem(itemId);
    }




}
