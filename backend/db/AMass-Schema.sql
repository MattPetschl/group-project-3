CREATE database AMass_Schema;

USE AMass_Schema;

CREATE TABLE users (
    disPlayName VARCHAR(50) NOT NULL,
    passcode VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    avatarURL VARCHAR(50),
    bio TEXT,

    PRIMARY KEY (email)
);

CREATE TABLE events (
    eventID INT(10) NOT NULL,
    eventName VARCHAR(100) NOT NULL,
    eventTime DATE NOT NULL,
    eventLocation VARCHAR(100) NOT NULL,
    eventCategory VARCHAR(50),
    groupID VARCHAR(50), 
    eventImageURL VARCHAR(50),
    eventDescription TEXT,
    boolean recurring NOT NULL

    PRIMARY KEY (eventID),
    FOREIGN KEY (groupID) REFERENCES groups(groupName)
);

CREATE TABLE groups (
    groupName VARCHAR(50) NOT NULL,
    groupCategory VARCHAR(50),
    groupImageURL VARCHAR(50)

    PRIMARY KEY (groupName)
);

CREATE TABLE user_events (
    email VARCHAR(50) NOT NULL references users(email),
    eventID INT(10) NOT NULL references events(eventID)
);

CREATE TABLE user_groups (
    email VARCHAR(50) NOT NULL references users(email),
    groupName VARCHAR(50) NOT NULL references events(groupName)
);