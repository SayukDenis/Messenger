import Model from '../Model';
import IMessageLog from './IMessageLog';

export default class AuditLog extends Model {
    constructor(messages?: Array<IMessageLog>) {
        super();
        this.messages = messages ?? new Array;
    }
    messages: Array<IMessageLog>;
    static schema = {
        name: 'auditLogs',
        properties: {
            messages: { type: 'list', objectType: {} as IMessageLog },
        },
        embedded: true,
    }
}
