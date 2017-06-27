
'use strict';

import createError from 'http-errors';
import {resolveSuccess, resolveError, getTenant} from 'easyutils';
import {createModel} from '../services';

export default (appAuthSecret, server, modelName, models, logger) => 
	(req, res) => {
		if (req.body) {
			[
				getTenant(appAuthSecret), 
				createModel(server, modelName, models)
			].reduce((chain, task) => chain.then(task), Promise.resolve([req.params.jwt, req.body]))
				.then(result => resolveSuccess(res, result))
				.catch(err => resolveError(res, createError(500, 'Internal Server Error', err), logger));
		} else {
			resolveError(res, createError(400, 'Invalid Request Body'), null);
		}
	}
