CREATE DATABASE curso_node;

USE curso_node;

CREATE TABLE livros (id INT(11) NOT NULL AUTO_INCREMENT, 
titulo VARCHAR(255) DEFAULT NULL,
preco DECIMAL (10, 2) DEFAULT NULL,
descricao TEXT, 
PRIMARY KEY (id));

INSERT INTO livros (titulo, descricao, preco) VALUES ('Comecando com nodejs', 'Livro introdutorio de node', 39.90);
INSERT INTO livros (titulo, descricao, preco) VALUES ('Comecando com express', 'Livro introdutorio de express', 39.90);

SELECT * FROM LIVROS;

DROP TABLE LIVROS;

UPDATE LIVROS SET PRECO = 39.9 WHERE id = 1