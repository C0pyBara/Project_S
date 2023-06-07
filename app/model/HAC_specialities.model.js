module.exports = (sequelize, Sequelize) => {
    var HAC_specialities = sequelize.define(
        'HAC_specialities', 
        {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            number: {
                type: Sequelize.STRING(64), 
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
        
        HAC_specialities.associate = (models) => {

            HAC_specialities.hasMany(models.employees_HAC_specialities, {
                foreignKey: 'HAC_speciality_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                sourceKey: 'id'
            });
        };
        return HAC_specialities;
    };