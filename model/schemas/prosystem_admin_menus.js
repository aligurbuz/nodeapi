/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('prosystem_admin_menus', {
		id: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		menu: {
			type: DataTypes.STRING,
			allowNull: false
		},
		icon: {
			type: DataTypes.STRING,
			allowNull: false
		},
		parent: {
			type: DataTypes.STRING,
			allowNull: false
		},
		link: {
			type: DataTypes.STRING,
			allowNull: false
		},
		row: {
			type: DataTypes.STRING,
			allowNull: false
		},
		status: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ''
		},
		role: {
			type: DataTypes.INTEGER(14),
			allowNull: true,
			defaultValue: '1'
		},
		created_at: {
			type: DataTypes.INTEGER(14),
			allowNull: true
		},
		updated_at: {
			type: DataTypes.INTEGER(14),
			allowNull: true
		}
	}, {
		tableName: 'prosystem_admin_menus'
	});
};
