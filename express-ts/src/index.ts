import express from 'express'
import diaryRouter from './routes/diaries'

const app = express()
app.use(express.json()) // middleware que transforma el req.body a JSON

const PORT = 3000

app.get('/ping', (_req, res) => { // _req es una convención para indicar que no se usa y evitar el warning
  console.log('Alguien hizo ping')
  res.send('pong')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
