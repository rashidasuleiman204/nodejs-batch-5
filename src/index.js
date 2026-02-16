import express from 'express'
import userRoutes from './routes/userRoutes.js'
import dotenv from 'dotenv'
dotenv.config()
import { connectToDb } from'./config/dbConnect.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
await connectToDb()

// mongoose.connect(process.env.MOMGODB_URI)
// .then(() => {
//     console.log(`Database connected successfully`)
// }).catch((err) => {
//     console.error(err)
// })


app.use(userRoutes)

app.listen(3000, () => {
    console.log(`Server is running on port 3000`)
})

