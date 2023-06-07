module.exports = (sequelize, Sequelize) => {
    var academic_interests = sequelize.define(
        'academic_interests', 
        {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            title: {
                type: Sequelize.TEXT, 
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
        
        academic_interests.associate = (models) => {


            academic_interests.hasMany(models.employees_academic_interests, {
                foreignKey: 'academic_interest_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                sourceKey: 'id'
            });
        };
        return academic_interests;
    };