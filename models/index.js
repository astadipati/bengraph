import Sequelize from 'sequelize';

const sequelize = new Sequelize('bengraph', 'root', 'Kul0nuwun', {
    host: 'localhost',
    dialect: 'mysql'
});

const db = {
    User: sequelize.import('./user'),
};

db.sequelize = sequelize;
// db.Sequelize = Sequelize;

export default db;