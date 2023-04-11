CREATE DATABASE quan_ly_ban_hang;
USE quan_ly_ban_hang;

CREATE TABLE customer (
	cID INT PRIMARY KEY AUTO_INCREMENT,
   cName VARCHAR(50),
   cAge INT
);
    
CREATE TABLE _order (
	oID INT PRIMARY KEY AUTO_INCREMENT,
   cID INT,
   oDate DATE,
   oTotalPrice INT,
   FOREIGN KEY (cID) REFERENCES customer(cID)
);
    
CREATE TABLE product (
	pID INT PRIMARY KEY AUTO_INCREMENT,
   pName VARCHAR(50),
   pPrice INT
);
    
CREATE TABLE order_detail (
	oID INT,
   pID INT,
   odQTY INT,
   FOREIGN KEY (oID) REFERENCES _order(oID),
   FOREIGN KEY (pID) REFERENCES product(pID),
   CONSTRAINT PRIMARY KEY (oID, pID)
);