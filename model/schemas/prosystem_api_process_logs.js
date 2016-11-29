/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('prosystem_api_process_logs', {
		id: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		created_at: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		user: {
			type: DataTypes.INTEGER(14),
			allowNull: false
		},
		success: {
			type: DataTypes.INTEGER(2),
			allowNull: false,
			defaultValue: '1'
		},
		msg: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		provisionerror: {
			type: DataTypes.INTEGER(2),
			allowNull: false
		},
		version: {
			type: DataTypes.INTEGER(14),
			allowNull: true,
			defaultValue: '1'
		},
		serviceName: {
			type: DataTypes.STRING,
			allowNull: true
		},
		servicemethod: {
			type: DataTypes.STRING,
			allowNull: false
		},
		datacache: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: 'normal'
		},
		datacache_expire: {
			type: DataTypes.INTEGER(14),
			allowNull: false,
			defaultValue: '0'
		},
		query: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		postdata: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		sentdata: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		system_ccode: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		ccode: {
			type: DataTypes.INTEGER(2),
			allowNull: true,
			defaultValue: '0'
		},
		userip: {
			type: DataTypes.STRING,
			allowNull: false
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
		access: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		getdata: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		manipulation: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		keyOrHashValid: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '1'
		},
		access_point: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '1'
		},
		service_closed: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		staticIp: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '1'
		},
		custom: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		forbidden_access: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		headerData: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'prosystem_api_process_logs'
	});
};
