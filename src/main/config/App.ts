import express from 'express'
import setupRoutes from './Routes'
import setupMiddlewares from './Middlewares'
import cors from 'cors'

const app = express()
app.use(
  cors({
    origin: '*',
    methods: '*',
    allowedHeaders: '*',
  })
)

setupMiddlewares(app)
setupRoutes(app)
export default app
