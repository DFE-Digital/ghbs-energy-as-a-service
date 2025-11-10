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
      res.redirect('/' + version + '/are-you-authorised')
    } else {
      res.redirect('/' + version + '/trust-schools')
    }
  })


  router.get('/' + version + '/trust-schools', function (req, res) {
    res.render(version + '/trust-schools', {})
  })

  router.post('/' + version + '/trust-schools', function (req, res) {
    res.redirect('/' + version + '/are-you-authorised')
  })


  router.get('/' + version + '/are-you-authorised', function (req, res) {
    res.render(version + '/are-you-authorised', {})
  })

  router.post('/' + version + '/are-you-authorised', function (req, res) {
    res.redirect('/' + version + '/single-school-fuel-selection')
  })

  router.get('/' + version + '/single-school-fuel-selection', function (req, res) {
    res.render(version + '/single-school-fuel-selection', {})
  })

  router.post('/' + version + '/single-school-fuel-selection', function (req, res) {
    if (req.session.data['skipForm'] == 'True'){
      res.redirect('/' + version + '/confirmation')
    } else {
      if (req.session.data['single-energyType'] == 'electricity') {
        res.redirect('/' + version + '/mat-electricity-contract')
      } else if (req.session.data['single-energyType'] == 'gas') {
        res.redirect('/' + version + '/mat-gas-contract')
      } else {
        res.redirect('/' + version + '/mat-gas-contract')
      }
    }
  })

  router.get('/' + version + '/confirmation', function (req, res){
    res.render(version + '/confirmation')
  })

  router.post('/' + version + '/confirmation', function (req, res){
    res.redirect('/' + version + '/trust-schools')
  })
}
