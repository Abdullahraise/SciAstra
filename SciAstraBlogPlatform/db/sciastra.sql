-- SciAstra database creation
CREATE DATABASE SciAstra;
USE SciAstra;

-- Admins table for user authentication
CREATE TABLE admins (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Courses table for storing course information
CREATE TABLE courses (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL,
    price DECIMAL(10, 2),
    discount_price DECIMAL(10, 2)
);

-- Blog posts table for blog management with scheduling
CREATE TABLE blog_posts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    status ENUM('draft', 'published') DEFAULT 'draft',
    publish_date DATETIME
);
