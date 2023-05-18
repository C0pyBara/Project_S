
module.exports = (sequelize, Sequelize) => {
    var honor_ranks = sequelize.define(
        'honor_ranks', 
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
            created_at: { 
                type: Sequelize.DATE,
                allowNull: false
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false
            },
        });
        
        honor_ranks.associate = (models) => {
            honor_ranks.hasMany(models.employees, {
                foreignKey: 'honor_rank_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                sourceKey: 'id'
            });
        };
        return honor_ranks;
    };