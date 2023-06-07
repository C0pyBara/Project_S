module.exports = (sequelize, Sequelize) => {
    var employees_events = sequelize.define(
        'employees_events', 
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
            // created_at: { 
            //     type: Sequelize.DATE,
            //     allowNull: false
            // },
            // updated_at: {
            //     type: Sequelize.DATE,
            //     allowNull: false
            // },
        });
        employees_events.associate = (models) => {

           

            employees_events.belongsTo(models.roles, {
                foreignKey: 'role_id'
            });
            employees_events.belongsTo(models.employees, {
                foreignKey: 'employee_id'
            });

            employees_events.hasMany(models.events, {//неправильная связь
                foreignKey: 'employees_events_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                sourceKey: 'id'
            });
        };
        return employees_events;
    
    
    }