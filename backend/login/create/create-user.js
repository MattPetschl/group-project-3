module.exports = {
    up: function(queryInterface, Sequelize) {
      return queryInterface.createTable('Users', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        firstName: {
          type: Sequelize.STRING
        },
        lastName: {
          type: Sequelize.STRING
        },
        email: {
          type: Sequelize.STRING
        },
        password: {
          type: Sequelize.STRING
        },
        isVerified: {
          type: Sequelize.BOOLEAN
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      }).then(() => {
        console.log('created Users table');
      });
    },
    down: function(queryInterface, Sequelize) {
      return queryInterface.dropTable('Users').then(() => {
        console.log('Users table dropped')
        )
    }
  };