const express = require('express')
const router = express.Router()

const nav = require('./nav.json')

// console.log(nav);

router.get('/', (req, res) => {
res.render('index', { title:"Home" ,nav })
})
router.get('/about', (req, res) => {
res.render('about', {  title:"About" ,nav })
})
router.get('/contact', (req, res) => {
res.render('contact', {  title:"Contact" ,nav })
})
router.get('/news', (req, res) => {
res.render('news', {  title:"News" ,nav})
})
router.get('/thinking', (req, res) => {
res.render('thinking', { title:"Thinking" , nav })
})
router.get('/work', (req, res) => {
    res.render('work', { title:"Work" , nav })
    })


module.exports = router