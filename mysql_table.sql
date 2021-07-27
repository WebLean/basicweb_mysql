CREATE TABLE user (
	seq BIGINT PRIMARY KEY,
    username varchar(50),
    password varchar(255),
    name varchar(50),
    email varchar(100)
);

CREATE TABLE post (
	id BIGINT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    body VARCHAR(2000),
    createdat datetime,
    updatedat datetime
);

CREATE TABLE test (
	id INT PRIMARY KEY auto_increment,
    userid varchar(50),
    password varchar(500),
    name VARCHAR(50),
    salt varchar(100)
);

INSERT INTO test values(1, "s01va");
INSERT INTO test values(2, "testweb!");

select * from test;