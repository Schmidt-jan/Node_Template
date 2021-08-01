import express from "express"
import morgan from "morgan"

const port: number = 4000
const app = express()

app.use(morgan("dev"))

app.get("/", (req, res) => {
    res.send("Dispatcher")
})

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
})