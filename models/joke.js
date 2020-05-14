"use strict";
module.exports = (sequelize, DataTypes) => {
  const joke = sequelize.define(
    "joke",
    {
      setup: DataTypes.TEXT,
      punchline: DataTypes.TEXT,
      likes: DataTypes.INTEGER
    },
    {}
  );
  joke.associate = function(models) {
    // associations can be defined here
  };
  return joke;
};
