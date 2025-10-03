//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.get('/start', function (req, res) {
  res.render('start')
})

// Start page
router.get('/start', function (req, res) {
  res.render('start')
})

// Destination page
router.get('/destination', function (req, res) {
  res.render('destination')
})

router.post('/destination', function (req, res) {
  res.redirect('/personal-details')
})

// Personal details page
router.get('/personal-details', function (req, res) {
  res.render('personal-details')
})

router.post('/personal-details', function (req, res) {
  res.redirect('/check-answers')
})

// Check answers page
router.get('/check-answers', function (req, res) {
  res.render('check-answers')
})
