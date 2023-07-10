const express = require(`express`)
const cors = require(`cors`)
const PORT = process.env.PORT || 3001
const db = require(`./db`)
const path = require(`path`)
const AppRouter = require(`./routes/AppRouter`)
const cookieParser = require(`cookie-parser`)
const logger = require(`morgan`)
const session = require(`express-session`)



require(`dotenv`).config()

require(`./db/index`)


const app = express()

const corsOptions = {
  origin: ['https://nebula-nav.vercel.app', 'http://localhost:5173'],
  methods: 'GET,PUT,POST,DELETE', 
  allowedHeaders: 'Content-Type,Authorization',
}


app.use(cors(corsOptions))
app.use(express.json())


app.use(logger(`dev`))
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(cookieParser())
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  next();
});




app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))


app.get('/', (req, res) => {
    res.send('/planets, /moons, /bodies, /comments')
  })


app.use(`/`, AppRouter)








app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
  })