INSERT INTO mamifero (nome, idade, genero, raca)
  VALUES
  ('Simba', 2, 'Macho', 'Leão'),
  ('Timão', 1, 'Macho', 'Suricato'),
  ('Pumba', 10, 'Macho', 'Javali'),
  ('Nala', 3, 'Femea', 'Leoa');
  
INSERT INTO ave (nome, idade, genero, envergadura)
	VALUES 
	('Zazu', 3, 'Femea', 20),
	('Iago', 5, 'Macho', 30),
	('Scuttle', 2, 'Macho', 40),
	
INSERT INTO reptil (nome, idade, genero, tipo_de_escamas)
	VALUES 
	('Pascal', 4, 'Macho', 'Dérmicas'),
	('Crush', 50, 'Macho', 'Escudos'),
	('Kaa', 8, 'Femea', 'Escamas quilíferas');
	
-- ALTER TABLE reptil
-- ALTER COLUMN tipo_de_escamas TYPE VARCHAR (50);

-- SELECT * FROM AVE;
-- SELECT * FROM mamifero;
-- SELECT * FROM REPTIL;