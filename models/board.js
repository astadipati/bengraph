export default (sequelize, DataTypes) => {
    const Board = sequelize.define('board', {
      username: DataTypes.STRING,

    });
    // assosiation
    Board.associate = (models) => {
        // 1 to many
        User.hasMany(models.Suggestion, {
          foreignKey: 'boardId',
        });
      };
    return Board;
};