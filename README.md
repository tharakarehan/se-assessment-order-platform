# se-assessment-order-platform

## Demo

<img src="https://github.com/tharakarehan/se-assessment-order-platform/blob/main/demo.gif">
</p>

## Proposed Architecture

Following is the purposed microservice architecture for this system.

<p align="center">
  <img src="https://github.com/tharakarehan/se-assessment-order-platform/blob/main/microservice_architecture.jpeg">
</p>

## Proposed ERD and DDL Scripts

<img src="https://github.com/tharakarehan/se-assessment-order-platform/blob/main/ERD.jpeg">
</p>

```
CREATE TABLE `Customer` (
  `Customer_ID` int,
  `First Name` varchar(50),
  `Last Name` varchar(50),
  `Address` varchar(50),
  PRIMARY KEY (`Customer_ID`),
  KEY `Key` (`First Name`, `Last Name`, `Address`)
);

CREATE TABLE `Item` (
  `Item_ID` int,
  `Item Name` varchar(50),
  `Price` int,
  PRIMARY KEY (`Item_ID`),
  KEY `Key` (`Item Name`, `Price`)
);

CREATE TABLE `Order` (
  `Order_ID` int,
  `Item_ID` int,
  `Customer_ID` int,
  `Quantity` int,
  `Total Cost` int,
  `Shipping Address` varchar(50),
  `Status` varchar(50),
  PRIMARY KEY (`Order_ID`),
  FOREIGN KEY (`Customer_ID`) REFERENCES `Customer`(`Customer_ID`),
  FOREIGN KEY (`Item_ID`) REFERENCES `Item`(`Item_ID`),
  KEY `Key` (`Quantity`, `Total Cost`, `Shipping Address`, `Status`)
);

```

## Implemented Architecture

Here this implemented platform performs order placement, order cancellation, adding and deleting items covering CRUD operations. controller-service-repository pattern (a layered architecture) has been used.

<img src="https://github.com/tharakarehan/se-assessment-order-platform/blob/main/layered_architecture.jpeg">
</p>