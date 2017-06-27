'use strict';

import createError from 'http-errors';
import {resolveSuccess, resolveError, getTenant} from 'easyutils';
import {getModelById} from '../services';

export default (appAuthSecret, server, modelName, models, logger) => 
    (req, res) => {
        if (req.params && req.params.id) {
            [getTenant(appAuthSecret), getModelById(server, modelName, models)]
                .reduce((chain, task) => chain.then(task), Promise.resolve([req.params.jwt, req.params.id]))
                    .then(result => resolveSuccess(res, result))
                    .catch(err => resolveError(res, createError(500, 'Internal Server Error', err), logger));
        } else {
            resolveError(res, createError(400, 'Invalid Request Body'), null);
        }
    }