DROP DATABASE IF EXISTS user_db;
CREATE DATABASE user_db;

DROP DATABASE IF EXISTS categories_db;
CREATE DATABASE categories_db;

CREATE DATABASE IF NOT EXISTS finance_data;
USE finance_data;

CREATE TABLE IF NOT EXISTS transaction (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(255),
    amount DECIMAL(10, 2),
    type VARCHAR(50)
);

DELIMITER //

CREATE PROCEDURE AddTransaction(
    IN p_category VARCHAR(255),
    IN p_amount DECIMAL(10, 2),
    IN p_type VARCHAR(50),
)
BEGIN
INSERT INTO transaction (category, amount, type) VALUES (p_category, p_amount, p_type);
END //

DELIMITER ;

DELIMITER //

CREATE TRIGGER AddNewCategory
AFTER INSERT ON transaction
FOR EACH ROW
BEGIN
    DECLARE category_count INT;

    SELECT COUNT(*) INTO category_count FROM (SELECT DISTINCT category FROM transactions) AS categories;

    IF category_count = 0 THEN
        INSERT INTO transaction (category, amount, type) VALUES ('Default', 0, 'Expense');
    END IF;
    END //

    DELIMITER ;