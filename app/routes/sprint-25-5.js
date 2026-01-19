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
      res.redirect('/' + version + '/mat-site-contact')
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
    res.redirect('/' + version + '/gas-meter-summary-2')
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
    if (req.session.data['addAnotherMPAN1'] == 'true') {
      res.redirect('/' + version + '/electricity-meter-1')
    } else {
      res.redirect('/' + version + '/elec-info-billing')
    }
  })


  router.get('/' + version + '/electricity-meter-1', function (req, res) {
    res.render(version + '/electricity-meter-1')
  })

  router.post('/' + version + '/electricity-meter-1', function (req, res) {
    res.redirect('/' + version + '/elec-meter-review-1')
  })


  router.get('/' + version + '/elec-meter-review-1', function (req, res) {
    res.render(version + '/elec-meter-review-1')
  })

  router.post('/' + version + '/elec-meter-review-1', function (req, res) {
    if (req.session.data['addAnotherMPAN1'] == 'true') {
      res.redirect('/' + version + '/elec-meter-info-2')
    } else {
      res.redirect('/' + version + '/elec-info-billing')
    }
  })


  router.get('/' + version + '/elec-meter-info-2', function (req, res) {
    res.render(version + '/elec-meter-info-2')
  })

  router.post('/' + version + '/elec-meter-info-2', function (req, res) {
    res.redirect('/' + version + '/elec-meter-review-2')
  })
  

  router.get('/' + version + '/elec-meter-review-2', function (req, res) {
    res.render(version + '/elec-meter-review-2')
  })

  router.post('/' + version + '/elec-meter-review-2', function (req, res) {
    res.redirect('/' + version + '/elec-info-billing')
  })


  router.get('/' + version + '/elec-info-billing', function (req, res) {
    res.render(version + '/elec-info-billing')
  })

  router.post('/' + version + '/elec-info-billing', function (req, res) {
    res.redirect('/' + version + '/mat-site-contact')
  })


  router.get('/' + version + '/mat-site-contact', function (req, res) {
    res.render(version + '/mat-site-contact')
  })

  router.post('/' + version + '/mat-site-contact', function (req, res) {
    res.redirect('/' + version + '/mat-vat-declaration')
  })


  router.get('/' + version + '/mat-vat-declaration', function (req, res) {
    res.render(version + '/mat-vat-declaration')
  })

  router.post('/' + version + '/mat-vat-declaration', function (req, res) {
      res.redirect('/' + version + '/mat-vat-contact')
  })


  router.get('/' + version + '/mat-vat-contact', function (req, res) {
    res.render(version + '/mat-vat-contact')
  })

  router.post('/' + version + '/mat-vat-contact', function (req, res) {
    if (req.session.data['VATcontact'] == 'Yes') {
      res.redirect('/' + version + '/vat-certificate')
    } else {
      res.redirect('/' + version + '/mat-vat-contact-manual') 
    } 
  })


  router.get('/' + version + '/mat-vat-contact-manual', function (req, res) {
    res.render(version + '/mat-vat-contact-manual')
  })

  router.post('/' + version + '/mat-vat-contact-manual', function (req, res) {
    res.redirect('/' + version + '/vat-certificate')
  })


  router.get('/' + version + '/vat-certificate', function (req, res) {
    res.render(version + '/vat-certificate')
  })

  router.post('/' + version + '/vat-certificate', function (req, res) {
    res.redirect('/' + version + '/mat-billing-information')
  })


  router.get('/' + version + '/mat-billing-information', function (req, res) {
    res.render(version + '/mat-billing-information')
  })

  router.post('/' + version + '/mat-billing-information', function (req, res) {
    res.redirect('/' + version + '/mat-billing-contact')
  })


  router.get('/' + version + '/mat-billing-contact', function (req, res) {
    res.render(version + '/mat-billing-contact')
  })

  router.post('/' + version + '/mat-billing-contact', function (req, res) {
    res.redirect('/' + version + '/check-answers-single-school')
  })


  router.get('/' + version + '/check-answers-single-school', function (req, res) {
    res.render(version + '/check-answers-single-school')
  })

  router.post('/' + version + '/check-answers-single-school', function (req, res) {
    res.redirect('/' + version + '/authorisation-RENAME')
  })


  router.get('/' + version + '/authorisation-RENAME', function (req, res) {
    res.render(version + '/authorisation-RENAME')
  })

  router.post('/' + version + '/authorisation-RENAME', function (req, res) {
    res.redirect('/' + version + '/confirmation')
  })
  

  router.get('/' + version + '/confirmation', function (req, res){
    res.render(version + '/confirmation')
  })

  router.post('/' + version + '/confirmation', function (req, res){
    res.redirect('/' + version + '/which-school-or-trust-are-you-buying-for')
  })
}
