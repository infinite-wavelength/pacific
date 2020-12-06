import { Sequelize } from 'sequelize';
import config from 'config';

const sequelize: Sequelize = new Sequelize(config.get('databaseName'), config.get('databaseUsername'), config.get('databasePassword'), {
    dialect: 'mssql',
    host: config.get('databaseHost'),
    dialectOptions: {
        options: {
            instanceName: config.get('databaseInstanceName'),
            encrypt: false,
            trustServerCertificate: false,
            validateBulkLoadParameters: true,
        }
    },
    define: {
        timestamps: true
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    logging: false
});

export default sequelize;