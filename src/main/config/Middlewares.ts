import { type Express } from 'express'
import { bodyParser, Cors, contentType } from '../middlewares/'

export default (app: Express): void => {
  app.use(bodyParser)
  app.use(Cors)
  app.use(contentType)
}
