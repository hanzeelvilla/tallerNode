// Un tipo es una varaible que puede tener un valor de un conjunto de valores posibles
export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'stormy' | 'snowy' | 'windy'
export type Visibility = 'great' | 'good' | 'ok' | 'poor'

// Una interfaz es un contrato que define las propiedades que un objeto debe tener
export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

// Usar tipos de utilidades para crear nuevos tipos a partir de otros

// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>
export type newDiaryEntry = Omit<DiaryEntry, 'id'>
