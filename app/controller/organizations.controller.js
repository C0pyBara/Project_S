var globalFunctions = require('../config/global.functions.js');
var db = require('../config/db.config.js');
var organizations = db.organizations;

// Получение списка всех 
exports.findAll = (req, res) => {
    organizations.findAll()
        .then(objects => {
            globalFunctions.sendResult(res, objects);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        })
};

// Добавление
exports.create = (req, res) => {
    organizations.create({
        title: req.body.title,
        short_title: req.body.short_title,
        postal_address: req.body.postal_address,
        phone: req.body.phone,
        email: req.body.email,
        homepage: req.body.homepage
    }).then(object => {
        globalFunctions.sendResult(res, object);
    }).catch(err => {
        globalFunctions.sendError(res, err);
    })
};

// Обновление данных по id
exports.update = (req, res) => {
    organizations.update({
            title: req.body.title,
            short_title: req.body.short_title,
            postal_address: req.body.postal_address,
            phone: req.body.phone,
            email: req.body.email,
            homepage: req.body.homepage
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
    organizations.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        globalFunctions.sendResult(res, 'Запись удалена');
    }).catch(err => {
        globalFunctions.sendError(res, err);
    });
};

// Получение данных абитуриента по id
exports.findById = (req, res) => {
    organizations.findByPk(req.params.id)
        .then(object => {
            globalFunctions.sendResult(res, object);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        })
};