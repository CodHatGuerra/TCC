-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema VF_Dev
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema VF_Dev
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `VF_Dev` DEFAULT CHARACTER SET utf8 ;
USE `VF_Dev` ;

-- -----------------------------------------------------
-- Table `VF_Dev`.`TB_Endereco`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `VF_Dev`.`TB_Endereco` (
  `ID_Endereco` INT NOT NULL,
  `Cep` VARCHAR(8) NOT NULL,
  `Uf` VARCHAR(2) NOT NULL,
  `Localidade` VARCHAR(80) NOT NULL,
  `Bairro` VARCHAR(120) NOT NULL,
  `Logradouro` VARCHAR(120) NOT NULL,
  `Numero` VARCHAR(8) NOT NULL,
  PRIMARY KEY (`ID_Endereco`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `VF_Dev`.`TB_Carteira_vacina`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `VF_Dev`.`TB_Carteira_vacina` (
  `ID_Carteira` INT NOT NULL AUTO_INCREMENT,
  `Data_Registrada` DATE NOT NULL,
  PRIMARY KEY (`ID_Carteira`),
  UNIQUE INDEX `ID_Carteira_UNIQUE` (`ID_Carteira` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `VF_Dev`.`TB_Funcionario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `VF_Dev`.`TB_Funcionario` (
  `ID_Funcionario` INT NOT NULL AUTO_INCREMENT,
  `Data_Inicio` DATE NOT NULL,
  `Data_Fim` DATE NULL,
  PRIMARY KEY (`ID_Funcionario`),
  UNIQUE INDEX `idTB_Funcionario_UNIQUE` (`ID_Funcionario` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `VF_Dev`.`TB_Usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `VF_Dev`.`TB_Usuario` (
  `ID_Usuario` INT NOT NULL,
  `Nome` VARCHAR(180) NOT NULL COMMENT 'Este é o campo de nome com o Datatype Varchar de 45',
  `Cpf` VARCHAR(11) NOT NULL,
  `Rg` VARCHAR(20) NOT NULL,
  `Sexo` VARCHAR(35) NOT NULL,
  `Data_Nascimento` DATE NOT NULL,
  `Nacionalidade` VARCHAR(45) NOT NULL,
  `Estado_Civil` VARCHAR(45) NOT NULL,
  `Email` VARCHAR(120) NOT NULL,
  `TB_Endereco_ID_Endereco` INT NOT NULL,
  `TB_Carteira_vacina_ID_Carteira` INT NOT NULL,
  `Data_Vinculada` DATE NOT NULL,
  `TB_Funcionario_ID_Funcionario` INT NOT NULL,
  PRIMARY KEY (`ID_Usuario`),
  INDEX `fk_TB_Usuario_TB_Endereco_idx` (`TB_Endereco_ID_Endereco` ASC) VISIBLE,
  UNIQUE INDEX `Cpf_UNIQUE` (`Cpf` ASC) VISIBLE,
  UNIQUE INDEX `Rg_UNIQUE` (`Rg` ASC) VISIBLE,
  INDEX `fk_TB_Usuario_TB_Carteira_vacina1_idx` (`TB_Carteira_vacina_ID_Carteira` ASC) VISIBLE,
  INDEX `fk_TB_Usuario_TB_Funcionario1_idx` (`TB_Funcionario_ID_Funcionario` ASC) VISIBLE,
  CONSTRAINT `fk_TB_Usuario_TB_Endereco`
    FOREIGN KEY (`TB_Endereco_ID_Endereco`)
    REFERENCES `VF_Dev`.`TB_Endereco` (`ID_Endereco`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_TB_Usuario_TB_Carteira_vacina1`
    FOREIGN KEY (`TB_Carteira_vacina_ID_Carteira`)
    REFERENCES `VF_Dev`.`TB_Carteira_vacina` (`ID_Carteira`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_TB_Usuario_TB_Funcionario1`
    FOREIGN KEY (`TB_Funcionario_ID_Funcionario`)
    REFERENCES `VF_Dev`.`TB_Funcionario` (`ID_Funcionario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `VF_Dev`.`TB_Posto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `VF_Dev`.`TB_Posto` (
  `ID_Posto` INT NOT NULL AUTO_INCREMENT,
  `TB_Endereco_ID_Endereco` INT NOT NULL,
  `Nome` VARCHAR(75) NOT NULL,
  PRIMARY KEY (`ID_Posto`),
  UNIQUE INDEX `idTB_Instituição_UNIQUE` (`ID_Posto` ASC) VISIBLE,
  INDEX `fk_TB_POSTO_TB_Endereco1_idx` (`TB_Endereco_ID_Endereco` ASC) VISIBLE,
  CONSTRAINT `fk_TB_POSTO_TB_Endereco1`
    FOREIGN KEY (`TB_Endereco_ID_Endereco`)
    REFERENCES `VF_Dev`.`TB_Endereco` (`ID_Endereco`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `VF_Dev`.`TB_Celular`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `VF_Dev`.`TB_Celular` (
  `ID_Celular` INT NOT NULL,
  `Numero` VARCHAR(45) NOT NULL,
  `TB_Posto_ID_Instituicao` INT NOT NULL,
  PRIMARY KEY (`ID_Celular`),
  UNIQUE INDEX `ID_Celular_UNIQUE` (`ID_Celular` ASC) VISIBLE,
  INDEX `fk_TB_Celular_TB_Posto1_idx` (`TB_Posto_ID_Instituicao` ASC) VISIBLE,
  CONSTRAINT `fk_TB_Celular_TB_Posto1`
    FOREIGN KEY (`TB_Posto_ID_Instituicao`)
    REFERENCES `VF_Dev`.`TB_Posto` (`ID_Posto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `VF_Dev`.`TB_Vacina`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `VF_Dev`.`TB_Vacina` (
  `ID_Vacina` INT NOT NULL,
  `Nome` VARCHAR(150) NOT NULL,
  `Fábrica` VARCHAR(150) NOT NULL,
  `Data_Fabricacao` DATE NOT NULL,
  `Lote` VARCHAR(20) NOT NULL,
  `Data_Aplicacao` DATE NOT NULL,
  `Dose` VARCHAR(45) NOT NULL,
  `Data_Vinculada` DATE NOT NULL,
  `TB_Carteira_vacina_ID_Carteira` INT NOT NULL,
  PRIMARY KEY (`ID_Vacina`),
  UNIQUE INDEX `ID_Vacina_UNIQUE` (`ID_Vacina` ASC) VISIBLE,
  INDEX `fk_TB_Vacina_TB_Carteira_vacina1_idx` (`TB_Carteira_vacina_ID_Carteira` ASC) VISIBLE,
  CONSTRAINT `fk_TB_Vacina_TB_Carteira_vacina1`
    FOREIGN KEY (`TB_Carteira_vacina_ID_Carteira`)
    REFERENCES `VF_Dev`.`TB_Carteira_vacina` (`ID_Carteira`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `VF_Dev`.`TB_Usuario_TB_Celular`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `VF_Dev`.`TB_Usuario_TB_Celular` (
  `TB_Usuario_ID_Usuario` INT NOT NULL,
  `TB_Celular_ID_Celular` INT NOT NULL,
  PRIMARY KEY (`TB_Usuario_ID_Usuario`, `TB_Celular_ID_Celular`),
  INDEX `fk_TB_Usuario_has_TB_Celular_TB_Celular1_idx` (`TB_Celular_ID_Celular` ASC) VISIBLE,
  INDEX `fk_TB_Usuario_has_TB_Celular_TB_Usuario1_idx` (`TB_Usuario_ID_Usuario` ASC) VISIBLE,
  CONSTRAINT `fk_TB_Usuario_has_TB_Celular_TB_Usuario1`
    FOREIGN KEY (`TB_Usuario_ID_Usuario`)
    REFERENCES `VF_Dev`.`TB_Usuario` (`ID_Usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_TB_Usuario_has_TB_Celular_TB_Celular1`
    FOREIGN KEY (`TB_Celular_ID_Celular`)
    REFERENCES `VF_Dev`.`TB_Celular` (`ID_Celular`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `VF_Dev`.`TB_Funcionario_Posto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `VF_Dev`.`TB_Funcionario_Posto` (
  `TB_Funcionario_ID_Funcionario` INT NOT NULL,
  `TB_Posto_ID_Instituicao` INT NOT NULL,
  `Permissao_Usuario` INT(1) NOT NULL,
  PRIMARY KEY (`TB_Funcionario_ID_Funcionario`, `TB_Posto_ID_Instituicao`),
  INDEX `fk_TB_Funcionario_has_TB_POSTO_TB_POSTO1_idx` (`TB_Posto_ID_Instituicao` ASC) VISIBLE,
  INDEX `fk_TB_Funcionario_has_TB_POSTO_TB_Funcionario1_idx` (`TB_Funcionario_ID_Funcionario` ASC) VISIBLE,
  CONSTRAINT `fk_TB_Funcionario_has_TB_POSTO_TB_Funcionario1`
    FOREIGN KEY (`TB_Funcionario_ID_Funcionario`)
    REFERENCES `VF_Dev`.`TB_Funcionario` (`ID_Funcionario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_TB_Funcionario_has_TB_POSTO_TB_POSTO1`
    FOREIGN KEY (`TB_Posto_ID_Instituicao`)
    REFERENCES `VF_Dev`.`TB_Posto` (`ID_Posto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
