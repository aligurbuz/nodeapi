/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('prosystem_locations', {
		id: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		location: {
			type: DataTypes.STRING,
			allowNull: false
		},
		parent: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		seo_location: {
			type: DataTypes.STRING,
			allowNull: false
		},
		statu: {
			type: DataTypes.STRING,
			allowNull: false
		},
		language: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'prosystem_locations'
	});
};
