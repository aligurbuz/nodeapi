/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('prosystem_log_statistics', {
		id: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		year: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		month: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '1'
		},
		day: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '1'
		},
		general_counts: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		admin_logs: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		page_counts: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		post_process: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		created_at: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		updated_at: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		status: {
			type: DataTypes.INTEGER(2),
			allowNull: false
		}
	}, {
		tableName: 'prosystem_log_statistics'
	});
};
