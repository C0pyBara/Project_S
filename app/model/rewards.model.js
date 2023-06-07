module.exports = (sequelize, Sequelize) => {
    var rewards = sequelize.define(
        'rewards', 
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
            // created_at: { 
            //     type: Sequelize.DATE,
            //     allowNull: false
            // },
            // updated_at: {
            //     type: Sequelize.DATE,
            //     allowNull: false
            // },
        });

        rewards.associate = (models) => {
      
            rewards.belongsTo(models.events, {//неправильная связь
                foreignKey: 'event_id'
            });
            rewards.belongsTo(models.employees, {//неправильная связь
                foreignKey: 'employee_id'
            });
      };
      return rewards;
      };