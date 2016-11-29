/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('prosystem_default_roles', {
		id: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		role_name: {
			type: DataTypes.CHAR(255),
			allowNull: true
		},
		system_number: {
			type: DataTypes.INTEGER(14),
			allowNull: true
		},
		roles: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		role_row: {
			type: DataTypes.INTEGER(14),
			allowNull: true
		}
	}, {
		tableName: 'prosystem_default_roles'
	});
};
