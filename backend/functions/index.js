const functions = require('firebase-functions')
const express = require("express")
const app = express()
const { db } = require("./util/admin")
const config = require("./util/config")
const firebase = require("firebase")
const cors = require("cors")

app.use(cors({ origin: true }))

firebase.initializeApp(config)

app.post('/update', (req, res) => {
    db.doc(`/games/${req.body.docId}`)
    .update({[req.body.player]: req.body.point, date_modified: new Date().toISOString() })
    .then(res.json({ message: `Successfully updated ${req.body.docId}` }))
    .catch(err => {
        console.error(err)
        res.status(500).json({ error: err.code })
    })
})

app.post('/create-game', (req, res) => {
    return db.collection('games').add({
        player1: 0,
        player2: 0,
        date_created: new Date().toISOString(),
        date_modified: new Date().toISOString()
    })
    .then(docRef => {
        res.json(docRef.id)
    })
    .catch(err => {
        console.error(err)
        res.status(500).json({ error: err.code })
    })
})

exports.api = functions.region("northamerica-northeast1").https.onRequest(app);