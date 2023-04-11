CREATE DATABASE quanlybanhang;
USE quanlybanhang;
USE sys;

-- KHÔNG CHẠY ĐƯỢC, DÙNG CHO SQL SERVER
ALTER DATABASE quan_ly_ban_hang
MODIFY NAME = quanlybanhang;

-- KHÔNG HỖ TRỢ TRONG PHIÊN BẢN NÀY
RENAME DATABASE quan_ly_ban_hang TO quanlybanhang;

DROP DATABASE quan_ly_ban_hang;

CREATE TABLE customer (
	cID INT PRIMARY KEY AUTO_INCREMENT,
   cName VARCHAR(25),
   cAge TINYINT
);
    
CREATE TABLE orderr (
	oID INT PRIMARY KEY AUTO_INCREMENT,
   cID INT,
   oDate DATETIME,
   oTotalPrice INT,
   FOREIGN KEY (cID) REFERENCES customer(cID)
);
    
CREATE TABLE product (
	pID INT PRIMARY KEY AUTO_INCREMENT,
   pName VARCHAR(25),
   pPrice INT
);
    
CREATE TABLE order_detail (
	oID INT,
   pID INT,
   odQTY INT,
   FOREIGN KEY (oID) REFERENCES orderr(oID),
   FOREIGN KEY (pID) REFERENCES product(pID),
   CONSTRAINT PRIMARY KEY (oID, pID)
);

INSERT INTO customer (cName, cAge)
VALUES
	('Minh Quan', 10),
	('Ngoc Oanh', 20),
	('Hong Ha', 50);
	
INSERT INTO orderr (cID, oDate, oTotalPrice)
VALUES
	(1, '2006-3-21', NULL),
	(2, '2006-3-23', NULL),
	(1, '2006-3-16', NULL);
	
INSERT INTO product (pName, pPrice)
VALUES
	('May giat', 3),
	('Tu lanh', 5),
	('Dieu hoa', 7),
	('Quat', 1),
	('Bep dien', 2);
	
INSERT INTO order_detail (oID, pID, odQTY)
VALUES
	(1, 1, 3),
	(1, 3, 7),
	(1, 4, 2),
	(2, 1, 1),
	(3, 1, 8),
	(2, 5, 4),
	(2, 3, 3);
	
	
-- HIỂN THỊ THÔNG TIN GỒM oID, oDate, pPrice CỦA TẤT CẢ CÁC HÓA ĐƠN TRONG BẢNG orderr
SELECT o.oID, o.oDate, p.pPrice
FROM (order_detail od INNER JOIN orderr o ON od.oID = o.oID) INNER JOIN product p ON od.pID = p.pID


-- HIỂN THỊ DANH SÁCH CÁC KHÁCH HÀNG ĐÃ MUA HÀNG VÀ DANH SÁCH SẢN PHẨN ĐƯỢC MUA BỞI KHÁCH HÀNG ĐÓ
SELECT c.cName, p.pName
FROM (
		(order_detail od INNER JOIN orderr o ON od.oID = o.oID)
		INNER JOIN product p ON od.pID = p.pID)
		INNER JOIN customer c ON o.cID = c.cID
GROUP BY c.cName, p.pName

-- HIỂN THỊ DANH SÁCH KHÁCH HÀNG KHÔNG MUA BẤT KỲ SẢN PHẨM NÀO
SELECT c.cName
FROM customer c LEFT JOIN orderr o ON c.cID = o.cID
WHERE o.oID IS NULL;

-- HIỂN THỊ MÃ HÓA ĐƠN, NGÀY BÁN VÀ GIÁ TIỀN CỦA TỪNG HÓA ĐƠN (GIÁ MỘT HÓA ĐƠN ĐƯỢC TÍNH BẰNG TỔNG GIÁ BÁN CỦA
-- TỪNG LOẠI MẶT HÀNG XUẤT HIỆN TRONG HÓA ĐƠN. GIÁ BÁN CỦA TỪNG LOẠI ĐƯỢC TÍNH BẰNG odQTY * pPrice

SELECT o.oID, o.oDate, SUM(od.odQTY * p.pPrice) AS Payment
FROM (order_detail od INNER JOIN orderr o ON od.oID = o.oID)
		INNER JOIN product p ON od.pID = p.pID
GROUP BY o.oID, o.oDate