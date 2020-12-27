const errors: any = {
    GENERAL: {
        reason: 'GeneralError',
        description: 'Something went wrong'
    },
    SERVER: {
        reason: 'ServerError',
        description: 'Internal server error'
    },
    DB_CONNECTION: {
        reason: 'DatabaseError',
        description: 'Cannot connect to database'
    },
    RABBITMQ_CONNECTION: {
        reason: 'RabbitMQError',
        description: 'Cannot connect to RabbitMQ'
    },
    NOT_FOUND: {
        reason: 'NotFoundError',
        description: 'Cannot find the requested resource'
    },
    REQUEST_VALIDATION_ERROR: {
        reason: 'RequestValidationError',
        description: 'Failed to validate request'
    },
    APP_ERROR: {
        reason: 'ApplicationError',
        description: 'Cannot start application'
    },
    MODEL_SYNC_ERROR: {
        reason: 'SyncError',
        description: 'Cannot sync sequelize models to database'
    },
    HASHING_ERROR: {
        reason: 'HashingError',
        description: 'Failed to hash the password'
    },
    CREATION_ERROR: {
        reason: 'CreationError',
        description: 'Failed to create the'
    },
    EXISTS_ERROR: {
        reason: 'ExistsError',
        description: 'already exists'
    },
    NOT_EXISTS_ERROR: {
        reason: 'NotExistsError',
        description: 'doesn\'t exists'
    },
    AUTHENTICATION_ERROR: {
        reason: 'AuthenticationError',
        description: 'Failed to authenticate due to wrong email or password'
    },
    AUTHORIZATION_ERROR: {
        reason: 'AuthorizationError',
        description: 'Failed to authorize the user'
    },
    MISMATCH_ERROR: {
        reason: 'MismatchError',
        description: 'didn\'t match'
    },
}

export default errors;