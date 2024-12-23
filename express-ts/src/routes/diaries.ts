import { Router } from 'express'
import * as diaryService from '../services/diary'

const router = Router()

router.get('/', (_req, res) => {
  res.json(diaryService.getEntriesWithoutSensitiveInfo())
})

router.post('/', (_req, res) => {
  res.send('Creando un diario')
})

export default router
