module.exports = (app) => {

    const work_positions = require('../controller/work_positions.controller');
    
    // Получение всех пользователей
    app.get('/api/work_positions', work_positions.findAll);

    // Добавление абитуриента
    app.post('/api/add_work_positions', work_positions.create);

    // Обновление данных абитуриента по id
    app.post('/api/update_work_positions/:id', work_positions.update);

    // Удаление данных абитуриента по id
    app.post('/api/delete_work_positions/:id', work_positions.delete);
};
