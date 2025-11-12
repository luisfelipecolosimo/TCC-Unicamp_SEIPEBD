CREATE SCHEMA `seipebd` ;

CREATE TABLE `seipebd`.`usuario` (
  `id_usuario` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `sobrenome` VARCHAR(45) NOT NULL,
  `usuario` VARCHAR(45) NOT NULL,
  `senha` VARCHAR(100) NOT NULL,
  `data_nascimento` DATETIME NOT NULL,
  `tipo` int not null DEFAULT 1,
  `status` int not null DEFAULT 1,
  `data_inativacao` date,
  PRIMARY KEY (`id_usuario`));
  
  CREATE TABLE `seipebd`.`tema_pergunta` (
  `id_tema` INT NOT NULL AUTO_INCREMENT,
  `nome_tema` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id_tema`)
);


CREATE TABLE `seipebd`.`pergunta` (
  `id_pergunta` INT NOT NULL AUTO_INCREMENT,
  `fk_tema` INT NOT NULL,
  `nivel_dificuldade` ENUM('Fácil', 'Médio', 'Difícil') DEFAULT 'Fácil',
  `tipo_pergunta` ENUM('MULTIPLA_ESCOLHA', 'BLOCOS') DEFAULT 'MULTIPLA_ESCOLHA',
  `enunciado` TEXT NOT NULL,
  `resposta_correta` TEXT NOT NULL,
  `data_criacao` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_pergunta`),
    CONSTRAINT `fk_pergunta_tema` FOREIGN KEY (`fk_tema`) 
      REFERENCES `seipebd`.`tema_pergunta`(`id_tema`)
      ON DELETE RESTRICT
      ON UPDATE CASCADE
);


CREATE TABLE `seipebd`.`alternativa` (
  `id_alternativa` INT NOT NULL AUTO_INCREMENT,
  `id_pergunta` INT NOT NULL,
  `texto_alternativa` VARCHAR(255) NOT NULL,
  `letra` CHAR(1) NOT NULL,
  PRIMARY KEY (`id_alternativa`),
  CONSTRAINT `fk_alternativa_pergunta`
    FOREIGN KEY (`id_pergunta`) REFERENCES `pergunta` (`id_pergunta`)
    ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE `seipebd`.`bloco_resposta` (
  `id_bloco` INT NOT NULL AUTO_INCREMENT,
  `id_pergunta` INT NOT NULL DEFAULT 0,
  `texto_bloco` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id_bloco`)
);


CREATE TABLE `seipebd`.`comentario` (
  `id_comentario` INT NOT NULL AUTO_INCREMENT,
  `id_pergunta` INT NOT NULL,
  `texto_comentario` TEXT NOT NULL,
  PRIMARY KEY (`id_comentario`),
  CONSTRAINT `fk_comentario_pergunta`
    FOREIGN KEY (`id_pergunta`) REFERENCES `pergunta` (`id_pergunta`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);


CREATE TABLE `seipebd`.`score` (
  `id_score` INT NOT NULL AUTO_INCREMENT,
  `id_usuario` INT NOT NULL,
  `pontuacao` INT NOT NULL DEFAULT 0,
  `nivel_atingido` ENUM('Fácil', 'Médio', 'Difícil') DEFAULT 'Fácil',
  `data_score` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_score`),
  CONSTRAINT `fk_score_usuario`
    FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);


CREATE TABLE `seipebd`.`historico_respostas` (
  `id_historico` INT NOT NULL AUTO_INCREMENT,
  `id_usuario` INT NOT NULL,
  `id_pergunta` INT NOT NULL,
  `resposta_enviada` TEXT NOT NULL,
  `acertou` BOOLEAN NOT NULL,
  `data_resposta` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_historico`),
  CONSTRAINT `fk_historico_usuario`
    FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_historico_pergunta`
    FOREIGN KEY (`id_pergunta`) REFERENCES `pergunta` (`id_pergunta`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);
