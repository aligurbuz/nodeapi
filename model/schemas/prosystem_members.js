/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('prosystem_members', {
		id: {
			type: DataTypes.INTEGER(14),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false
		},
		realname: {
			type: DataTypes.STRING,
			allowNull: false
		},
		gender: {
			type: DataTypes.INTEGER(2),
			allowNull: false,
			defaultValue: '0'
		},
		userip: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		lat: {
			type: 'DOUBLE(8,2)',
			allowNull: false
		},
		lon: {
			type: 'DOUBLE(8,2)',
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false
		},
		photo: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: 'default.png'
		},
		lang: {
			type: DataTypes.INTEGER(14),
			allowNull: false,
			defaultValue: '1'
		},
		status: {
			type: DataTypes.INTEGER(2),
			allowNull: false,
			defaultValue: '1'
		},
		created_at: {
			type: DataTypes.INTEGER(14),
			allowNull: false
		},
		updated_at: {
			type: DataTypes.INTEGER(14),
			allowNull: false
		},
		membertoken: {
			type: DataTypes.INTEGER(14),
			allowNull: false
		},
		devicetoken: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		isMobile: {
			type: DataTypes.INTEGER(2),
			allowNull: false
		},
		isTablet: {
			type: DataTypes.INTEGER(2),
			allowNull: false
		},
		isDesktop: {
			type: DataTypes.INTEGER(2),
			allowNull: false
		},
		isBot: {
			type: DataTypes.INTEGER(2),
			allowNull: false
		},
		browserFamily: {
			type: DataTypes.STRING,
			allowNull: false
		},
		browserVersionMajor: {
			type: DataTypes.STRING,
			allowNull: false
		},
		browserVersionMinor: {
			type: DataTypes.STRING,
			allowNull: false
		},
		browserVersionPatch: {
			type: DataTypes.STRING,
			allowNull: false
		},
		osFamily: {
			type: DataTypes.STRING,
			allowNull: false
		},
		osVersionMajor: {
			type: DataTypes.STRING,
			allowNull: false
		},
		osVersionMinor: {
			type: DataTypes.STRING,
			allowNull: false
		},
		osVersionPatch: {
			type: DataTypes.STRING,
			allowNull: false
		},
		deviceFamily: {
			type: DataTypes.STRING,
			allowNull: false
		},
		deviceModel: {
			type: DataTypes.STRING,
			allowNull: false
		},
		mobileGrade: {
			type: DataTypes.STRING,
			allowNull: false
		},
		cssVersion: {
			type: DataTypes.STRING,
			allowNull: false
		},
		javaScriptSupport: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {
		tableName: 'prosystem_members'
	});
};
