export default class LogWriter {
    private static isEnabled: boolean = true;

    private constructor() {  }
    public static enableLogging(): void {
        LogWriter.isEnabled = true;
    }
    public static disableLogging(): void {
        LogWriter.isEnabled = false;
    }

    public static log(message: string): void {
        if (LogWriter.isEnabled) {
            console.log(`[INFO] ${message}`);
        }
    }

    public static warn(message: string): void {
        if (LogWriter.isEnabled) {
            console.warn(`[WARNING] ${message}`);
        }
    }

    public static error(message: string): void {
        if (LogWriter.isEnabled) {
            console.error(`[ERROR] ${message}`);
        }
    }
}
