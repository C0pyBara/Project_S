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
                type: Sequelize.STRING(256), // тип данных STRING (в MySQL — VARCHAR)
                allowNull: false
            },
            description: {
                type: Sequelize.TEXT,
                allowNull: true
              },
            employee_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            event_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            }, 
            rewarded_at: { 
                type: Sequelize.DATE,
                allowNull: false
            },
            created_at: { 
                type: Sequelize.DATE,
                allowNull: false
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false
            },
        });}