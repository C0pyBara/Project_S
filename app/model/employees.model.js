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
                allowNull: true
            },
            birthday: {
                type: Sequelize.DATE,
                allowNull: true
            },
            brief_biography: {
                type: Sequelize.TEXT,
                allowNull: true
            },
            academic_rank_id: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            academic_rank_at: {
                type: Sequelize.DATE,
                allowNull: true
            },
            academic_level_id: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            academic_level_at: {
                type: Sequelize.DATE,
                allowNull: true
            },
            honor_rank_id: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            honor_rank_at: {
                type: Sequelize.DATE,
                allowNull: true
            },
            phone: {
                type: Sequelize.STRING(32),
                allowNull: true
            },
            email: {
                type: Sequelize.STRING(128),
                allowNull: false
            },           
            homepage: {
                type: Sequelize.TEXT,
                allowNull: true
            },
            password: {
                type: Sequelize.STRING(200),
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
    
        employees.associate = (models) => {

           
            employees.hasMany(models.documents, {
                foreignKey: 'employee_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                sourceKey: 'id'
            });
            employees.hasMany(models.employees_researchs, {
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
            employees.hasMany(models.research_forms, {
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
            employees.hasMany(models.employees_organizations, {
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


            employees.belongsTo(models.academic_ranks, {
                foreignKey: 'academic_rank_id'
            });
            employees.belongsTo(models.academic_levels, {
                foreignKey: 'academic_level_id'
            });
            employees.belongsTo(models.honor_ranks, {
                foreignKey: 'honor_rank_id'
            });
        };
        
        return employees;
    };