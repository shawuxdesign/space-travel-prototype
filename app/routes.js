//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Redirect the root URL to the start page
router.get('/', function (req, res) {
  res.redirect('/start')
})


// Start page
router.get('/start', function (req, res) {
  // Clear any old session data
  req.session.data = {}
  res.render('start')
})


router.post('/start', function (req, res) {
  res.redirect('/destination')
})

// Destination page
router.get('/destination', function (req, res) {
  res.render('destination')
})

router.post('/destination', function (req, res) {
  req.session.data = req.session.data || {}
  req.session.data.destination = req.body.destination
  res.redirect('/personal-details')
})

// Personal details page
router.get('/personal-details', function (req, res) {
  res.render('personal-details')
})

router.post('/personal-details', function (req, res) {
  req.session.data = req.session.data || {}
  req.session.data.fullName = req.body.fullName
  req.session.data.address = req.body.address
  res.redirect('/check-answers')
})

// Check answers page
router.get('/check-answers', function (req, res) {
  res.render('check-answers', { data: req.session.data })
})

router.post('/check-answers', function (req, res) {
  res.redirect('/confirmation')
})

// Confirmation page
router.get('/confirmation', function (req, res) {
  res.render('confirmation', {
    serviceName: 'Space Travel',
    data: req.session.data
  })
})

module.exports = router
