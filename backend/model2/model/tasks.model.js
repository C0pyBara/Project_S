module.exports = (sequelize, Sequelize) => {
    var tasks = sequelize.define(
        'tasks', 
        {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            title: {
                type: Sequelize.STRING(50), 
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
            due_date: {
                type: Sequelize.DATE(8),
                allowNull: false
            },
            status: {
                type: Sequelize.INTEGER(32),
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
        
        tasks.associate = (models) => {

            tasks.hasMany(models.research_forms, {
                foreignKey: 'task_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                sourceKey: 'id'
            });
        };
        return tasks;
    };