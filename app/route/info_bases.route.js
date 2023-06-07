module.exports = (app) => {

    const info_bases = require('../controller/info_bases.controller');
    
    // Получение всех пользователей
    app.get('/api/info_bases', info_bases.findAll);

    // Добавление абитуриента
    app.post('/api/add_info_bases', info_bases.create);

    // Обновление данных абитуриента по id
    app.post('/api/update_info_bases/:id', info_bases.update);

    // Удаление данных абитуриента по id
    app.post('/api/delete_info_bases/:id', info_bases.delete);
};