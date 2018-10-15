CREATE TABLE usuario (
    id SERIAL PRIMARY KEY,
    usuario VARCHAR(200) NOT NULL,
    password VARCHAR(200) NOT NULL
);

CREATE TABLE lona (
    id SERIAL PRIMARY KEY,
    descripcion VARCHAR(255) NOT NULL,
    tamanio VARCHAR(100) NOT NULL
);

CREATE TABLE estado (
    id SERIAL PRIMARY KEY,
    nombre_estado VARCHAR(255) NOT NULL,
    tipo_estado INT NOT NULL
);

CREATE TABLE lona_especificacion (
    id SERIAL PRIMARY KEY NOT NULL,
    lona_id INT NOT NULL,
    estado_id INT NOT NULL
);

CREATE  TABLE agencia (
    id SERIAL PRIMARY KEY NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    direccion VARCHAR(255) NOT NULL,
    lat DECIMAL(9,9) NULL,
    lon DECIMAL(9,9) NULL
);

CREATE TABLE reporte_lona (
    id SERIAL PRIMARY KEY NOT NULL,
    lona_id INT NOT NULL,
    observaciones TEXT NULL,
    file_path TEXT NULL,
    lat DECIMAL(9,9) NULL,
    lon DECIMAL(9,9) NULL
);

CREATE USER josros WITH PASSWORD '123';

GRANT ALL PRIVILEGES ON TABLE usuario TO gfcrimzwpnopxy;
GRANT ALL PRIVILEGES ON TABLE lona TO gfcrimzwpnopxy;
GRANT ALL PRIVILEGES ON TABLE estado TO gfcrimzwpnopxy;
GRANT ALL PRIVILEGES ON TABLE lona_especificacion TO gfcrimzwpnopxy;
GRANT ALL PRIVILEGES ON TABLE agencia TO gfcrimzwpnopxy;
GRANT ALL PRIVILEGES ON TABLE reporte_lona TO gfcrimzwpnopxy;

INSERT INTO usuario (usuario, password) VALUES ('root', '123');
INSERT INTO usuario (usuario, password) VALUES ('wualter', '123');
INSERT INTO usuario (usuario, password) VALUES ('verificador', '123');

INSERT INTO lona (descripcion, tamanio) VALUES ('Lona de 35mts', '123');
INSERT INTO lona (descripcion, tamanio) VALUES ('Lona de 38mts', '123');
INSERT INTO lona (descripcion, tamanio) VALUES ('Lona de 39mts', '123');
