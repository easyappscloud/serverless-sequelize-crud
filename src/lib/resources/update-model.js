import createError from 'http-errors';
import {resolveSuccess, resolveError, getTenant} from 'easyutils';
import {getModelById, updateModel, updateModelIncluded} from '../services';

export default (appAuthSecret, server, modelName, models, logger) => (req, res) => {
    if (req.body && req.body.id) {
        [
            getTenant(appAuthSecret),
            getModelById(server, modelName, models),
            updateModel,
            updateModelIncluded
        ].reduce((chain, task) => chain.then(task), Promise.resolve([req.params.jwt, req.body.id, req.body]))
            .then((result) => resolveSuccess(res, result))
            .catch(err => resolveError(res, createError(500, 'Internal Server Error', err), logger));
    } else {
        resolveError(res, createError(400, 'Invalid Request Body'), null);
    }
};