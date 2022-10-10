package com.example.backendtest.entity;

import javax.persistence.*;

@Entity
@Table(name="orderitem")
public class Order {
    @Id
    @Column(name = "ORDER_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "ORDER_ITEM")
    private String item;
    @Column(name = "ORDER_QTY")
    private int quantity;
    @Column(name = "ORDER_ADDRESS")
    private String address;
    @Column(name = "ORDER_COST")
    private int totcost;
    @Column(name = "ORDER_TIME")
    private String timestamp;
    @Column(name = "ORDER_STATUS")
    private String status;

    public Order(long id, String item, int quantity, String address, int totcost, String timestamp, String status) {
        this.id = id;
        this.item = item;
        this.quantity = quantity;
        this.address = address;
        this.totcost = totcost;
        this.timestamp = timestamp;
        this.status = status;
    }

    public Order() {
    }

    public Order(String item, int quantity, String address, int totcost, String timestamp, String status) {
        this.item = item;
        this.quantity = quantity;
        this.address = address;
        this.totcost = totcost;
        this.timestamp = timestamp;
        this.status = status;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getItem() {
        return item;
    }

    public void setItem(String item) {
        this.item = item;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public int getTotcost() {
        return totcost;
    }

    public void setTotcost(int totcost) {
        this.totcost = totcost;
    }

    public String getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Order{" +
                "id=" + id +
                ", item='" + item + '\'' +
                ", quantity=" + quantity +
                ", address='" + address + '\'' +
                ", totcost=" + totcost +
                ", timestamp='" + timestamp + '\'' +
                ", status='" + status + '\'' +
                '}';
    }
}
