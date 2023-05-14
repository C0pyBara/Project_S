module.exports = (sequelize, Sequelize) => {
    var employees = sequelize.define(
        'employees', // определяем имя таблицы
        {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            name: {
                type: Sequelize.STRING(50), // тип данных STRING (в MySQL — VARCHAR)
                allowNull: false
            },
            surname: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            patronymic: {
                type: Sequelize.STRING(50),
                allowNull: true
            },
            photo: {
                type: Sequelize.STRING(50), // тип данных STRING (в MySQL — VARCHAR)
                allowNull: false
            },
            birthday: {
                type: Sequelize.DATE(8),
                allowNull: false
            },
            brief_biography: {
                type: Sequelize.TEXT(50),
                allowNull: false
            },
            email: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            phone: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            homepage: {
                type: Sequelize.TEXT(50),
                allowNull: false
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