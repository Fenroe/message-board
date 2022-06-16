var express = require('express')
var router = express.Router()
var messages = require('../data/messages')

router.get('/', (req, res, next) => {
  res.render('form')
})

router.post('/', (req, res, next) => {
  messages.push({
    text: req.body.messageText, 
    user: req.body.messageName, 
    added: new Date()
  })
  res.redirect('/')
})

module.exports = router
