var Family = require('./controllers/FamilyController.js');

module.exports = function(router)
{
router.post('/sensex/family/save',Family.saveFamily);
router.post('/sensex/family/find',Family.findFamily);

};