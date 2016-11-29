/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('prosystem_roles', {
		id: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		role_define: {
			type: DataTypes.STRING,
			allowNull: false
		},
		role_info: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		role_layer: {
			type: DataTypes.CHAR(255),
			allowNull: true
		},
		lang: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		parent: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		created_at: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		updated_at: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'prosystem_roles'
	});
};
