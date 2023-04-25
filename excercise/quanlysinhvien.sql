CREATE DATABASE quanlysinhvien;
USE quanlysinhvien;

CREATE TABLE class (
	ClassID INT PRIMARY KEY AUTO_INCREMENT,
   ClassName VARCHAR(5) NOT NULL,
   StartDate DATE NOT NULL,
   ClassStatus BIT NOT NULL
);
    
CREATE TABLE student (
	StuID INT PRIMARY KEY AUTO_INCREMENT,
   StuName VARCHAR(20) NOT NULL,
   Address VARCHAR(20) NOT NULL,
   Phone VARCHAR(12),
   StuStatus BIT,
   ClassID INT NOT NULL,
   FOREIGN KEY (ClassID) REFERENCES class(ClassID)
);
    
CREATE TABLE sub (
	SubID INT PRIMARY KEY AUTO_INCREMENT,
   SubName VARCHAR(10),
   Credit INT,
   SubStatus BIT
);
    
CREATE TABLE mark (
	MarkID INT PRIMARY KEY AUTO_INCREMENT,
   SubID INT,
   StuID INT,
   Score INT,
   ExamTimes INT,
   FOREIGN KEY (SubID) REFERENCES sub(SubID),
   FOREIGN KEY (StuID) REFERENCES student(StuID)
);

INSERT INTO class (ClassName, StartDate, ClassStatus)
VALUES 
	('A1', '2008-12-20', 1),
	('A2', '2008-12-22', 1),
	('B3', current_date(), 0);
	
TRUNCATE TABLE class; -- KHÔNG THỰC HIỆN ĐƯỢC DO CÓ KHÓA NGOẠI TRỎ ĐẾN
	
INSERT INTO student (StuName, Address, Phone, StuStatus, ClassID)
VALUES
	('Hung', 'Ha Noi', '0912113113', 1, 1);
	
INSERT INTO student (StuName, Address, Phone, StuStatus, ClassID)
VALUES
	('Hoa', 'Hai Phong', NULL, 1, 1),
	('Manh', 'HCM', '0123123123', 0, 2);
	
DELETE FROM student;

TRUNCATE TABLE student; -- KHÔNG THỰC HIỆN ĐƯỢC DO CÓ KHÓA NGOẠI TRỎ ĐẾN

TRUNCATE TABLE mark; -- THỰC HIỆN BÌNH THƯỜNG

DROP TABLE student;

DROP TABLE mark;

DROP TABLE class;

INSERT INTO sub (SubName, Credit, SubStatus)
VALUES
	('CF', 5, 1),
	('C', 6, 1),
	('HDJ', 5, 1),
	('RDBMS', 10, 1);
	
INSERT INTO mark (SubID, StuID, Score, ExamTimes)
VALUES
	(1,1,8,1),
	(1,2,10,2),
	(2,1,12,1);


-- HIỆN THỊ TẤT CẢ SINH VIÊN CÓ TÊN BẮT ĐẦU BẰNG CHỮ "H"
SELECT * FROM student
WHERE StuName LIKE 'H%'

-- HIỂN THỊ THÔNG TIN LỚP HỌC CÓ THỜI GIAN BẮT ĐẦU VÀO THÁNG 12
SELECT * FROM class
WHERE MONTH(StartDate) = 12;

-- HIỂN THỊ TẤT CẢ THÔNG TIN MÔN HỌC CÓ CREDIT TRONG KHOẢNG TỪ 3 ĐẾN 5
SELECT * FROM sub
WHERE Credit >= 3 AND Credit <= 5;

-- THAY ĐỔI MÃ LỚP CỦA SINH VIÊN CÓ TÊN HÙNG LÀ 2
UPDATE student
SET ClassID = 2
WHERE StuName = 'Hung';

SELECT * FROM student
WHERE StuName = 'Hung';

-- HIỂN THỊ CÁC THÔNG TIN: STUDENTNAME, SUBNAME, MARK.
-- DỮ LIỆU ĐƯỢC SẮP XẾP THEO ĐIỂM THI GIẢM DẦN, NẾU TRÙNG SẮP XẾP THEO TÊN TĂNG DẦN
SELECT student.StuName, sub.SubName, mark.Score
FROM (mark INNER JOIN student ON mark.StuID = student.StuID) INNER JOIN sub ON mark.SubID = sub.SubID
ORDER BY mark.Score DESC, student.StuName;

-- Hiển thị tất cả các thông tin môn học (bảng subject) có credit lớn nhất
SELECT * FROM sub
WHERE Credit = (SELECT MAX(Credit) FROM sub);

-- Hiển thị các thông tin môn học có điểm thi lớn nhất
SELECT * FROM sub
WHERE sub.SubID IN (
SELECT SubID FROM mark
WHERE Score = (SELECT MAX(Score) FROM mark));

-- Hiển thị các thông tin sinh viên và điểm trung bình của mỗi sinh viên, xếp hạng theo thứ tự điểm giảm dần
SELECT stu.StuID, stu.StuName, stu.Address, stu.Phone, stu.StuStatus, stu.ClassID, AVG(Score) AS 'Diem trung binh'
FROM student stu INNER JOIN mark m ON stu.StuID = m.StuID
GROUP BY m.StuID
ORDER BY AVG(Score) DESC;