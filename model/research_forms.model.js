module.exports = (sequelize, Sequelize) => {
    var research_forms = sequelize.define(
        'research_forms', 
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
            employee_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            employees_reseachs_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            tasks_id: {
                type: Sequelize.INTEGER,
                allowNull: true
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
        research_forms.associate = (models) => {

            research_forms.hasMany(models.employees_reseachs, {
                foreignKey: 'research_form_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                sourceKey: 'id'
            });
        };
        return research_forms;
    };