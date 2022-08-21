import sequelize from 'sequelize';
import connect from '../config/Postgreconnect.js';

const Email = connect.define(
    'emails',
    {
        emailId: {
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: sequelize.STRING,
            allowNull: false,
        },
        active: {
            type: sequelize.BOOLEAN,
            allowNull: false,
        },
    },
    { underscored: true },
);

export default Email;
