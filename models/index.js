import Sequelize from 'sequelize';

const sequelize = new Sequelize('bengraph', 'root', 'Kul0nuwun', {
    host: 'localhost',
    dialect: 'mysql'
});

const db = {
    // import
    User: sequelize.import('./user'),
    Board: sequelize.import('./board'),
    Suggestion: sequelize.import('./suggestion'),
};

Object.keys(db).forEach((modelName) => {
    if ('assosiate' in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
// db.Sequelize = Sequelize;

export default db;