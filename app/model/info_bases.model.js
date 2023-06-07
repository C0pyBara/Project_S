module.exports = (sequelize, Sequelize) => {
    var info_bases = sequelize.define(
        'info_bases', 
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
            // created_at: { 
            //     type: Sequelize.DATE,
            //     allowNull: false
            // },
            // updated_at: {
            //     type: Sequelize.DATE,
            //     allowNull: false
            // },
        });
        info_bases.associate = (models) => {

            info_bases.hasMany(models.employees_info_bases, {
                foreignKey: 'info_base_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                sourceKey: 'id'
            });
        };
        
        return info_bases;
    };