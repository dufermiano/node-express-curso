CREATE DATABASE curso_node;

USE curso_node;

CREATE TABLE livros (id INT(11) NOT NULL AUTO_INCREMENT, 
title VARCHAR(255) DEFAULT NULL,
descricao TEXT, 
preco DECIMAL (10, 2) DEFAULT NULL,
PRIMARY KEY (id));

INSERT INTO livros (title, descricao, preco) VALUES ('Comecando com nodejs', 'Livro introdutorio de node', 39.90);
INSERT INTO livros (title, descricao, preco) VALUES ('Comecando com express', 'Livro introdutorio de express', 39.90);

SELECT * FROM LIVROS;