CREATE DATABASE lonaswualter;

use lonaswualter;

CREATE TABLE usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(200) NOT NULL,
    password VARCHAR(200) NOT NULL
);

CREATE TABLE lona (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descripcion VARCHAR(255) NOT NULL,
    tamanio VARCHAR(100) NOT NULL
);

CREATE TABLE estado (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_estado VARCHAR(255) NOT NULL,
    tipo_estado INT NOT NULL
);

CREATE TABLE lona_especificacion (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    lona_id INT NOT NULL,
    estado_id INT NOT NULL
);

CREATE  TABLE agencia (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    direccion VARCHAR(255) NOT NULL,
    lat DECIMAL(9,9) NULL,
    lon DECIMAL(9,9) NULL
);

CREATE TABLE reporte_lona (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    lona_id INT NOT NULL,
    observaciones TEXT NULL,
    file_path TEXT NULL,
    lat DECIMAL(9,9) NULL,
    lon DECIMAL(9,9) NULL
);
