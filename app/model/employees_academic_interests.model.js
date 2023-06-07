module.exports = (sequelize, Sequelize) => {
    var employees_academic_interests = sequelize.define(
        'employees_academic_interests', 
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
            academic_interest_id: {
                type: Sequelize.INTEGER,
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
        
        employees_academic_interests.associate = (models) => {

           

            employees_academic_interests.belongsTo(models.employees, {
                foreignKey: 'employee_id'
            });
            employees_academic_interests.belongsTo(models.academic_interests, {
                foreignKey: 'academic_interest_id'
            });
        };
        return employees_academic_interests;
    };