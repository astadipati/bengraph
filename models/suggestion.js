export default (sequelize, DataTypes) => {
    const Suggestion = sequelize.define('suggestion', {
      text: DataTypes.STRING,

// assosiation
     
    });
    Suggestion.associate = (models) => {
        // 1 to many
        User.hasMany(models.Suggestion, {
          foreignKey: 'boardId',
        });
      };

    return Suggestion;
};