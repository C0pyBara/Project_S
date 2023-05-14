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
            title: {
                type: Sequelize.STRING(256), // тип данных STRING (в MySQL — VARCHAR)
                allowNull: false
            },
            short_title: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            description: {
                type: Sequelize.TEXT,
                allowNull: true
            },
            file_path: {
                type: Sequelize.STRING(1024), // тип данных STRING (в MySQL — VARCHAR)
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
                type: Sequelize.DATE,
                allowNull: false
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false
            },
        });
        
        documents.associate = (models) => {

            // Определение связи один-ко-многим с таблицей exam. Это определение связи с одной стороны.
            // Связь также определена со второй стороны (со стороны модели exam): в файле exam.model.js
            documents.hasMany(models.research_forms, {
                foreignKey: 'documents_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                sourceKey: 'id'
            });
        };
        return documents;
    };