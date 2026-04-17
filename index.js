const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))

const HsrCharacters = [
    {
        id: 1,
        name: "Wanderer",
        CharType: "Wind",
    },
    {
        id: 2,
        name: "Shin",
        CharType: "Lightning",
    },
    {
        id: 3,
        name: "Acheron",
        CharType: "Lightning",
    },
]

app.get('/api/HsrCharacters', (req, res) =>{
    res.json(HsrCharacters)
})

app.post('/api/HsrCharacters', (req, res) =>{
    const {name,CharType} = req.body
    const newHsrCharacters = {name, CharType}
    HsrCharacters.push(newHsrCharacters)

    res.json(201).json({
        message: "Honkai Starail Characters have been added successfuly",
        HsrCharacters:newHsrCharacters
    })
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:no${port}`)
})