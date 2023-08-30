import { Sequelize } from "sequelize";

const sequelize = new Sequelize('bellpharma', 'root', 'bellpharma123', {
    host: 'localhost',
    dialect: 'mysql'
});

export default sequelize;