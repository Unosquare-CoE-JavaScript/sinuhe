const userTypes = require('../utils/validations/user-type'),
    models = require('../utils/model-list'),
    baseController = require('./base'),
    userValidator = require('../utils/validations/user-validator'),
    jwt = require('jsonwebtoken'),
    ObjectId = require('mongoose').Types.ObjectId;

// Handle index actions
exports.index = (req, res) => {
    userValidator.validateUser(req.token, res, userTypes.user)
        .then(response => {
            if (response) {
                baseController.index(res, models.list.sim);
            }
        })
};

// Handle create distributor actions
exports.new = (req, res) => {
    userValidator.validateUser(req.token, res, userTypes.user)
        .then(response => {
            if (response) {
                let newEntity = new models.list.distributor.model();

                models.list.distributor.properties.forEach(prop => {
                    newEntity[prop] = req.body[prop]
                });

                newEntity['active'] = true;

                const decoded = jwt.decode(req.token, { complete: true });

                models.list.user.model.findById(decoded.payload._id, (error, user) => {
                    if (error) {
                        res.json(models.list.distributor.messages.error.couldNotSaveDistributor)
                    } else {
                        if (user !== null) {
                            newEntity['registered_by'] = {
                                _id: user._id,
                                name: user.name,
                                email: user.email,
                            };
                            newEntity.save((err) => {
                                if (err) {
                                    res.json(err);
                                } else {
                                    res.json({
                                        message: models.list.distributor.messages.success.created,
                                        data: newEntity
                                    });
                                }
                            });
                        } else {
                            res.json(models.list.user.messages.error.userNotFound)
                        }
                    }
                });
            }
        })
};

// Handle view distributor info
exports.view = (req, res) => {
    userValidator.validateUser(req.token, res, userTypes.user)
        .then(response => {
            if (response) {
                baseController.view(req, res, models.list.sim);
            }
        })
};

// Handle update distributor info
exports.update = (req, res) => {
    userValidator.validateUser(req.token, res, userTypes.admin)
        .then(response => {
            if (response) {
                baseController.update(req, res, models.list.sim);
            }
        })
};

// Handle delete distributor
exports.delete = (req, res) => {
    userValidator.validateUser(req.token, res, userTypes.admin)
        .then(response => {
            if (response) {
                baseController.delete(req, res, models.list.sim);
            }
        })
};

/**
 * Add sims to a distributor
 * @param req Request object
 * @param res Response object
 */
exports.pushSims = (req, res) => {
    userValidator.validateUser(req.token, res, userTypes.admin)
        .then(response => {
            if (response) {
                models.list.distributor.model.findById(req.params.id, (err, distributor) => {
                    if (err) {
                        res.json({
                            status: "error",
                            message: err,
                        });
                    } else {
                        let decoded = jwt.decode(req.token, { complete: true });

                        models.list.user.model.findById(decoded.payload._id, (error, user) => {
                            if (error) {
                                res.json(error);
                            } else {
                                addCreatorInfoToSim(req.body.sims, user, distributor)
                                    .then(response => {
                                        if (response !== undefined) {
                                            models.list.sim.model.insertMany(response.sims, { ordered: false }, (error, sims) => {
                                                if (error) {
                                                    if (error.name === 'BulkWriteError') {
                                                        res.json({
                                                            message: models.list.sim.messages.error.duplicatePhoneNumber,
                                                            writeErrors: error.writeErrors,
                                                            insertedDocs: error.insertedDocs
                                                        })
                                                    } else {
                                                        res.json(error)
                                                    }
                                                } else {
                                                    res.json({
                                                        message: models.list.sim.messages.success.simsRegistered,
                                                        registered_sims: sims,
                                                        not_registered_sims: response.wrongSims
                                                    });
                                                }
                                            });
                                        } else {
                                            res.json(models.list.distributor.messages.error.couldNotCreateIds)
                                        }
                                    });
                            }
                        });
                    }
                });
            }
        })
};

/**
 * Deletes all sims of a distributor
 * @param req Request object
 * @param res Response object
 */
exports.clearSims = (req, res) => {
    userValidator.validateUser(req.token, res, userTypes.admin)
        .then(response => {
            if (response) {
                models.list.sim.model.deleteMany({ distributor_id: ObjectId(req.params.id) }, (error) => {
                    if (error) {
                        res.json({
                            status: "error",
                            message: error,
                        })
                    } else {
                        res.json({
                            message: models.list.sim.messages.success.simsCleared
                        })
                    }
                });
            }
        })
};

/**
 * Search a sim using phone_number as query and updates its info
 * @param req Request object
 * @param res Response object
 */
exports.updatePhone = (req, res) => {
    userValidator.validateUser(req.token, res, userTypes.admin)
        .then(response => {
            if (response) {
                models.list.sim.model.find({ phone_number: req.params.phone }, (error, sim) => {
                    if (error) {
                        res.json({
                            status: "error",
                            message: error,
                        })
                    } else {
                        let _sim = sim[0];
                        models.list.sim.properties.forEach(prop => {
                            _sim[prop] !== req.body[prop] && req.body[prop] !== undefined ? _sim[prop] = req.body[prop] : _sim[prop] = _sim[prop];
                        });

                        // save the category and check for errors
                        _sim.save((err) => {
                            if (err) {
                                res.json(err);
                            } else {
                                res.json({
                                    message: models.list.sim.messages.success.updated,
                                    data: _sim
                                });
                            }
                        });
                    }
                });
            }
        })
};

/**
 * Search a SIM by phone_number. If extists, responses true an the sim object.
 * Otherwise responses false
 * @param req Request object
 * @param res Response object
 */
exports.existsSim = (phoneNumber) => {
    return new Promise((resolve, reject) => {
        models.list.sim.model.find({ phone_number: phoneNumber }, (error, sim) => {
            if (error) {
                reject(error)
            } else {
                if (sim !== null && sim.length === 1) {
                    resolve(sim[0])
                } else {
                    reject(404)
                }
            }
        });
    });
};

/**
 * Handle the roports
 * @param req Request object
 * @param res Response object
 */
exports.getSimsByDistributorId = (req, res) => {
    userValidator.validateUser(req.token, res, userTypes.admin)
        .then(response => {
            if (response) {
                models.list.sim.model.find({ distributor_id: ObjectId(req.params.id) }, null, { sort: { active: false } }, (error, sims) => {
                    if (error) {
                        res.json(error);
                    } else {
                        if (sims !== null) {
                            console.log('sims ', sims)
                            res.json({
                                message: models.list.sim.messages.success.retrieved,
                                data: sims
                            })
                        }
                    }
                });
            }
        })
};

/**
 * Handle the roports
 * @param req Request object
 * @param res Response object
 */
exports.getSims = (req, res) => {
    userValidator.validateUser(req.token, res, userTypes.admin)
        .then(response => {
            if (response) {
                if (req.params.id === undefined) {
                    models.list.sim.model.find({}, function (err, sims) {
                        if (err) {
                            res.json(err)
                        } else {
                            new Promise((resolve, reject) => {
                                let result = {
                                    activatedSims: 0,
                                    notActivatedSims: 0
                                };
                                sims.forEach(sim => {
                                    if (sim.active === true) {
                                        result.activatedSims++;
                                    } else {
                                        result.notActivatedSims++;
                                    }
                                });

                                if (result.activatedSims === -1 && result.notActivatedSims === -1) {
                                    reject(result);
                                } else {
                                    resolve(result);
                                }
                            })
                                .then(result => {
                                    res.json({
                                        message: models.list.sim.messages.success.retrieved,
                                        result
                                    })
                                })
                                .catch(result => {
                                    res.json(models.list.distributor.messages.error.couldNotGetSims)
                                })
                        }
                    });
                } else {
                    models.list.sim.model.find({ distributor_id: ObjectId(req.params.id) }, function (err, sims) {
                        if (err) {
                            res.json(err)
                        } else {
                            new Promise((resolve, reject) => {
                                let result = {
                                    activatedSims: 0,
                                    notActivatedSims: 0
                                };
                                sims.forEach(sim => {
                                    if (sim.active === true) {
                                        result.activatedSims++;
                                    } else {
                                        result.notActivatedSims++;
                                    }
                                });

                                if (result.activatedSims === -1 && result.notActivatedSims === -1) {
                                    reject(result);
                                } else {
                                    resolve(result);
                                }
                            })
                                .then(result => {
                                    res.json({
                                        message: models.list.sim.messages.success.retrieved,
                                        result
                                    })
                                })
                                .catch(result => {
                                    res.json(models.list.sim.messages.error.couldNotGetSims)
                                })
                        }
                    });
                }
            }
        })
};

/**
 * Adds info about the user that register the sims and validates phone
 * and serial number
 * @param sims Array of sims
 * @param user User that adds the sims
 * @returns Array of sims with info about the user that rigister them
 */
function addCreatorInfoToSim(sims, user, distributor) {
    return new Promise((resolve, reject) => {
        let result = {
            sims: [],
            wrongSims: []
        };

        sims.forEach((sim) => {
            if (/^\d+$/.test(sim.phone_number) && sim.phone_number.length === 10
                && /^\d+$/.test(sim.serial_number) && sim.serial_number.length === 19
            ) {
                sim['registered_by'] = {
                    name: user.name,
                    email: user.email,
                    _id: user.id
                };
                sim['distributor_id'] = distributor._id
                result.sims.push(sim);
            } else {
                result.wrongSims.push(sim)
            }
        });

        resolve(result)
    });
}