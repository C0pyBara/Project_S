module.exports = (sequelize, Sequelize) => {
    var roles= sequelize.define(
        'roles', 
        {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    title: {
        type: Sequelize.STRING(256),
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: true
      },
    // created_at: {
    //   type: Sequelize.DATE,
    //   allowNull: false
    // },
    // updated_at: {
    //   type: Sequelize.DATE,
    //   allowNull: false
    // }
  });

  roles.associate = (models) => {

    roles.hasMany(models.employees_events, {
        foreignKey: 'role_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        sourceKey: 'id'
    });
    roles.hasMany(models.employees_researchs, {
      foreignKey: 'role_id',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      sourceKey: 'id'
  });
    
};
return roles;
};