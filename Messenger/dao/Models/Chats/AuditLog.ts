import Model from '../Model';
import IMessageLog from './IMessageLog';

export default class AuditLog extends Model {
    messages: Array<IMessageLog> = new Array; 
    static schema = {
        name: 'auditLogs',
        properties: {
            messages: { type: 'list', objectType: {} as IMessageLog },
        },
        embedded: true,
    }
}
