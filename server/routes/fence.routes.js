const FenceController = require('../controllers/fence.controller');

module.exports = (app) => {
    app.get('/', FenceController.findAllFences);
    app.post('/fence/new', FenceController.addNewFence);
    app.get('/fence/:id', FenceController.findOneFence);
    app.put('/fence/edit/:id', FenceController.updateFence);
    app.post('/fence/:id', FenceController.deleteFence);

}