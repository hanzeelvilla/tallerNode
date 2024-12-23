import { Router } from 'express'
import * as diaryService from '../services/diary'

const router = Router()

router.get('/', (_req, res) => {
  res.json(diaryService.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const diary = diaryService.findById(Number(req.params.id))
  res.json(diary)
})

router.post('/', (_req, res) => {
  res.send('Creando un diario')
})

export default router
