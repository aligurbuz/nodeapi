/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('prosystem_api_accesses', {
		id: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		system_ccode: {
			type: DataTypes.CHAR(255),
			allowNull: true
		},
		ccode: {
			type: DataTypes.ENUM('develop','guest'),
			allowNull: false,
			defaultValue: 'guest'
		},
		ip: {
			type: DataTypes.STRING,
			allowNull: false
		},
		apikey: {
			type: DataTypes.STRING,
			allowNull: false
		},
		statu: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '1'
		},
		created_at: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		updated_at: {
			type: DataTypes.INTEGER(14),
			allowNull: false
		},
		hash: {
			type: DataTypes.CHAR(255),
			allowNull: true,
			defaultValue: '0'
		},
		standart_key: {
			type: DataTypes.CHAR(255),
			allowNull: true
		},
		hash_number: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		hash_limit: {
			type: DataTypes.INTEGER(2),
			allowNull: true,
			defaultValue: '3'
		},
		access_service_key: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '1'
		},
		access_services: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		forbidden_access_services: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		api_coding_insert: {
			type: DataTypes.INTEGER(2),
			allowNull: true,
			defaultValue: '1'
		},
		api_coding_update: {
			type: DataTypes.INTEGER(2),
			allowNull: true,
			defaultValue: '1'
		},
		api_coding_delete: {
			type: DataTypes.INTEGER(2),
			allowNull: true,
			defaultValue: '1'
		},
		api_develop_url_filter: {
			type: DataTypes.INTEGER(2),
			allowNull: true,
			defaultValue: '0'
		},
		request: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '1000'
		},
		request_number: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		all_request_number: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		service_request_number: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		all_service_request_number: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		request_type: {
			type: DataTypes.INTEGER(2),
			allowNull: true,
			defaultValue: '1'
		}
	}, {
		tableName: 'prosystem_api_accesses'
	});
};
