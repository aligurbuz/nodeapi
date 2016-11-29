/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('prosystem_api_custom_references', {
		id: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		request_class: {
			type: DataTypes.CHAR(255),
			allowNull: false,
			defaultValue: ''
		},
		request_class_method: {
			type: DataTypes.CHAR(255),
			allowNull: true
		},
		requested_class: {
			type: DataTypes.STRING,
			allowNull: true
		},
		requested_class_method: {
			type: DataTypes.CHAR(255),
			allowNull: true
		},
		request_version: {
			type: DataTypes.INTEGER(14),
			allowNull: true,
			defaultValue: '0'
		},
		requested_version: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		statu: {
			type: DataTypes.INTEGER(2),
			allowNull: true,
			defaultValue: '1'
		},
		created_at: {
			type: DataTypes.INTEGER(14),
			allowNull: true
		}
	}, {
		tableName: 'prosystem_api_custom_references'
	});
};
