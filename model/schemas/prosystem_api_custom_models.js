/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('prosystem_api_custom_models', {
		id: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		custom_models: {
			type: DataTypes.CHAR(255),
			allowNull: false,
			defaultValue: ''
		},
		custom_dir: {
			type: DataTypes.STRING,
			allowNull: true
		},
		version: {
			type: DataTypes.INTEGER(14),
			allowNull: true,
			defaultValue: '1'
		},
		users: {
			type: DataTypes.TEXT,
			allowNull: false
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
		tableName: 'prosystem_api_custom_models'
	});
};
