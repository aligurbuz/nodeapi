/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('prosystem_admin_report_trigger', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		registerid: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		registerccode: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		ccode: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		admin: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		trigger_page: {
			type: DataTypes.STRING,
			allowNull: true
		},
		trigger_concept: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		trigger_issue: {
			type: DataTypes.STRING,
			allowNull: true
		},
		trigger_repeat_statu: {
			type: DataTypes.INTEGER(14),
			allowNull: false
		},
		trigger_repeat_time: {
			type: DataTypes.INTEGER(14),
			allowNull: false
		},
		trigger_day: {
			type: DataTypes.INTEGER(14),
			allowNull: false
		},
		status: {
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
		}
	}, {
		tableName: 'prosystem_admin_report_trigger'
	});
};
