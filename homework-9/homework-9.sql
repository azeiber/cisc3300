-- Write statements to create:
-- a. a new database in phpmyadmin called homework_9
CREATE DATABASE `homework-9`;
-- b. a library table, in the create statement include the following columns:
-- i. id, which should be an integer, have space for 11 characters, not be
-- nullable, and auto increment, set the id column as the primary key
-- ii. name, which should be an varchar, have space for 80 characters, not be
-- nullable, and auto increment
CREATE TABLE `library`
(
    `id`        int(11) NOT NULL AUTO_INCREMENT,
    `name`      varchar(80) NOT NULL,
    primary key (`id`)
);


-- c. a books table, in the create statement include the following columns:
-- i. id, which should be an integer, have space for 11 characters, not be
-- nullable, and auto increment, set the id column as the primary key
-- ii. name, which should be an varchar, have space for 80 characters, not be
-- nullable, and auto increment
CREATE TABLE `books`
(
    `id`        int(11) NOT NULL AUTO_INCREMENT,
    `name`      varchar(80) NOT NULL,
    primary key (`id`)
);

-- d. libraryBook table, in the create statement include the following columns:
-- i. id, which should be an integer, have space for 11 characters, not be
-- nullable, and auto increment, set the id column as the primary key
-- ii. libraryID, which should be an integer, have space for 11 characters, not
-- be nullable
-- iii. bookID, which should be an integer, have space for 11 characters, not be
-- nullable
CREATE TABLE `libraryBook`
(
    `id`        int(11) NOT NULL AUTO_INCREMENT,
    `libraryID` int(11) NOT NULL,
    `bookID` int(11) NOT NULL,
    primary key (`id`)
);

-- 7. Write statements to:
-- a. insert some data into the library and books tables
insert into library (name)
values ('Alexa');
insert into library (name)
values ('Rosie');
insert into library (name)
values ('Bowie');
insert into library (name)
values ('Megan');
insert into books (name)
values ('Sense and Sensibility');
insert into books (name)
values ('Emma');
insert into books (name)
values ('Persuasion');
-- b. when you have the ids of the created rows, create some rows in the libraryBook
-- table
insert into libraryBook (bookID, libraryID)
values (1, 1);
insert into libraryBook (bookID, libraryID)
values (2, 3);
insert into libraryBook (bookID, libraryID)
values (1, 3);
insert into libraryBook (bookID, libraryID)
values (2, 1);

-- c. Select a library by id = 1
select * from library where id = 1;

-- d. Select a book using the like keyword and % wildcards to search the name
-- column if it contains a single word
select * from books where name like '%Emma%';

-- e. Select all books and order them alphabetically by name
select * from books order by name asc;

-- 8. Write a query with a join to return the name of all books that belong to libraries
select * from books join libraryBook on books.id = libraryBook.bookID;

-- 9. Write an update statement to update the name of one of the books
update books SET name = 'Mansfield Park' where name = 'Emma';

-- 10. Write a delete statement to delete one of the books.
delete from books where name = 'Mansfield Park';