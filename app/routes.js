//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

const radioButtonRedirect = require('radio-button-redirect')
router.use(radioButtonRedirect)

// Add your routes here

require('./routes/sprint-22.js')(router);
require('./routes/sprint-24.js')(router);
require('./routes/sprint-25.js')(router);
require('./routes/sprint-25-5.js')(router);
