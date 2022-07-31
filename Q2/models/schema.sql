
DROP DATABASE country_city_q2;

CREATE DATABASE country_city_q2;

USE country_city_q2;

CREATE TABLE city(
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(17),
    countrycode VARCHAR(3),
    district VARCHAR(20),
    population INT,
    PRIMARY KEY(id)
);

CREATE TABLE country(
    id INT AUTO_INCREMENT NOT NULL,
    code INT,
    name VARCHAR(44),
    continent VARCHAR(13),
    regoin VARCHAR(25),
    suprfacearea INT,
    indepyyear VARCHAR(5),
    population INT,
    lifeexpectancy VARCHAR(4),
    gnp INT,
    gnppold VARCHAR(9),
    localname VARCHAR(44),
    governmentform VARCHAR(44),
    headofstate VARCHAR(23),
    capital VARCHAR(4),
    codes VARCHAR(2),
    PRIMARY KEY (id)
);



-- first question
SELECT * FROM city INNER JOIN country ON city.countrycode = country.code WHERE continent = "Africa";


