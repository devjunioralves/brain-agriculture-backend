import { AppDataSource } from '../infra/db/postgres/helpers/PostgreSQLHelper'

AppDataSource.initialize()
  .then(async () => {
    const app = (await import('./config/App')).default
    app.listen(3000, () => {
      console.log('Server running at http://localhost:3000')
    })
  })
  .catch(console.error)
