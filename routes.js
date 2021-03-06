const express = require('express')
const router = express.Router()

const nav = require('./nav.json')
const featurd = require('./featurd.json')
const ingegment = require('./ingegment.json')
const workJson = require('./work.json')
const agency = require('./agency.json')
const capa = require('./capabilities.json')
const newsSeite = require('./news.json')
const thinking = require('./thinking.json')
const office = require('./office.json')

// console.log(nav);

router.get('/', (req, res) => {
res.render('index', { title:"Projekt Basic Agency/Home" ,nav , featurd ,ingegment})
})
router.get('/about', (req, res) => {
res.render('about', {  title:"Projekt Basic Agency/About" ,nav ,agency , capa})
})
router.get('/contact', (req, res) => {
res.render('contact', {  title:"Projekt Basic Agency/Contact" ,nav,office })
})
router.get('/news', (req, res) => {
res.render('news', {  title:"Projekt Basic Agency/News" ,nav , newsSeite})
})
router.get('/thinking', (req, res) => {
res.render('thinking', { title:"Projekt Basic Agency/Thinking" , nav,thinking })
})
router.get('/work', (req, res) => {
    res.render('work', { title:"Projekt Basic Agency/Work" , nav,workJson })
    })


module.exports = router