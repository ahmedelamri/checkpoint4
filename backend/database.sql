-- CREATE TABLE item (
--   id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
--   title varchar(255) NOT NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- INSERT INTO item (title) VALUES ('Stuff'), ('Doodads');

CREATE TABLE users (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) NOT NULL
);
INSERT INTO users (email) VALUES ('fred@hotmail.fr');


CREATE TABLE parfum (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  nom VARCHAR(255) NOT NULL,
  prix DECIMAL(10, 2) NOT NULL,
  marque VARCHAR(255) NOT NULL,
  image VARCHAR(355) NOT NULL,
  stock INT NOT NULL
);
INSERT INTO parfum (nom, prix, marque, image, stock) VALUES 
('Arabian Knight', 274.99, 'Arabian Oud', './src/photos/parfum3_2.jpg', 12),
('Al Qurashi Blend', 321.49, 'Abdul Samad Al Qurashi', './src/photos/parfum2_1.jpg', 48),
('Al Fareed', 178, 'Al burak', './src/photos/parfum1_2.jpg', 109);



CREATE TABLE panier (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT
);



CREATE TABLE panier_parfum (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  parfum_id INT UNSIGNED not null,
  panier_id INT UNSIGNED not null,
  quantity INT UNSIGNED not null,
  FOREIGN KEY (parfum_id) REFERENCES parfum(id),
  FOREIGN KEY (panier_id) REFERENCES panier(id)
);
