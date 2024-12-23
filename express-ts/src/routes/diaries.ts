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

router.post('/', (req, res) => {
  const { date, weather, visibility, comment } = req.body
  const newDiaryEntry = diaryService.addDiary({
    date,
    weather,
    visibility,
    comment
  })
  res.json(newDiaryEntry)
})

export default router
