import * as express from 'express';

import { handleError, renderApp } from './app.controller';

const router: express.IRouter = express.Router();
router.get('/', renderApp, handleError);
export default router;
