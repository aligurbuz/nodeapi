/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('prosystem_log_updated', {
		id: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		route: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ''
		},
		table: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: '1'
		},
		table_id: {
			type: DataTypes.INTEGER(14),
			allowNull: false,
			defaultValue: '0'
		},
		field: {
			type: DataTypes.STRING,
			allowNull: true
		},
		old_value: {
			type: DataTypes.STRING,
			allowNull: true
		},
		new_value: {
			type: DataTypes.STRING,
			allowNull: true
		},
		admin: {
			type: DataTypes.INTEGER(14),
			allowNull: true
		},
		ccode: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		created_at: {
			type: DataTypes.INTEGER(14),
			allowNull: true
		},
		changed: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'prosystem_log_updated'
	});
};
