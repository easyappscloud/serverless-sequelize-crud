'use strict';
import {services,resources} from 'restify-generic-resources';

export const setupApi = (appAuthSecret, modelName, models) => ({
    ['readOne_' + modelName]: resources.getModelById(appAuthSecret, null, modelName, models),
    ['create_' + modelName]: resources.createModel(appAuthSecret, null, modelName, models),
    ['update_' + modelName]: resources.updateModel(appAuthSecret, null, modelName, models),
    ['readAll_' + modelName]: resources.listAll(appAuthSecret, null, modelName, models),
    ['delete_' + modelName]: resources.deleteModel(appAuthSecret, null, modelName, models)
});