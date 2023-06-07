module.exports = (sequelize, Sequelize) => {
    var organizations = sequelize.define(
        'organizations', 
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
            postal_address: {
                type: Sequelize.TEXT,
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
        
        organizations.associate = (models) => {

            organizations.hasMany(models.employees_organizations, {
                foreignKey: 'organization_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                sourceKey: 'id'
            });
        };

        return organizations;
    };