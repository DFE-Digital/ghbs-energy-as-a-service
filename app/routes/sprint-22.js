module.exports = function (router) {

  var version = "sprint-22";

  router.get('/' + version + '/before-you-start', function (req, res) {
    res.render(version + '/before-you-start', {})
  })

  router.post('/' + version + '/before-you-start', function (req, res) {
    res.redirect('/' + version + '/dfe-sign-in-email')
  })


  router.get('/' + version + '/dfe-sign-in-email', function (req, res) {
    res.render(version + '/dfe-sign-in-email', {})
  })

  router.post('/' + version + '/dfe-sign-in-email', function (req, res) {
    res.redirect('/' + version + '/dfe-sign-in-password')
  })


  router.get('/' + version + '/dfe-sign-in-password', function (req, res) {
    res.render(version + '/dfe-sign-in-password', {})
  })

  router.post('/' + version + '/dfe-sign-in-password', function (req, res) {
    if (req.session.data['journeyType'] == 'MAT') {
      res.redirect('/' + version + '/which-school-are-you-buying-for')
    } else {
      res.redirect('/' + version + '/single-school-authorisation')
    }
  })

  router.get('/' + version + '/which-school-are-you-buying-for', function (req, res) {
    res.render(version + '/which-school-are-you-buying-for', {})
  })

  router.post('/' + version + '/which-school-are-you-buying-for', function (req, res) {
    if (req.session.data['school'] == 'St Mary\'s Primary School') {
      res.redirect('/' + version + '/mat-authorisation')
    } else {
      res.redirect('/' + version + '/trust-schools')
    }
  })
}
