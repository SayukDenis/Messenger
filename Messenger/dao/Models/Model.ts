export default abstract class Model {
    schema!: {
        name: string;
        properties: Record<string, any>;
        primaryKey?: string;
        embedded?: boolean;
    };
}