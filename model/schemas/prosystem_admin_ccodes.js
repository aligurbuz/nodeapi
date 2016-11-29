/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('prosystem_admin_ccodes', {
		id: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		ccode: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ''
		},
		status: {
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
		tableName: 'prosystem_admin_ccodes'
	});
};
