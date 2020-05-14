"use strict";
module.exports = (sequelize, DataTypes) => {
  const joke = sequelize.define(
    "joke",
    {
      setup: DataTypes.TEXT,
      punchline: DataTypes.TEXT,
      likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      }
    },
    {}
  );
  joke.associate = function(models) {
    // associations can be defined here
  };
  return joke;
};
