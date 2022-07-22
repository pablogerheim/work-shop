import Sequelize from 'sequelize'

const sequelize = new Sequelize(
    "postgres://wpxdrkhq:ErPfZWdchXymkc39WwByEO0TBb-zn9n0@kesavan.db.elephantsql.com/wpxdrkhq", {
        dialect: "postgres",
        define: {
            timestamps: false
        }
    }
)

export default sequelize