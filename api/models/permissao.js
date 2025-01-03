'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class permissao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //permissao.pertenceAVarios ( funcao, {
      //    UsandoATabelaDeJunção: funcao_permissao
      //    comAChaveEstrangeira: cd_permissao
      //}
      permissao.belongsToMany(models.funcao, {
        through: 'funcao_permissao', 
        foreignKey: 'cd_permissao'
      });
    }
  }
  permissao.init({
    vl_permissao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'permissao',
  });
  return permissao;
};