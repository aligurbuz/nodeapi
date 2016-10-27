module.exports = { get: function (Sequelize) { var database=require(""+appDir+"/config/database"); var connection = new Sequelize(database.database,database.user,database.password, { host: database.host,dialect: database.dialect,pool: {max: 50,min: 0,idle: 10000}}); 
;
	var comment =connection.define('comments', {
		id: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		cname: {
			type: Sequelize.STRING,
			allowNull: true
		},
		userId: {
			type: Sequelize.INTEGER(14),
			allowNull: false
		},
		createdAt: {
			type: Sequelize.DATE,
			allowNull: false
		},
		updatedAt: {
			type: Sequelize.DATE,
			allowNull: false
		}
	})
;
 return comment; }};