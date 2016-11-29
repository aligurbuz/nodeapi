/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('prosystem_hotels', {
		id: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		hotel_name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		hotel_search_name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		country: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		province: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		district: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		town: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		hotel_type: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		sea_distinct: {
			type: 'DOUBLE(8,2)',
			allowNull: false
		},
		sea_unit: {
			type: DataTypes.STRING,
			allowNull: false
		},
		bus_distinct: {
			type: 'DOUBLE(8,2)',
			allowNull: false
		},
		bus_unit: {
			type: DataTypes.STRING,
			allowNull: false
		},
		airbus_distinct: {
			type: 'DOUBLE(8,2)',
			allowNull: false
		},
		airbus_unit: {
			type: DataTypes.STRING,
			allowNull: false
		},
		hotel_enable: {
			type: DataTypes.STRING,
			allowNull: false
		},
		hotel_description: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		hotel_tags: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		hotel_seo: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		hotel_properties: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		hotel_base_price_json: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		created_at: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		updated_at: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '1'
		}
	}, {
		tableName: 'prosystem_hotels'
	});
};
