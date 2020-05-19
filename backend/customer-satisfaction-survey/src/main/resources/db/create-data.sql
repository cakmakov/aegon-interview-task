-- -----------------------------------------------------
-- Add sample data
-- -----------------------------------------------------

INSERT INTO topic(description, npm_score) VALUES ('Groove', null);
INSERT INTO topic(description, npm_score) VALUES ('Java', null);
INSERT INTO topic(description, npm_score) VALUES ('React', null);

INSERT INTO question(topic_id, description) VALUES (1, 'Do you like Groove Application?');
INSERT INTO question(topic_id, description) VALUES (2, 'Is Java the best programming language?');
INSERT INTO question(topic_id, description) VALUES (2, 'Is Spring Framework better than others?');
INSERT INTO question(topic_id, description) VALUES (3, 'Do you easily understand React architecture?');
INSERT INTO question(topic_id, description) VALUES (3, 'Is Redux beneficial to manage the state?');
