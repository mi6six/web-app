const Item = require('../models/itemModel');

const getItems = (req, res) => {
    Item.getAll((err, items) => {
        if (err) return res.status(500).send(err);
        res.render('index.ejs', { items });
    });
};

const createItem = (req, res) => {
    Item.create(req.body, (err) => {
        if (err) return res.status(500).send(err);
        res.redirect('/');
    });
};

const updateItem = (req, res) => {
    Item.update(req.body, (err) => {
        if (err) return res.status(500).send(err);
        res.redirect('/');
    });
};

const deleteItem = (req, res) => {
    Item.delete(req.params.id, (err) => {
        if (err) return res.status(500).send(err);
        res.redirect('/');
    });
};

module.exports = { getItems, createItem, updateItem, deleteItem };
