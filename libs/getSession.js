

module.exports = function(sid){
    const Sequelize = require('sequelize');
    const sequelize = new Sequelize('world', 'root', '12345', {
        host: 'localhost',
        dialect: 'mysql',

        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },

        // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
        operatorsAliases: false
    });





    const session = sequelize.define('sessions', {
        session_id: {
            type: Sequelize.STRING,
            primaryKey: true
        },

        expires: Sequelize.STRING,
        data: Sequelize.STRING
    },{
        freezeTableName: true
    });

  return session.findOne({attributes: ['data'] ,where: {session_id: sid}});

};


