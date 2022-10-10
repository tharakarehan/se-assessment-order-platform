package com.example.backendtest.service;

import com.example.backendtest.entity.Item;
import com.example.backendtest.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemService {

    private final ItemRepository itemRepository;

    @Autowired
    public ItemService(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }


    public Item saveItem(Item item) {
        return itemRepository.save(item);
    }


    public Item updateItem(Item item) {
        return itemRepository.save(item);
    }



    public List<Item> getAllItems() {
        return (List<Item>) itemRepository.findAll();
    }


    public Item getItem(Long itemId) {
        return itemRepository.findById(itemId).get();
    }


    public void deleteItem(Long itemId) {
        itemRepository.deleteById(itemId);
    }

}
