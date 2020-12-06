export default class CommonError {
    private reason: string;
    private description: string;

    constructor(reason: string, message: string) {
        this.reason = reason;
        this.description = message;
    }
}