var dbProperties = {
    database: 'academic_office', // название базы данных
    username: 'root', // имя пользователя, для которого настроены права к базе данных, 'root' задаётся по умолчанию
    password: '', // пароль пользователя, по умолчанию пароль пустой
    host: 'localhost', // имя сервера, на котором расположена база данных
    dialect: 'mysql', // используемая СУБД
    pool: { // параметры соединения
        max: 5, // максимальное количество одновременно открытых соединений/ увеличить для будующей работы до 10
        min: 0, // минимальное количество соединений
        acquire: 30000, // максимальное время в миллисекундах, в течение которого пул (набор соединений к БД) будет пытаться установить соединение, прежде чем выдаст ошибку
        idle: 10000 // время в миллисекундах, в течение которого соединение может простаивать, прежде чем оно будет удалено
    }
};

var Sequelize = require('sequelize');
var sequelize = new Sequelize(
    dbProperties.database, dbProperties.username, dbProperties.password,
    {
        host: dbProperties.host,
        dialect: dbProperties.dialect,
        operatorsAliases: false,
        pool: {
            max: dbProperties.max,
            min: dbProperties.pool.min,
            acquire: dbProperties.pool.acquire,
            idle: dbProperties.pool.idle
        },
        define: {
            // имена таблиц не будут создаваться автоматически во множественном числе
            freezeTableName: true,

            // запрет на автоматическое создание полей createdAt и updatedAt (эти поля по умолчанию создаются ORM Sequalize во всех таблицах, при желании можете включить эту настройку)
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
);

var db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Подключение моделей
db.academic_levels = require('../model/academic_levels.model.js')(sequelize, Sequelize);
db.academic_ranks = require('../model/academic_ranks.model.js')(sequelize, Sequelize);
db.academic_interests = require('../model/academic_interests.model.js')(sequelize, Sequelize);
db.documents = require('../model/documents.model.js')(sequelize, Sequelize);
db.employees_academic_interests = require('../model/employees_academic_interests.model.js')(sequelize, Sequelize);
db.employees_events = require('../model/employees_events.model.js')(sequelize, Sequelize);
db.employees_HAC_specialities = require('../model/employees_HAC_specialities.model.js')(sequelize, Sequelize);
db.employees_info_bases = require('../model/employees_info_bases.model.js')(sequelize, Sequelize);
db.employees_organizations = require('../model/employees_organizations.model.js')(sequelize, Sequelize);
db.employees_researchs = require('../model/employees_researchs.model.js')(sequelize, Sequelize);
db.employees = require('../model/employees.model.js')(sequelize, Sequelize);
db.events = require('../model/events.model.js')(sequelize, Sequelize);
db.HAC_specialities = require('../model/HAC_specialities.model.js')(sequelize, Sequelize);
db.honor_ranks = require('../model/honor_ranks.model.js')(sequelize, Sequelize);
db.info_bases = require('../model/info_bases.model.js')(sequelize, Sequelize);
db.organizations = require('../model/organizations.model.js')(sequelize, Sequelize);
db.research_forms = require('../model/research_forms.model.js')(sequelize, Sequelize);
db.rewards = require('../model/rewards.model.js')(sequelize, Sequelize);
db.roles = require('../model/roles.model.js')(sequelize, Sequelize);
db.tasks = require('../model/tasks.model.js')(sequelize, Sequelize);
db.work_positions = require('../model/work_positions.model.js')(sequelize, Sequelize);

// Связывание моделей без импорта файлов (то есть, чтобы в файле описания любой модели можно было
// обращаться к другим моделям по имени без необходимости импорта в виде require(...))
Object.keys(db).forEach(key => {
    if (db[key] && db[key].associate) {
        db[key].associate(db);
    }
});

module.exports = db;