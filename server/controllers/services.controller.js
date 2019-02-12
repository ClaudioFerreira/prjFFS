const Service = require('../models/service');

const serviceCtrl = {};

serviceCtrl.getServices = async (req, res) => {
    const services = await Service.find();
    res.json(services);
}

serviceCtrl.createService = async (req, res) => {
    const service = new Service({
        title: req.body.title,
        description: req.body.description
    });
    await service.save();
    res.json({
        'status': 'Service Saved'
    });
};

serviceCtrl.getService = async (req, res) => {
    const service = await Service.findById(req.params.id);
    res.json(service);
};

serviceCtrl.editService = async (req, res) => {
    const { id } = req.params;
    const service = {
        title: req.body.title,
        description: req.body.description
    };
    await Service.findByIdAndUpdate(id, { $set: service }, { new: true });
    res.json({ status: 'Service Updated' });
};

serviceCtrl.deleteService = async (req, res) => {
    await Service.findByIdAndRemove(req.params.id);
    res.json({ status: 'Service Deleted' });
}

module.exports = serviceCtrl;