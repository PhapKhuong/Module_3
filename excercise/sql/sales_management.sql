CREATE
DATABASE sales_management;
USE
sales_management;

CREATE TABLE san_pham
(
    MaSP       INT PRIMARY KEY AUTO_INCREMENT,
    TenSP      VARCHAR(50),
    MaLoaiSP   INT,
    FOREIGN KEY (MaLoaiSP) REFERENCES loai_san_pham (MaLoaiSP),
    SoLuongKho INT,
    GiaBan     INT,
    ChiTiet    TEXT
);

CREATE TABLE loai_san_pham
(
    MaLoaiSP  INT PRIMARY KEY AUTO_INCREMENT,
    TenLoaiSP VARCHAR(50)
);

CREATE TABLE khach_hang
(
    MaKH  INT PRIMARY KEY AUTO_INCREMENT,
    TenKH VARCHAR(50)
);

CREATE TABLE so_dien_thoai
(
    SDT  VARCHAR(12),
    MaKH INT,
    FOREIGN KEY (MaKH) REFERENCES khach_hang (MaKH)
);

ALTER TABLE khach_hang
    ADD dia_chi TEXT;

ALTER TABLE khach_hang
    CHANGE dia_chi DiaChi TEXT;

CREATE TABLE dat_hang
(
    MaDH      INT PRIMARY KEY AUTO_INCREMENT,
    MaKH      INT,
    MaSP      INT,
    FOREIGN KEY (MaKH) REFERENCES khach_hang (MaKH),
    FOREIGN KEY (MaSP) REFERENCES san_pham (MaSP),
    SoLuongDH INT
);

ALTER TABLE dat_hang
    ADD TrangThai ENUM('Đã giao hàng','Đang giao hàng');

CREATE TABLE danh_gia
(
    MaDG    INT PRIMARY KEY AUTO_INCREMENT,
    MaKH    INT,
    MaSP    INT,
    FOREIGN KEY (MaKH) REFERENCES khach_hang (MaKH),
    FOREIGN KEY (MaSP) REFERENCES san_pham (MaSP),
    NoiDung TEXT,
    Sao     VARCHAR(10)
);