var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var db = require('./app/config/db.config.js'); // подключение настроек базы данных

db.sequelize.sync({force: false});

app.listen(3000);

var info_bases = require('./app/route/info_bases.route.js');
info_bases(app);
var organizations = require('./app/route/organizations.route.js');
organizations(app);

var work_positions = require('./app/route/work_positions.route.js');
work_positions(app);