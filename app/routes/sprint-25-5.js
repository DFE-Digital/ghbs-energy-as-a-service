module.exports = function (router) {

  var version = "sprint-25-5";

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
    res.redirect('/' + version + '/which-school-buying-for')
  })


  router.get('/' + version + '/which-school-buying-for', function (req, res) {
    res.render(version + '/which-school-buying-for', {})
  })

  router.post('/' + version + '/which-school-buying-for', function (req, res) {
    if (req.session.data['school'] == 'St Mary\'s Primary School') {
      res.redirect('/' + version + '/authorisation')
    } else {
      res.redirect('/' + version + '/trust-schools')
    }
  })


  router.get('/' + version + '/trust-schools', function (req, res) {
    res.render(version + '/trust-schools', {})
  })

  router.post('/' + version + '/trust-schools', function (req, res) {
    res.redirect('/' + version + '/authorisation')
  })


  router.get('/' + version + '/authorisation', function (req, res) {
    res.render(version + '/authorisation', {})
  })

  router.post('/' + version + '/authorisation', function (req, res) {
    res.redirect('/' + version + '/which-energy-supply')
  })


  router.get('/' + version + '/which-energy-supply', function (req, res) {
    res.render(version + '/which-energy-supply', {})
  })


  router.post('/' + version + '/which-energy-supply', function (req, res) {
    if (req.session.data['skipForm'] == 'True'){
      res.redirect('/' + version + '/confirmation')
    } else {
      if (req.session.data['single-energyType'] == 'electricity') {
        res.redirect('/' + version + '/electricity-contract')
      } else {
        res.redirect('/' + version + '/gas-contract')
      }
    }
  })


  router.get('/' + version + '/gas-contract', function (req, res) {
    res.render(version + '/gas-contract')
  })

  router.post('/' + version + '/gas-contract', function (req, res) {
    if (req.session.data['single-energyType'] == 'gasAndElectricity') {
      res.redirect('/' + version + '/electricity-contract')
    } else {
      res.redirect('/' + version + '/gas-multi-single')
    }
  })

  router.get('/' + version + '/gas-multi-single', function (req, res) {
    res.render(version + '/gas-multi-single')
  })

  router.post('/' + version + '/gas-multi-single', function (req, res) {
    res.redirect('/' + version + '/gas-meter')
  })


  router.get('/' + version + '/gas-meter', function (req, res) {
    res.render(version + '/gas-meter')
  })

  router.post('/' + version + '/gas-meter', function (req, res) {
    if (req.session.data['meterType'] == 'Multi meter') {
      res.redirect('/' + version + '/gas-meter-summary')
    } else  {
      res.redirect('/' + version + '/gas-bill')
    } 
  })

  router.get('/' + version + '/gas-meter-summary', function (req, res) {
    res.render(version + '/gas-meter-summary')
  })

  router.post('/' + version + '/gas-meter-summary', function (req, res) {
    req.session.data['mprnRemove'] = 'False'
    if (req.session.data['addAnotherMPRN'] == 'true') {
      res.redirect('/' + version + '/gas-meter-1')
    } else {
      res.redirect('/' + version + '/gas-bill')
    }
  })

  router.get('/' + version + '/gas-bill', function (req, res) {
    res.render(version + '/gas-bill')
  })

  router.post('/' + version + '/gas-bill', function (req, res) {
    if (req.session.data['single-energyType'] == 'gas') {
      res.redirect('/' + version + '/site-contact')
    } else {
      res.redirect('/' + version + '/electricity-multi-single')
    }
  })

  
  router.get('/' + version + '/gas-meter-1', function (req, res) {
    res.render(version + '/gas-meter-1')
  })

  router.post('/' + version + '/gas-meter-1', function (req, res) {
    res.redirect('/' + version + '/gas-meter-summary-1')
  })

  
  router.get('/' + version + '/gas-meter-summary-1', function (req, res) {
    res.render(version + '/gas-meter-summary-1')
  })

  router.post('/' + version + '/gas-meter-summary-1', function (req, res) {
    if (req.session.data['addAnotherMPRN1'] == 'true') {
      res.redirect('/' + version + '/gas-meter-2')
    } else {
      res.redirect('/' + version + '/gas-bill')
    }
  })


  router.get('/' + version + '/gas-meter-2', function (req, res) {
    res.render(version + '/gas-meter-2')
  })

  router.post('/' + version + '/gas-meter-2', function (req, res) {
    res.redirect('/' + version + '/gas-meter-summary-2')
  })



  router.get('/' + version + '/gas-meter-summary-2', function (req, res) {
    res.render(version + '/gas-meter-summary-2')
  })

  router.post('/' + version + '/gas-meter-summary-2', function (req, res) {
    if (req.session.data['addAnotherMPRN2'] == 'true') {
      res.redirect('/' + version + '/gas-meter-info-3')
    } else {
      res.redirect('/' + version + '/gas-bill')
    }
  })

  router.get('/' + version + '/remove-mprn', function (req, res) {
    res.render(version + '/remove-mprn')
  })

  router.post('/' + version + '/remove-mprn', function (req, res) {
    req.session.data['mprnRemove'] = 'True'
    res.redirect('/' + version + '/gas-meter-summary')
  })


  router.get('/' + version + '/electricity-contract', function (req, res) {
    res.render(version + '/electricity-contract')
  })

  router.post('/' + version + '/electricity-contract', function (req, res) {
    if (req.session.data['single-energyType'] == 'gasAndElectricity') {
      res.redirect('/' + version + '/gas-multi-single')
    } else {
      res.redirect('/' + version + '/electricity-multi-single')
    }
  })


  router.get('/' + version + '/electricity-multi-single', function (req, res) {
    res.render(version + '/electricity-multi-single')
  })

  router.post('/' + version + '/electricity-multi-single', function (req, res) {
    res.redirect('/' + version + '/electricity-meter')
  })


  router.get('/' + version + '/electricity-meter', function (req, res) {
    res.render(version + '/electricity-meter')
  })

  router.post('/' + version + '/electricity-meter', function (req, res) {
    if (req.session.data['emeterType'] == 'Multi meter') {
      res.redirect('/' + version + '/electricity-meter-summary')
    } else {
      res.redirect('/' + version + '/mat-site-contact')
    }
  })


  router.get('/' + version + '/electricity-meter-summary', function (req, res) {
    res.render(version + '/electricity-meter-summary')
  })

  router.post('/' + version + '/electricity-meter-summary', function (req, res) {
    req.session.data['mpanRemove'] = 'False'
    if (req.session.data['addAnotherMPAN1'] == 'true') {
      res.redirect('/' + version + '/electricity-meter-1')
    } else {
      res.redirect('/' + version + '/electricity-bill')
    }
  })


  router.get('/' + version + '/electricity-meter-1', function (req, res) {
    res.render(version + '/electricity-meter-1')
  })

  router.post('/' + version + '/electricity-meter-1', function (req, res) {
    res.redirect('/' + version + '/electricity-meter-summary-1')
  })


  router.get('/' + version + '/electricity-meter-summary-1', function (req, res) {
    res.render(version + '/electricity-meter-summary-1')
  })

  router.post('/' + version + '/electricity-meter-summary-1', function (req, res) {
    req.session.data['mpanRemove'] = 'False'
    if (req.session.data['addAnotherMPAN1'] == 'true') {
      res.redirect('/' + version + '/electricity-meter-2')
    } else {
      res.redirect('/' + version + '/electricity-bill')
    }
  })


  router.get('/' + version + '/electricity-meter-2', function (req, res) {
    res.render(version + '/electricity-meter-2')
  })

  router.post('/' + version + '/electricity-meter-2', function (req, res) {
    res.redirect('/' + version + '/electricity-meter-summary-2')
  })
  

  router.get('/' + version + '/electricity-meter-summary-2', function (req, res) {
    res.render(version + '/electricity-meter-summary-2')
  })

  router.post('/' + version + '/electricity-meter-summary-2', function (req, res) {
    res.redirect('/' + version + '/electricity-bill')
  })


  router.get('/' + version + '/electricity-bill', function (req, res) {
    res.render(version + '/electricity-bill')
  })

  router.post('/' + version + '/electricity-bill', function (req, res) {
    res.redirect('/' + version + '/site-contact')
  })

  router.get('/' + version + '/remove-mpan', function (req, res) {
    res.render(version + '/remove-mpan')
  })

  router.post('/' + version + '/remove-mpan', function (req, res) {
    req.session.data['mpanRemove'] = 'True'
    res.redirect('/' + version + '/electricity-meter-summary')
  })


  router.get('/' + version + '/site-contact', function (req, res) {
    res.render(version + '/site-contact')
  })

  router.post('/' + version + '/site-contact', function (req, res) {
    res.redirect('/' + version + '/vat-rate')
  })


  router.get('/' + version + '/vat-rate', function (req, res) {
    res.render(version + '/vat-rate')
  })

  router.post('/' + version + '/vat-rate', function (req, res) {
      res.redirect('/' + version + '/vat-contact')
  })


  router.get('/' + version + '/vat-contact', function (req, res) {
    res.render(version + '/vat-contact')
  })

  router.post('/' + version + '/vat-contact', function (req, res) {
    if (req.session.data['VATcontact'] == 'Yes') {
      res.redirect('/' + version + '/vat-certificate')
    } else {
      res.redirect('/' + version + '/vat-contact-manual') 
    } 
  })


  router.get('/' + version + '/vat-contact-manual', function (req, res) {
    res.render(version + '/vat-contact-manual')
  })

  router.post('/' + version + '/vat-contact-manual', function (req, res) {
    res.redirect('/' + version + '/vat-certificate')
  })


  router.get('/' + version + '/vat-certificate', function (req, res) {
    res.render(version + '/vat-certificate')
  })

  router.post('/' + version + '/vat-certificate', function (req, res) {
    res.redirect('/' + version + '/billing-preferences')
  })


  router.get('/' + version + '/billing-preferences', function (req, res) {
    res.render(version + '/billing-preferences')
  })

  router.post('/' + version + '/billing-preferences', function (req, res) {
    res.redirect('/' + version + '/billing-address')
  })


  router.get('/' + version + '/billing-address', function (req, res) {
    res.render(version + '/billing-address')
  })

  router.post('/' + version + '/billing-address', function (req, res) {
    res.redirect('/' + version + '/check-answers')
  })


  router.get('/' + version + '/check-answers', function (req, res) {
    res.render(version + '/check-answers')
  })

  router.post('/' + version + '/check-answers', function (req, res) {
    res.redirect('/' + version + '/letter-of-authority')
  })


  router.get('/' + version + '/letter-of-authority', function (req, res) {
    res.render(version + '/letter-of-authority')
  })

  router.post('/' + version + '/letter-of-authority', function (req, res) {
    res.redirect('/' + version + '/confirmation')
  })
  

  router.get('/' + version + '/confirmation', function (req, res){
    res.render(version + '/confirmation')
  })

  router.post('/' + version + '/confirmation', function (req, res){
    res.redirect('/' + version + '/which-school-or-trust-are-you-buying-for')
  })
}
