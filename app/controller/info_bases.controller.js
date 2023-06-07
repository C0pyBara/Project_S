var globalFunctions = require('../config/global.functions.js');
var db = require('../config/db.config.js');
var info_bases = db.info_bases;

// Получение списка всех 
exports.findAll = (req, res) => {
    info_bases.findAll()
        .then(objects => {
            globalFunctions.sendResult(res, objects);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        })
};

// Добавление
exports.create = (req, res) => {
    info_bases.create({
        title: req.body.title
    }).then(object => {
        globalFunctions.sendResult(res, object);
    }).catch(err => {
        globalFunctions.sendError(res, err);
    })
};

// Обновление данных по id
exports.update = (req, res) => {
    info_bases.update({
            title: req.body.title
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
    info_bases.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        globalFunctions.sendResult(res, 'Запись удалена');
    }).catch(err => {
        globalFunctions.sendError(res, err);
    });
};
