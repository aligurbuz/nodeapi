/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('prosystem_administrator', {
		id: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		ccode: {
			type: DataTypes.INTEGER(14),
			allowNull: false
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			allowNull: true
		},
		hash: {
			type: DataTypes.STRING,
			allowNull: false
		},
		last_hash: {
			type: DataTypes.STRING,
			allowNull: true
		},
		fullname: {
			type: DataTypes.STRING,
			allowNull: false
		},
		last_ip: {
			type: DataTypes.STRING,
			allowNull: false
		},
		first_hash_time: {
			type: DataTypes.INTEGER(14),
			allowNull: true,
			defaultValue: '0'
		},
		created_at: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		updated_at: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		photo: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: 'default.png'
		},
		extra_info: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		lang: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '1'
		},
		user_lock: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '1'
		},
		role: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		system_name: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: 'normal'
		},
		system_number: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '2'
		},
		phone_number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		address: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		occupation: {
			type: DataTypes.STRING,
			allowNull: true
		},
		website: {
			type: DataTypes.STRING,
			allowNull: true
		},
		last_login_time: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		all_time_spent: {
			type: DataTypes.INTEGER(14),
			allowNull: true,
			defaultValue: '0'
		},
		hash_time_spent: {
			type: DataTypes.INTEGER(14),
			allowNull: true,
			defaultValue: '0'
		},
		last_hash_time_spent: {
			type: DataTypes.INTEGER(14),
			allowNull: true,
			defaultValue: '0'
		},
		all_average_time_spent_for_every_hash: {
			type: DataTypes.FLOAT,
			allowNull: true,
			defaultValue: '0'
		},
		all_hash_number: {
			type: DataTypes.INTEGER(14),
			allowNull: true,
			defaultValue: '0'
		},
		user_where: {
			type: DataTypes.STRING,
			allowNull: true
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '1'
		},
		logout: {
			type: DataTypes.INTEGER(2),
			allowNull: true,
			defaultValue: '0'
		},
		logout_time: {
			type: DataTypes.INTEGER(14),
			allowNull: true,
			defaultValue: '0'
		},
		created_by: {
			type: DataTypes.INTEGER(14),
			allowNull: true
		},
		is_mobile: {
			type: DataTypes.INTEGER(14),
			allowNull: true
		},
		is_tablet: {
			type: DataTypes.INTEGER(14),
			allowNull: true
		},
		is_desktop: {
			type: DataTypes.INTEGER(14),
			allowNull: true
		},
		is_bot: {
			type: DataTypes.INTEGER(14),
			allowNull: true
		},
		browser_family: {
			type: DataTypes.CHAR(255),
			allowNull: true
		},
		os_family: {
			type: DataTypes.CHAR(255),
			allowNull: true
		},
		all_clicked: {
			type: DataTypes.INTEGER(14),
			allowNull: true,
			defaultValue: '0'
		},
		hash_clicked: {
			type: DataTypes.INTEGER(14),
			allowNull: true,
			defaultValue: '0'
		},
		operations: {
			type: DataTypes.INTEGER(14),
			allowNull: true,
			defaultValue: '0'
		},
		success_operations: {
			type: DataTypes.INTEGER(14),
			allowNull: true,
			defaultValue: '0'
		},
		fail_operations: {
			type: DataTypes.INTEGER(14),
			allowNull: true,
			defaultValue: '0'
		},
		manipulation: {
			type: DataTypes.INTEGER(14),
			allowNull: true,
			defaultValue: '0'
		},
		noauth_area_operations: {
			type: DataTypes.INTEGER(14),
			allowNull: true,
			defaultValue: '0'
		},
		last_token: {
			type: DataTypes.CHAR(255),
			allowNull: true
		},
		last_post: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		last_filter_data: {
			type: DataTypes.INTEGER(2),
			allowNull: true,
			defaultValue: '0'
		}
	}, {
		tableName: 'prosystem_administrator'
	});
};
