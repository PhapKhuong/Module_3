CREATE DATABASE sales_management;
USE sales_management;

CREATE TABLE san_pham
	(
		MaSP INT PRIMARY KEY AUTO_INCREMENT,
        TenSP VARCHAR(50),
        MaLoaiSP INT,
        FOREIGN KEY (MaLoaiSP) REFERENCES loai_san_pham(MaLoaiSP),
        SoLuongKho INT,
        GiaBan INT,
        ChiTiet TEXT
    );
    
CREATE TABLE loai_san_pham
	(
		MaLoaiSP INT PRIMARY KEY AUTO_INCREMENT,
        TenLoaiSP VARCHAR(50)
    );
    
CREATE TABLE khach_hang
	(
		MaKH INT PRIMARY KEY AUTO_INCREMENT,
        TenKH VARCHAR (50)
    );
    
CREATE TABLE so_dien_thoai
	(
		SDT VARCHAR(12),
        MaKH INT,
        FOREIGN KEY (MaKH) REFERENCES khach_hang (MaKH)
    );
    
CREATE TABLE dia_chi
	(
		MaDC INT PRIMARY KEY AUTO_INCREMENT,
        MaKH INT,
        FOREIGN KEY (MaKH) REFERENCES khach_hang (MaKH)
    );
    
CREATE TABLE tinh
	(
		MaTinh INT PRIMARY KEY AUTO_INCREMENT,
        TenTinh VARCHAR(50),
        MaDC INT,
        FOREIGN KEY (MaDC) REFERENCES dia_chi (MaDC)
    );
    
CREATE TABLE quan
	(
		MaQuan INT PRIMARY KEY AUTO_INCREMENT,
        TenQuan VARCHAR(50),
        MaDC INT,
        FOREIGN KEY (MaDC) REFERENCES dia_chi (MaDC)
    );
    
CREATE TABLE phuong
	(
		MaPhuong INT PRIMARY KEY AUTO_INCREMENT,
        TenPhuong VARCHAR(50),
        MaDC INT,
        FOREIGN KEY (MaDC) REFERENCES dia_chi (MaDC)
    );
    
CREATE TABLE dat_hang
	(
		MaDH INT PRIMARY KEY AUTO_INCREMENT,
		MaKH INT,
        MaSP INT,
        FOREIGN KEY (MaKH) REFERENCES khach_hang (MaKH),
        FOREIGN KEY (MaSP) REFERENCES san_pham (MaSP),
        SoLuongDH INT
    );
    
CREATE TABLE danh_gia
	(
		MaDG INT PRIMARY KEY AUTO_INCREMENT,
		MaKH INT,
        MaSP INT,
        FOREIGN KEY (MaKH) REFERENCES khach_hang (MaKH),
        FOREIGN KEY (MaSP) REFERENCES san_pham (MaSP),
        NoiDung TEXT,
        Sao VARCHAR(10)
    );
    
CREATE TABLE trang_thai
	(
		TrangThai BIT,
        MaDH INT,
        FOREIGN KEY (MaDH) REFERENCES dat_hang (MaDH),
        CONSTRAINT PRIMARY KEY (TrangThai, MaDH)
    );