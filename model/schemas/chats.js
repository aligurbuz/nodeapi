/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('chats', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		username: {
			type: DataTypes.STRING,
			allowNull: true
		},
		message: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
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
		tableName: 'chats'
	});
};
