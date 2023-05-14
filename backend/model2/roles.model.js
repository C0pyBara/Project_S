module.exports = (sequelize, Sequelize) => {
    var roles= sequelize.define(
        'roles', // определяем имя таблицы
        {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    title: {
        type: Sequelize.STRING(256),
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: true
      },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false
    }
  });}