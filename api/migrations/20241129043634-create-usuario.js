'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nm_usuario: {
        type: Sequelize.STRING
      },
      dt_usuario: {
        defaultValue:new Date(),
        type: Sequelize.DATE
      },
      ct_email: {
        type: Sequelize.STRING,
        allowNull:false,
        isEmail:true,
        unique:true
      },
      pw_usuario: {
        type: Sequelize.STRING,
        allowNull:false
      },
      ds_tipo: {
        type: Sequelize.STRING,
        defaultValue:'cliente'  
      },
      ic_verificado: {
        type: Sequelize.BOOLEAN,
        defaultValue:false
      },
      createdAt: {
        allowNull: false,
        defaultValue:new Date(),
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        defaultValue:new Date(),
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('usuarios');
  }
};