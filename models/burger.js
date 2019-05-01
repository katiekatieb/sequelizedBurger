'use strict';

module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("burgers", {
    burger_name: {
			type: DataTypes.STRING,
			allownull: false
		},
    devoured: {
			type: DataTypes.BOOLEAN,
			allownull: false,
			defaultValue: false
		}
  });

  return Burger;
};

