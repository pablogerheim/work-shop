import connect from "../repository/Postgreconnect.js";
import sequelize from "sequelize";

const Email = connect.define('emails', {
    emailId: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: sequelize.STRING,
        allowNull: false
    },
    email: {
        type: sequelize.STRING,
        allowNull: false
    }
}, { underscored: true })

export default Email