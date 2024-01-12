//creator.addClass(User);
//  creator.addClass(Dialogue);
//  creator.addClass(Channel);
//  creator.addClass(Group);
//  creator.addClass(Folder);
//  creator.addClass(Message);
//  creator.addClass(SelfProfile);
//  creator.addClass(Tab);
//  creator.addClass(AuditLog);
const sqlDbCreate = "CREATE DATABASE IF NOT EXISTS localdb;";

const sqlUser = `CREATE TABLE IF NOT EXISTS users (
    userId INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    numberPhone TEXT,
    nickname TEXT,
    description TEXT,
    linkToPhoto TEXT
);`;

const sqlTabs = `CREATE TABLE IF NOT EXISTS tabs (
    tabId INT PRIMARY KEY,
    title TEXT NOT NULL,
    isDialogueMessageOn BOOLEAN DEFAULT TRUE,
    isgroupsMessageOn BOOLEAN DEFAULT TRUE,
    isChannelMessageOn BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (tabId) REFERENCES tabs(tabId)
);`;

const sqlSelfProfiles = `CREATE TABLE IF NOT EXISTS selfProfiles (
    userId INT PRIMARY KEY,
    name TEXT NOT NULL,
    password TEXT NOT NULL,
    numberPhone TEXT NOT NULL,
    email TEXT,
    nickname TEXT,
    description TEXT,
    linkToPhoto TEXT,
    timeLastEntry DATETIME,
    FOREIGN KEY (userId) REFERENCES selfProfiles(userId)
);`;

const sqlMessages = `CREATE TABLE IF NOT EXISTS messages (
    messageId INT PRIMARY KEY,
    authorId INT,
    content TEXT NOT NULL,
    sendingTime DATETIME NOT NULL,
    messageType TEXT NOT NULL,
    messageResponseId INT,
    messageForwardId INT,
    isEdited BOOLEAN DEFAULT FALSE,
    isDeleted BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (authorId) REFERENCES users(userId),
    FOREIGN KEY (messageResponseId) REFERENCES messages(messageId),
    FOREIGN KEY (messageForwardId) REFERENCES messages(messageId)
);`;
const sqlFolder = `CREATE TABLE IF NOT EXISTS folders (
    folderId INT PRIMARY KEY,
    folderName TEXT NOT NULL,
    FOREIGN KEY (folderId) REFERENCES folders(folderId)
);`;

const sqlRole = `CREATE TABLE IF NOT EXISTS roles (
    roleId INT PRIMARY KEY,
    name TEXT NOT NULL,
    emoji TEXT NOT NULL,
    removeMembers BOOLEAN DEFAULT FALSE,
    blockMembers BOOLEAN DEFAULT FALSE,
    manageRoles BOOLEAN DEFAULT FALSE,
    manageBranches BOOLEAN DEFAULT FALSE,
    seeAuditLog BOOLEAN DEFAULT FALSE,
    considerChannels BOOLEAN DEFAULT FALSE,
    manageServer BOOLEAN DEFAULT FALSE,
    sendMessage BOOLEAN DEFAULT TRUE,
    sendVoiceMessage BOOLEAN DEFAULT TRUE
);`;

const sqlGroup = `CREATE TABLE IF NOT EXISTS groups (
    groupId INT PRIMARY KEY,
    title TEXT NOT NULL,
    chatId INT,
    FOREIGN KEY (chatId) REFERENCES chats(chatId)
);`;

const sqlDialogue = `CREATE TABLE IF NOT EXISTS dialogues (
    dialogueId INT PRIMARY KEY,
    firstUserId INT,
    secondUserId INT,
    chatId INT,
    FOREIGN KEY (firstUserId) REFERENCES users(userId),
    FOREIGN KEY (secondUserId) REFERENCES users(userId),
    FOREIGN KEY (chatId) REFERENCES chats(chatId)
);`;

const sqlChannel = `CREATE TABLE IF NOT EXISTS channels (
    channelId INT PRIMARY KEY,
    title TEXT NOT NULL,
    chatId INT,
    FOREIGN KEY (chatId) REFERENCES chats(chatId)
);`;

const sqlChat = `CREATE TABLE IF NOT EXISTS chats (
    chatId INT PRIMARY KEY,
    FOREIGN KEY (chatId) REFERENCES chats(chatId)
);`;

const sqlBranch = `CREATE TABLE IF NOT EXISTS branches (
    branchId INT PRIMARY KEY,
    FOREIGN KEY (branchId) REFERENCES branches(branchId)
);`;

const sqlAuditLog = `CREATE TABLE IF NOT EXISTS auditLogs (
    auditLogId INT PRIMARY KEY,
    FOREIGN KEY (auditLogId) REFERENCES auditLogs(auditLogId)
);`;