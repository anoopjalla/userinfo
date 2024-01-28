CREATE DATABASE user_info;
USE user_info;

CREATE TABLE userinfo (
    id integer PRIMARY KEY AUTO_INCREMENT,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL, 
    birthday DATE NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO USERINFO (firstName, lastName, birthday)
VALUES
('Jack', 'Westin', '2003-02-01'), 
('Ramsai', 'Mathew', '2002-10-14');
