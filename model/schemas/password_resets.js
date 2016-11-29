/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('password_resets', {
		email: {
			type: DataTypes.STRING,
			allowNull: false
		},
		token: {
			type: DataTypes.STRING,
			allowNull: false
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '0000-00-00 00:00:00'
		}
	}, {
		tableName: 'password_resets'
	});
};
