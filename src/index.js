'use strict';
import {services,resources} from 'restify-generic-resources';
//import * as services from './lib/services';
//import * as resources from './lib/resources';
import validating from 'restify-sequelize-validation';

export const setupApi = (appAuthSecret, modelName, models) => ({
    ['findOne_' + modelName]: resources.getModelById(appAuthSecret, null, modelName, models),
    ['create_' + modelName]: resources.createModel(appAuthSecret, null, modelName, models),
    ['update_' + modelName]: resources.updateModel(appAuthSecret, null, modelName, models),
    ['listAll_' + modelName]: resources.listAll(appAuthSecret, null, modelName, models),
    ['delete_' + modelName]: resources.deleteModel(appAuthSecret, null, modelName, models)
});