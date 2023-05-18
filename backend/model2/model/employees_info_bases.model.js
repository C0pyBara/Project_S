module.exports = (sequelize, Sequelize) => {
    var employees_info_bases = sequelize.define(
        'employees_info_bases', 
        {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            employee_info_base_id: {
                type: Sequelize.STRING(36), 
                allowNull: false
            },
            employee_id: {
                type: Sequelize.INTEGER, 
                allowNull: false
            },
            info_base_id: {
                type: Sequelize.INTEGER, 
                allowNull: false
            },
            profile: {
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
        employees_info_bases.associate = (models) => {

            
            employees_info_bases.hasMany(models.employees_info_bases, {
                foreignKey: 'employees_info_bases_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                sourceKey: 'id'
            });
        };
        employees_info_bases.belongsTo(models.info_bases, {
            foreignKey: 'info_base_id'
        });
        employees_info_bases.belongsTo(models.employees, {
            foreignKey: 'employee_id'
        });
        return employees_info_bases;
    };