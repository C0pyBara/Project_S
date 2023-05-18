module.exports = (sequelize, Sequelize) => {
    var documents = sequelize.define(
        'documents',
        {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            title: {
                type: Sequelize.STRING(256), 
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
                type: Sequelize.STRING(1024), 
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
            created_at: { 
                type: Sequelize.DATE,
                allowNull: false
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false
            },
        });
        
        documents.associate = (models) => {

     
            documents.hasMany(models.research_forms, {
                foreignKey: 'document_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                sourceKey: 'id'
            });
        };
        return documents;
    };