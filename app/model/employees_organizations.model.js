module.exports = (sequelize, Sequelize) => {
    var employees_organizations   = sequelize.define(
        'employees_organizations', 
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
            organization_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            structural_division: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            work_position_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            work_status: {
                type: Sequelize.TEXT,
                allowNull: true
            },
            work_phone: {
                type: Sequelize.STRING(32),
                allowNull: true
            },
            work_email: {
                type: Sequelize.STRING(128),
                allowNull: true
            },           
            work_homepage: {
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
        
        employees_organizations.associate = (models) => {

            employees_organizations.belongsTo(models.work_positions, {
                foreignKey: 'work_position_id'
            });
            employees_organizations.belongsTo(models.organizations, {
                foreignKey: 'organization_id'
            });
            employees_organizations.belongsTo(models.employees, {
                foreignKey: 'employee_id'
            });
        };
        return employees_organizations;
    };