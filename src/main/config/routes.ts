import { Express, Router } from 'express'
import fg from 'fast-glob'

export default (app: Express): void => {
  const router = Router()
  app.use('/api', router)
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  fg.sync('**/src/main/routes/**routes.ts').map(async file => {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    (await import(`../../../${file}`)).default(router)
  })
}