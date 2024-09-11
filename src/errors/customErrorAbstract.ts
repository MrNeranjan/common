//;

export abstract class CustomError extends Error {
    
    abstract statusCode: number;

    constructor(message: string) {
        super(message); // this message prop only for logging purposes.this message will not be sent to the client.
        Object.setPrototypeOf(this, CustomError.prototype);
    }

    abstract serializeErrors(): { message: string; field?: string }[];
}