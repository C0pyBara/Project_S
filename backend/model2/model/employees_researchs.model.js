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
    created_at: {
      type: Sequelize.DATE,
      allowNull: false
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false
    }
  });

  employees_researchs.associate = (models) => {

    
    employees_researchs.hasMany(models.employees, {
        foreignKey: 'employees_research_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        sourceKey: 'id'
    });
    employees_researchs.hasMany(models.roles, {
      foreignKey: 'employees_research_id',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      sourceKey: 'id'
  });
};
return employees_researchs;
};