/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('prosystem_notifications', {
		id: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		ccode: {
			type: DataTypes.INTEGER(2),
			allowNull: true
		},
		user: {
			type: DataTypes.INTEGER(14),
			allowNull: true,
			defaultValue: '0'
		},
		title: {
			type: DataTypes.STRING,
			allowNull: true
		},
		content: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: ''
		},
		created_at: {
			type: DataTypes.INTEGER(14),
			allowNull: true
		},
		updated_at: {
			type: DataTypes.INTEGER(14),
			allowNull: true
		},
		status: {
			type: DataTypes.INTEGER(2),
			allowNull: true,
			defaultValue: '1'
		}
	}, {
		tableName: 'prosystem_notifications'
	});
};
