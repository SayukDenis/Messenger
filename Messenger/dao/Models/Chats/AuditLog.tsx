import Model from './../Model';
import IMessageLog from './IMessageLog';

export default class AuditLog extends Model{    
    messages: IMessageLog;
    static schema: {
        name: 'auditLogs',
        properties: {
            messages: {type: 'interface', objectType: 'IMessageLog'},
        },
        embedded: true,
    }
}
