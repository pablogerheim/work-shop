import connect from "../config/Postgreconnect.js";
import sequelize from "sequelize";

const Contact = connect.define('contacts', {
    contactId: {
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
    },
    telephone: {
        type: sequelize.STRING,
        allowNull: false
    }
}, { underscored: true })

export default Contact