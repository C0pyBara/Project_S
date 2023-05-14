module.exports = (sequelize, Sequelize) => {
    var research_forms = sequelize.define(
        'research_forms', // определяем имя таблицы
        {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            title: {
                type: Sequelize.STRING(50), // тип данных STRING (в MySQL — VARCHAR)
                allowNull: false
            },
            short_title: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            description: {
                type: Sequelize.STRING(50),
                allowNull: true
            },
            file_path: {
                type: Sequelize.STRING(50), // тип данных STRING (в MySQL — VARCHAR)
                allowNull: false
            },
            employee_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            research_forms: {
                type: Sequelize.INTEGER,
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