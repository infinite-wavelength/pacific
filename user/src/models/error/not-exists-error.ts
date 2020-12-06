import CommonError from './common-error';
import CustomError from './custom-error';
import ERRORS from '../../config/errors'

export default class NotExistsError extends CustomError {
    statusCode = 406;
    entity: string;

    constructor(entity: string) {
        super(ERRORS.NOT_EXISTS_ERROR.reason);
        Object.setPrototypeOf(this, NotExistsError.prototype);
        this.entity = entity;
    }

    serializeErrors(): CommonError[] {
        return [new CommonError(ERRORS.NOT_EXISTS_ERROR.reason, `${this.entity} ${ERRORS.NOT_EXISTS_ERROR.description}`)];
    }
}