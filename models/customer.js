'use strict';

module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define("customers", {
    name: {
			type: DataTypes.STRING,
			allownull: false
		},
    burger_id: {
			type: DataTypes.INTEGER,
			allownull: false
		}
  });

  return Customer;
};