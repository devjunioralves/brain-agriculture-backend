import { type Request, type Response, type NextFunction } from 'express'

export const Cors = (req: Request, res: Response, next: NextFunction): void => {
  res.set('Access-Control-Allow-Origin', '*')
  res.set('Access-Control-Allow-Methods', '*')
  res.set('Access-Control-Allow-Headers', '*')
  next()
}
