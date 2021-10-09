DROP DATABASE IF EXISTS dmhelper_db;
CREATE DATABASE dmhelper_db;

USE dmhelper_db;

CREATE TABLE users (
    id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    isDM BOOLEAN DEFAULT false,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(60) NOT NULL
);

CREATE TABLE characters (
    id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    classification ENUM ('player', 'monster', 'npc'),
    character_name TINYTEXT NOT NULL,
    gender VARCHAR(50),
    race TINYTEXT,
    class TINYTEXT,
    level VARCHAR(50),
    alignment VARCHAR(100);
    size VARCHAR(50),
    type VARCHAR(50),
    hitDie VARCHAR(50),
    hp VARCHAR(50),
    initiative INTEGER,
    speed VARCHAR(50),
    space VARCHAR(50),
    reach VARCHAR(50),
    armorClass  VARCHAR(80),
    attacks TINYTEXT,
    fullattack TINYTEXT,
    specialattack TINYTEXT,
    specialqual TINYTEXT,
    fort INTEGER,
    reflex INTEGER,
    will INTEGER,
    str INTEGER,
    dex INTEGER,
    con INTEGER,
    int INTEGER,
    wis INTEGER,
    cha INTEGER,
    skills TINYTEXT,
    feats TINYTEXT,
    spelllist TEXT,
    equipment TEXT,
    notes TEXT,
    user_id INTEGER REFERENCES users(id),
    abilitylist_id INTEGER REFERENCES abilitylist(id)
)

CREATE TABLE abilities (
    id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    type ENUM('spell', 'feat', 'special abilities', 'spell-like abilities', 'class features'),
    title VARCHAR(60),
    details TINYTEXT,
    description TEXT,
)

CREATE TABLE abilitylist (
    id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    ability_id INTEGER REFERENCES abilities(id),
    character_id INTEGER REFERENCES characters(id)
)

-- isolated to DM user
CREATE TABLE Combat( 
    id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    current_Combat REFERENCES 

)
CREATE TABLE Games(
      id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    DM_id INTEGER REFERENCES users(id),
    character_id INTEGER REFERENCES characters(id),
)

-- CREATE TABLE Spells(
--     id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
--     name TINYTEXT,
--     areasize TINYTEXT,
--     category TINYTEXT,
--     components TINYTEXT,
--     cost TINYTEXT,
--     range TINYTEXT,
--     damage TINYTEXT,
--     description TEXT

-- )
-- CREATE TABLE classFeatures(
--      id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
--      name TINYTEXT, 
--      class TINYTEXT,
--      level VARCHAR(50),
--      description TEXT,

-- )
-- CREATE TABLE Feats(
--      id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
--      name TINYTEXT,
--     Prereq TINYTEXT,
--     traits TINYTEXT,
--     feat_Type TINYTEXT,
--     level VARCHAR(50),
--      description TEXT,
-- )
