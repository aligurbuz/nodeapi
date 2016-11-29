/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('prosystem_languages', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		langname: {
			type: DataTypes.STRING,
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
		tableName: 'prosystem_languages'
	});
};
