module.exports = (sequelize, Sequelize) => {
    var events = sequelize.define(
        'events', 
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
            location: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            employee_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            employees_events_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            }, 
            start_time: { 
                type: Sequelize.DATE,
                allowNull: false
            },
            end_time: { 
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
        });

        events.associate = (models) => {
      
          events.hasMany(models.employees_events, {
              foreignKey: 'event_id',
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE',
              sourceKey: 'id'
          });
      };
      return events;
      };