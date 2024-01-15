import LogWriter from '../LogWriter';
import { SQLiteDatabase } from 'expo-sqlite';
import DataBase from '../Database';

export async function createTriggers(database: DataBase) {

    const increment_numberInChat_messages =
        `CREATE TRIGGER IF NOT EXISTS increment_numberInChat
        AFTER INSERT ON messages
        FOR EACH ROW
        BEGIN
            UPDATE messages
            SET numberInChat = COALESCE((SELECT MAX(numberInChat) FROM messages
                                WHERE groups_messages_fk = NEW.groups_messages_fk 
                                    OR dialogues_messages_fk = NEW.dialogues_messages_fk 
                                    OR channels_messages_fk = NEW.channels_messages_fk 
                                    OR branches_messages_fk = NEW.branches_messages_fk), 0) + 1
            WHERE messageid = NEW.messageid;
        END;`

    //create all triggers:
    await database.executeSqlAsync(increment_numberInChat_messages);
}

