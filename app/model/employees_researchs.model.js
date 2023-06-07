module.exports = (sequelize, Sequelize) => {
    var employees_researchs = sequelize.define(
        'employees_researchs', 
        {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    employee_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    role_id: {
      type: Sequelize.INTEGER,
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

  employees_researchs.associate = (models) => {

    employees_researchs.hasMany(models.research_forms, {
      foreignKey: 'employees_researchs_id',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      sourceKey: 'id'
    });
    employees_researchs.belongsTo(models.roles, {//неправильная связь
      foreignKey: 'role_id'
    });
    employees_researchs.belongsTo(models.employees, {//неправильная связь
      foreignKey: 'employee_id'
    });
};
return employees_researchs;
};