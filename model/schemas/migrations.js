/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('migrations', {
		migration: {
			type: DataTypes.STRING,
			allowNull: false
		},
		batch: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'migrations'
	});
};
