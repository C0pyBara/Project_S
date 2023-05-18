module.exports = (sequelize, Sequelize) => {
    var academic_ranks = sequelize.define(
        'academic_ranks', 
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
        
        academic_ranks.associate = (models) => {

          
            academic_ranks.hasMany(models.employees, {
                foreignKey: 'academic_rank_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                sourceKey: 'id'
            });
        };
        return academic_ranks;
    };