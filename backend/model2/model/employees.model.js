module.exports = (sequelize, Sequelize) => {
    var employees = sequelize.define(
        'employees', 
        {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            name: {
                type: Sequelize.STRING(256), 
                allowNull: false
            },
            surname: {
                type: Sequelize.STRING(256),
                allowNull: false
            },
            patronymic: {
                type: Sequelize.STRING(256),
                allowNull: true
            },
            photo: {
                type: Sequelize.STRING(1024), 
                allowNull: false
            },
            birthday: {
                type: Sequelize.DATE(8),
                allowNull: false
            },
            brief_biography: {
                type: Sequelize.TEXT(50),
                allowNull: false
            },
            academic_rank_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            academic_rank_at: {
                type: Sequelize.DATE,
                allowNull: false
            },
            academic_level_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            academic_level_at: {
                type: Sequelize.DATE,
                allowNull: false
            },
            honor_rank_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            honor_rank_at: {
                type: Sequelize.DATE,
                allowNull: false
            },
            phone: {
                type: Sequelize.STRING(32),
                allowNull: false
            },
            email: {
                type: Sequelize.STRING(128),
                allowNull: false
            },           
            homepage: {
                type: Sequelize.TEXT(50),
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
    
        employees.associate = (models) => {

           
            employees.hasMany(models.documents, {
                foreignKey: 'employee_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                sourceKey: 'id'
            });
    
       
            employees.hasMany(models.events, {
                foreignKey: 'employee_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                sourceKey: 'id'
            });
    
         
            employees.hasMany(models.rewards, {
                foreignKey: 'employee_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                sourceKey: 'id'
            });
            employees.hasMany(models.employees_events, {
                foreignKey: 'employee_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                sourceKey: 'id'
            });
            employees.hasMany(models.reseach_forms, {
                foreignKey: 'employee_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                sourceKey: 'id'
            });
            employees.hasMany(models.tasks, {
                foreignKey: 'employee_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                sourceKey: 'id'
            });
            employees.hasMany(models.employees_info_bases, {
                foreignKey: 'employee_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                sourceKey: 'id'
            });
            employees.hasMany(models.organizations, {
                foreignKey: 'employee_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                sourceKey: 'id'
            });
            employees.hasMany(models.employees_academic_interests, {
                foreignKey: 'employee_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                sourceKey: 'id'
            });
            employees.hasMany(models.employees_HAC_specialities, {
                foreignKey: 'employee_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                sourceKey: 'id'
            });
            employees.hasOne(models.organization, {
                foreignKey: 'employee_id',
                onDelete: 'CASCADE'
            });
            employees.belongsTo(models.academic_ranks, {
                foreignKey: 'employee_id'
            });
            employees.belongsTo(models.academic_levels, {
                foreignKey: 'employee_id'
            });
            employees.belongsTo(models.honor_ranks, {
                foreignKey: 'employee_id'
            });
            employees.belongsTo(models.rewards, {
                foreignKey: 'employee_id'
            });
        };
        return employees;
    };