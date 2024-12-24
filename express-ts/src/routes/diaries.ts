import { Router } from 'express'
import * as diaryService from '../services/diary'
import toNewDiaryEntry from '../utils'

const router = Router()

router.get('/', (_req, res) => {
  res.json(diaryService.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const diary = diaryService.findById(Number(req.params.id))
  res.json(diary)
})

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)
    const addedDiaryEntry = diaryService.addDiary(newDiaryEntry)

    res.json(addedDiaryEntry)
  } catch (e: any) {
    res.status(400).send(e.message)
  }
})

export default router
