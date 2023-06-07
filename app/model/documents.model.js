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
                allowNull: false
            },
            file_path: {
                type: Sequelize.STRING(1024), 
                allowNull: false
            },
            employee_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            research_forms_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            // created_at: { 
            //     type: Sequelize.DATE,
            //     allowNull: false
            // },
            // updated_at: {
            //     type: Sequelize.DATE,
            //     allowNull: false
            // },
        });
        
        documents.associate = (models) => {

     
            documents.belongsTo(models.research_forms, {//неправильная связь
                foreignKey: 'research_forms_id',
            });
            documents.belongsTo(models.employees, {
                foreignKey: 'employee_id'
            });
        };
        return documents;
    };