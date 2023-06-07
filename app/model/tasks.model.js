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
                allowNull: false
            },
            employee_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            due_date: {
                type: Sequelize.DATE,
                allowNull: false
            },
            status: {
                type: Sequelize.INTEGER(32),
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
        
        tasks.associate = (models) => {

            tasks.hasMany(models.research_forms, {
                foreignKey: 'tasks_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                sourceKey: 'id'
            });
            tasks.belongsTo(models.employees, {
                foreignKey: 'employee_id'
            });
        };
        return tasks;
    };