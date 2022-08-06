import connect from "../repository/postgreconnect.js";
import sequelize from "sequelize";

const Product = connect.define('products', {
    productId: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: sequelize.STRING,
        allowNull: false
    },
    image: {
        type: sequelize.STRING,
        allowNull: false
    },
    description: {
        type: sequelize.STRING,
        allowNull: false
    },
    url: {
        type: sequelize.STRING,
        allowNull: false
    },
    active: {
        type: sequelize.BOOLEAN,
        allowNull: false
    },
    autoexplan: {
        type: sequelize.BOOLEAN,
        allowNull: false
    }
}, { underscored: true })

export default Product