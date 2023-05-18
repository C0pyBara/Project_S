module.exports = (sequelize, Sequelize) => {
    var employees_organiztions   = sequelize.define(
        'employees_organiztions', 
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
                allowNull: false
            },
            work_email: {
                type: Sequelize.STRING(128),
                allowNull: false
            },           
            work_homepage: {
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
        
        employees_organiztions.associate = (models) => {

     
            employees_organiztions.hasMany(models.research_forms, {
                foreignKey: 'employees_organiztion_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                sourceKey: 'id'
            });
            employees_organiztions.belongsTo(models.work_positions, {
                foreignKey: 'employees_organiztion_id'
            });
            employees_organiztions.belongsTo(models.organizations, {
                foreignKey: 'employees_organiztion_id'
            });
            employees_organiztions.belongsTo(models.employees, {
                foreignKey: 'employees_organiztion_id'
            });
        };
        return employees_organiztions;
    };