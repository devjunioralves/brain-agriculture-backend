import { AppDataSource } from '../infra/db/postgres/helpers/PostgreSQLHelper'

AppDataSource.initialize()
  .then(async () => {
    const app = (await import('./config/App')).default
    app.listen(8080, () => {
      console.log('Server running at http://localhost:8080')
    })
  })
  .catch(console.error)
