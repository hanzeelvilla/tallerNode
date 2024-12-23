import { DiaryEntry, NonSensitiveInfoDiaryEntry } from '../types'
import diaryData from './diaries.json'

// Prioridadad de las importaciones: tsx, ts, , node, d.ts, json

// Usar aserciones de tipo para convertir el tipo de una variable, ya que TypeScript no puede inferirlo
// tipico cuando se usan apis externas o archivos json
const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
  // ts no filtra el comentario, se debe hacer manualmente
  return diaries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  })
}
/*
const diariesWithoutSensitiveInfo: NonSensitiveInfoDiaryEntry[] = getEntriesWithoutSensitiveInfo()
diariesWithoutSensitiveInfo[0].comment // Error: La propiedad 'comment' no existe en el tipo 'NonSensitiveInfoDiaryEntry'
*/

export const addEntry = (): undefined => undefined
