/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('prosystem_api_outputs', {
		id: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		userid: {
			type: DataTypes.INTEGER(14),
			allowNull: false
		},
		servicename: {
			type: DataTypes.CHAR(255),
			allowNull: true
		},
		method: {
			type: DataTypes.STRING,
			allowNull: false
		},
		output: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		descriptions: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		changed: {
			type: DataTypes.INTEGER(14),
			allowNull: true
		},
		version: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: '0'
		},
		post: {
			type: DataTypes.INTEGER(14),
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
		},
		updated_at: {
			type: DataTypes.INTEGER(14),
			allowNull: false
		}
	}, {
		tableName: 'prosystem_api_outputs'
	});
};
