INSERT INTO `seipebd`.`usuario` 
(`nome`, `sobrenome`, `usuario`, `senha`, `data_nascimento`, `tipo`, `status`) VALUES
('Lucas', 'Silva', 'lucas.s', MD5('senha1'), '1990-01-15', 1, 1),
('Mariana', 'Oliveira', 'mariana.o', MD5('senha2'), '1992-06-22', 1, 1),
('Carlos', 'Santos', 'carlos.s', MD5('senha3'), '1988-03-10', 1, 1),
('Ana', 'Costa', 'ana.c', MD5('senha4'), '1995-09-05', 1, 1),
('Bruno', 'Almeida', 'bruno.a', MD5('senha5'), '1991-12-30', 1, 1);

INSERT INTO `seipebd`.`tema_pergunta` (`nome_tema`) VALUES
('Conceitos de Banco de Dados'),
('SQL e Consultas'),
('Modelagem de Dados');

-- MULTIPLA_ESCOLHA
INSERT INTO `seipebd`.`pergunta` 
(`fk_tema`, `nivel_dificuldade`, `tipo_pergunta`, `enunciado`, `resposta_correta`) VALUES
(1, 'Fácil', 'MULTIPLA_ESCOLHA', 'O que é um banco de dados?', 'Um sistema para armazenar e gerenciar dados');
INSERT INTO `seipebd`.`pergunta` 
(`fk_tema`, `nivel_dificuldade`, `tipo_pergunta`, `enunciado`, `resposta_correta`) VALUES
(2, 'Fácil', 'MULTIPLA_ESCOLHA', 'Qual comando SQL é usado para selecionar dados de uma tabela?', 'SELECT');
INSERT INTO `seipebd`.`pergunta` 
(`fk_tema`, `nivel_dificuldade`, `tipo_pergunta`, `enunciado`, `resposta_correta`) VALUES
(3, 'Médio', 'MULTIPLA_ESCOLHA', 'Qual é o tipo de relacionamento em que uma entidade se relaciona com muitas entidades de outra tabela?', 'Um-para-muitos');


-- BLOCOS
-- Pergunta 2 (SQL básico: SELECT simples)
INSERT INTO `seipebd`.`pergunta` 
(`fk_tema`, `nivel_dificuldade`, `tipo_pergunta`, `enunciado`, `resposta_correta`) VALUES
(2, 'Médio', 'BLOCOS', 'Monte a consulta SQL para selecionar todos os clientes da tabela clientes.', 'SELECT * FROM clientes;');

-- Pergunta 4 (SQL avançado: INSERT)
INSERT INTO `seipebd`.`pergunta` 
(`fk_tema`, `nivel_dificuldade`, `tipo_pergunta`, `enunciado`, `resposta_correta`) VALUES
(1, 'Difícil', 'BLOCOS', 'Monte a consulta SQL para inserir um novo usuário na tabela usuarios.', 'INSERT INTO usuarios (nome, sobrenome) VALUES (\'Joao\', \'Silva\');');

-- Pergunta 6 (SQL: DELETE)
INSERT INTO `seipebd`.`pergunta` 
(`fk_tema`, `nivel_dificuldade`, `tipo_pergunta`, `enunciado`, `resposta_correta`) VALUES
(3, 'Difícil', 'BLOCOS', 'Monte a consulta SQL para deletar produtos da tabela produtos com preço menor que 10.', 'DELETE FROM produtos WHERE preco < 10;');



-- Pergunta 1: O que é um banco de dados?
INSERT INTO `seipebd`.`alternativa` (`id_pergunta`, `texto_alternativa`, `letra`) VALUES
(1, 'Um sistema para armazenar e gerenciar dados', 'A'),
(1, 'Um programa para editar textos', 'B'),
(1, 'Um tipo de hardware', 'C');

-- Pergunta 3: Qual comando SQL é usado para selecionar dados?
INSERT INTO `seipebd`.`alternativa` (`id_pergunta`, `texto_alternativa`, `letra`) VALUES
(3, 'SELECT', 'A'),
(3, 'INSERT', 'B'),
(3, 'UPDATE', 'C');

-- Pergunta 5: Qual é o tipo de relacionamento um-para-muitos?
INSERT INTO `seipebd`.`alternativa` (`id_pergunta`, `texto_alternativa`, `letra`) VALUES
(5, 'Um-para-um', 'A'),
(5, 'Um-para-muitos', 'B'),
(5, 'Muitos-para-muitos', 'C');

-- Pergunta 2: SELECT * FROM clientes;
INSERT INTO `seipebd`.`bloco_resposta` (`id_pergunta`, `texto_bloco`) VALUES
(2, 'SELECT'),
(2, '*'),
(2, 'FROM'),
(2, 'clientes'),
(2, ';');

-- Pergunta 4: INSERT INTO usuarios (nome, sobrenome) VALUES ('Joao', 'Silva');
INSERT INTO `seipebd`.`bloco_resposta` (`id_pergunta`, `texto_bloco`) VALUES
(4, 'INSERT INTO'),
(4, 'usuarios'),
(4, '('),
(4, 'nome, sobrenome'),
(4, ')'),
(4, 'VALUES'),
(4, '('),
(4, '\'Joao\', \'Silva\''),
(4, ')'),
(4, ';');

-- Pergunta 6: DELETE FROM produtos WHERE preco < 10;
INSERT INTO `seipebd`.`bloco_resposta` (`id_pergunta`, `texto_bloco`) VALUES
(6, 'DELETE'),
(6, 'FROM'),
(6, 'produtos'),
(6, 'WHERE'),
(6, 'preco < 10'),
(6, ';');


INSERT INTO `seipebd`.`bloco_resposta` (`id_pergunta`, `texto_bloco`) VALUES
(0, 'SELECT'),
(0, '*'),
(0, 'FROM'),
(0, 'WHERE'),
(0, 'JOIN'),
(0, 'INNER JOIN'),
(0, 'LEFT JOIN'),
(0, 'RIGHT JOIN'),
(0, 'ON'),
(0, 'DELETE'),
(0, 'UPDATE'),
(0, 'INSERT INTO'),
(0, 'CREATE TABLE'),
(0, 'ALTER TABLE'),
(0, 'DROP TABLE'),
(0, '('),
(0, ')'),
(0, 'VALUES'),
(0, ';'),
(0, '\'Joao\''),
(0, '\'Silva\''),
(0, 'clientes'),
(0, 'usuarios'),
(0, 'produtos'),
(0, 'preco < 10'),
(0, 'nome, sobrenome');



INSERT INTO `seipebd`.`score` (`id_usuario`, `pontuacao`, `nivel_atingido`) VALUES
(1, 80, 'Médio'),
(2, 70, 'Fácil'),
(3, 90, 'Difícil'),
(4, 60, 'Fácil'),
(5, 75, 'Médio');


INSERT INTO `seipebd`.`comentario` (`id_pergunta`, `texto_comentario`) VALUES
-- MULTIPLA_ESCOLHA
(1, 'Um banco de dados armazena e organiza dados de forma estruturada, permitindo consultas e gerenciamento.'),
(3, 'O comando SELECT é usado para buscar dados de uma tabela.'),
(5, 'Um relacionamento um-para-muitos significa que uma entidade se relaciona com várias da outra.'),
-- BLOCOS (SQL)
(2, 'Para selecionar todos os clientes, use SELECT * FROM clientes;'),
(4, 'Para inserir um usuário, combine INSERT INTO tabela (colunas) VALUES (valores);'),
(6, 'Para deletar produtos com preço menor que 10, use DELETE FROM produtos WHERE preco < 10;');


-- Usuário 1
INSERT INTO `seipebd`.`historico_respostas` (`id_usuario`, `id_pergunta`, `resposta_enviada`, `acertou`) VALUES
(1, 1, 'Um sistema para armazenar e gerenciar dados', 1),
(1, 2, 'SELECT * FROM clientes;', 1),
(1, 3, 'INSERT', 0);

-- Usuário 2
INSERT INTO `seipebd`.`historico_respostas` (`id_usuario`, `id_pergunta`, `resposta_enviada`, `acertou`) VALUES
(2, 1, 'Um programa para editar textos', 0),
(2, 4, 'INSERT INTO usuarios (nome, sobrenome) VALUES (\'Joao\', \'Silva\');', 1),
(2, 5, 'Um-para-muitos', 1);

-- Usuário 3
INSERT INTO `seipebd`.`historico_respostas` (`id_usuario`, `id_pergunta`, `resposta_enviada`, `acertou`) VALUES
(3, 2, 'SELECT * FROM clientes;', 1),
(3, 3, 'SELECT', 1),
(3, 6, 'DELETE FROM produtos WHERE preco < 10;', 1);

-- Usuário 4
INSERT INTO `seipebd`.`historico_respostas` (`id_usuario`, `id_pergunta`, `resposta_enviada`, `acertou`) VALUES
(4, 1, 'Um tipo de hardware', 0),
(4, 4, 'INSERT INTO usuarios (nome, sobrenome) VALUES (\'Maria\', \'Silva\');', 0),
(4, 5, 'Um-para-um', 0);

-- Usuário 5
INSERT INTO `seipebd`.`historico_respostas` (`id_usuario`, `id_pergunta`, `resposta_enviada`, `acertou`) VALUES
(5, 3, 'SELECT', 1),
(5, 6, 'DELETE FROM produtos WHERE preco < 10;', 1),
(5, 2, 'SELECT clientes;', 0);
