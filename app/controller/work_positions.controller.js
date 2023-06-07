var globalFunctions = require('../config/global.functions.js');
var db = require('../config/db.config.js');
var work_positions = db.work_positions;

// Получение списка всех 
exports.findAll = (req, res) => {
    work_positions.findAll()
        .then(objects => {
            globalFunctions.sendResult(res, objects);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        })
};

// Добавление
exports.create = (req, res) => {
    work_positions.create({
        title: req.body.title,
        short_title: req.body.short_title
    }).then(object => {
        globalFunctions.sendResult(res, object);
    }).catch(err => {
        globalFunctions.sendError(res, err);
    })
};

// Обновление данных по id
exports.update = (req, res) => {
    work_positions.update({
            title: req.body.title,
            short_title: req.body.short_title
        },
        {
            where: {
                id: req.params.id
            }
        }
    ).then(object => {
        globalFunctions.sendResult(res, object);
    }).catch(err => {
        globalFunctions.sendError(res, err);
    })
};

// Удаление по id
exports.delete = (req, res) => {
    console.log(req.params.id)
    work_positions.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        globalFunctions.sendResult(res, 'Запись удалена');
    }).catch(err => {
        globalFunctions.sendError(res, err);
    });
};
