import connect from "../repository/postgreconnect.js";
import sequelize from "sequelize";

const About = connect.define('abouts', {
    aboutId: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    about: {
        type: sequelize.STRING,
        allowNull: false
    }
}, { underscored: true })

export default About