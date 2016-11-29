/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('comments', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		cname: {
			type: DataTypes.STRING,
			allowNull: true
		},
		userId: {
			type: DataTypes.INTEGER(14),
			allowNull: false
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		tableName: 'comments'
	});
};
