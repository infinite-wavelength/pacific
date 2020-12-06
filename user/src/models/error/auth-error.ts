import CommonError from './common-error';
import CustomError from './custom-error';
import ERRORS from '../../config/errors'

export class AuthenticationError extends CustomError {
    statusCode = 401;

    constructor() {
        super(ERRORS.AUTHENTICATION_ERROR.description);
        Object.setPrototypeOf(this, AuthenticationError.prototype);
    }

    serializeErrors(): CommonError[] {
        return [new CommonError(ERRORS.AUTHENTICATION_ERROR.reason, ERRORS.AUTHENTICATION_ERROR.description)];
    }
}

export class AuthorizationError extends CustomError {
    statusCode = 401;

    constructor() {
        super(ERRORS.AUTHORIZATION_ERROR.description);
        Object.setPrototypeOf(this, AuthorizationError.prototype);
    }

    serializeErrors(): CommonError[] {
        return [new CommonError(ERRORS.AUTHORIZATION_ERROR.reason, ERRORS.AUTHORIZATION_ERROR.description)];
    }
}