module.exports = (sequelize, Sequelize) => {
    var documents = sequelize.define(
        'documents', // определяем имя таблицы
        {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            employee_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            role_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            description: {
                type: Sequelize.TEXT,
                allowNull: true
              },
            created_at: { //КАКИЕ ТИПЫ ДОЛЖНЫ БЫТЬ У Timestamp
                type: Sequelize.TEXT(50),
                allowNull: false
            },
            updated_at: {
                type: Sequelize.TEXT(50),
                allowNull: false
            },
        });}