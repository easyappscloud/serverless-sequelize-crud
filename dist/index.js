'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setupApi = undefined;

var _restifyGenericResources = require('restify-generic-resources');

var _restifySequelizeValidation = require('restify-sequelize-validation');

var _restifySequelizeValidation2 = _interopRequireDefault(_restifySequelizeValidation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
//import * as services from './lib/services';
//import * as resources from './lib/resources';


var setupApi = exports.setupApi = function setupApi(appAuthSecret, modelName, models) {
    var _ref;

    return _ref = {}, _defineProperty(_ref, 'findOne_' + modelName, _restifyGenericResources.resources.getModelById(appAuthSecret, null, modelName, models)), _defineProperty(_ref, 'create_' + modelName, _restifyGenericResources.resources.createModel(appAuthSecret, null, modelName, models)), _defineProperty(_ref, 'update_' + modelName, _restifyGenericResources.resources.updateModel(appAuthSecret, null, modelName, models)), _defineProperty(_ref, 'listAll_' + modelName, _restifyGenericResources.resources.listAll(appAuthSecret, null, modelName, models)), _defineProperty(_ref, 'delete_' + modelName, _restifyGenericResources.resources.deleteModel(appAuthSecret, null, modelName, models)), _ref;
};