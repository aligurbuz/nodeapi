/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('prosystem_mysql_slow_process_logs', {
		id: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		url_path: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		query_log: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		query_bindings: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		query_time: {
			type: 'DOUBLE(8,2)',
			allowNull: true
		},
		created_at: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'prosystem_mysql_slow_process_logs'
	});
};
