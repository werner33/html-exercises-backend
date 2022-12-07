\c htmlexercises

INSERT INTO products (title, price, aws_image_location) VALUES
    ('Product 1', 35, 'https://winterecommerce2022.s3.amazonaws.com/Screen Shot 2022-11-02 at 10.39.48 AM.png'),
    ('Product 2', 5, ''),
    ('Product 3', 100, 'https://winterecommerce2022.s3.amazonaws.com/Screen Shot 2022-11-02 at 10.39.48 AM.png'),
    ('Product 4', 205, ''),
    ('Product 5', 19, ''),
    ('Product 6', 2, '');


INSERT INTO users (username, email, password) VALUES
    ('Lupita', 'lupita@gmail.com', '123456'),
    ('Sven', 'sven@gmail.com', '123456'),
    ('John', 'john@gmail.com', '123456'),
    ('Maria', 'maria@gmail.com', '123456');

INSERT INTO email_subscriptions (firstname, email) VALUES
    ('Lupita', 'lupita@gmail.com'),
    ('Sven', 'sven@gmail.com'),
    ('Sam', 'sam@hotmail.com');
