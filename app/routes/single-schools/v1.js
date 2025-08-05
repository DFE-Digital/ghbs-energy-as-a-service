module.exports = function (router) {

  var version = "single-schools";

  router.get('/' + version + '/preload-data', function (req, res) {
    res.render(version + '/preload-data', {})
  })

  router.post('/' + version + '/preload-data', function (req, res) {
    const journeyType = req.session.data['journeyType']

    if (journeyType === 'Single School') {
      res.redirect('/' + version + '/before-you-start')
    } else {
      res.redirect('/' + version + '/pilot-service-only-single-schools')
    }
  })
}
