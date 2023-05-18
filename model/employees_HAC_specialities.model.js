module.exports = (sequelize, Sequelize) => {
    var employees_HAC_specialities = sequelize.define(
        'employees_HAC_specialities', 
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
            HAC_speciality_id: {
                type: Sequelize.INTEGER,
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
        
        employees_HAC_specialities.associate = (models) => {

            employees_HAC_specialities.hasMany(models.employees, {
                foreignKey: 'employee_HAC_speciality_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                sourceKey: 'id'
            });
            employees_HAC_specialities.belongsTo(models.employees, {
                foreignKey: 'employee_HAC_speciality_id'
            });
        };
        return employees_HAC_specialities;
    };