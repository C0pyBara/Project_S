module.exports = (app) => {

    const organizations = require('../controller/organizations.controller');
    
    // Получение всех пользователей
    app.get('/api/organizations', organizations.findAll);

    // Добавление абитуриента
    app.post('/api/add_organizations', organizations.create);

    // Обновление данных абитуриента по id
    app.post('/api/update_organizations/:id', organizations.update);

    // Удаление данных абитуриента по id
    app.post('/api/delete_organizations/:id', organizations.delete);

    app.get('/api/organization/:id', organizations.findById);
};
