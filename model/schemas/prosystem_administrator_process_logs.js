/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('prosystem_administrator_process_logs', {
		id: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		ccode: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		userid: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		userip: {
			type: DataTypes.STRING,
			allowNull: false
		},
		ip: {
			type: DataTypes.CHAR(255),
			allowNull: true,
			defaultValue: '0'
		},
		userHash: {
			type: DataTypes.CHAR(255),
			allowNull: true
		},
		isoCode: {
			type: DataTypes.STRING,
			allowNull: true
		},
		country: {
			type: DataTypes.STRING,
			allowNull: true
		},
		city: {
			type: DataTypes.STRING,
			allowNull: true
		},
		state: {
			type: DataTypes.STRING,
			allowNull: true
		},
		postal_code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		lat: {
			type: 'DOUBLE(8,2)',
			allowNull: true
		},
		lon: {
			type: 'DOUBLE(8,2)',
			allowNull: true
		},
		timezone: {
			type: DataTypes.STRING,
			allowNull: true
		},
		continent: {
			type: DataTypes.STRING,
			allowNull: true
		},
		isMobile: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		isTablet: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		isDesktop: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		isBot: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		browserFamily: {
			type: DataTypes.STRING,
			allowNull: true
		},
		browserVersionMajor: {
			type: DataTypes.STRING,
			allowNull: true
		},
		browserVersionMinor: {
			type: DataTypes.STRING,
			allowNull: true
		},
		browserVersionPatch: {
			type: DataTypes.STRING,
			allowNull: true
		},
		osFamily: {
			type: DataTypes.STRING,
			allowNull: true
		},
		osVersionMajor: {
			type: DataTypes.STRING,
			allowNull: true
		},
		osVersionMinor: {
			type: DataTypes.STRING,
			allowNull: true
		},
		osVersionPatch: {
			type: DataTypes.STRING,
			allowNull: true
		},
		deviceFamily: {
			type: DataTypes.STRING,
			allowNull: true
		},
		deviceModel: {
			type: DataTypes.STRING,
			allowNull: true
		},
		mobileGrade: {
			type: DataTypes.STRING,
			allowNull: true
		},
		cssVersion: {
			type: DataTypes.STRING,
			allowNull: true
		},
		javaScriptSupport: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		referer: {
			type: DataTypes.CHAR(255),
			allowNull: true
		},
		formprocess: {
			type: DataTypes.STRING,
			allowNull: false
		},
		user_agent: {
			type: DataTypes.STRING,
			allowNull: false
		},
		user_host: {
			type: DataTypes.STRING,
			allowNull: false
		},
		url_path: {
			type: DataTypes.STRING,
			allowNull: false
		},
		url_path_explain: {
			type: DataTypes.STRING,
			allowNull: false
		},
		url_path_valid: {
			type: DataTypes.INTEGER(2),
			allowNull: true,
			defaultValue: '1'
		},
		log_process: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		msg: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		postdata: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		getdata: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		no_route: {
			type: DataTypes.INTEGER(2),
			allowNull: true,
			defaultValue: '0'
		},
		noauth_area_operations: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		success_operations: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		fail_operations: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		manipulation: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		query_json: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		process_count_sql: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		created_at: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		errstatus: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		errmsg: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		errfile: {
			type: DataTypes.STRING,
			allowNull: false
		},
		errline: {
			type: DataTypes.INTEGER(14),
			allowNull: false
		}
	}, {
		tableName: 'prosystem_administrator_process_logs'
	});
};
