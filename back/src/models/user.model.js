import sequelize from 'sequelize';
import connect from '../config/Postgreconnect.js';

const User = connect.define(
    'users',
    {
        user_id: {
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: sequelize.STRING,
            allowNull: false,
        },
        password: {
            type: sequelize.STRING,
            allowNull: false,
        },
        access: {
            type: sequelize.STRING,
            allowNull: false,
        },
        timestamp: {
            type: sequelize.DATE,
            allowNull: false,
        },
    },
    { underscored: true },
);

export default User;
