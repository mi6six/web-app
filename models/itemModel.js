const db = require('./database');

const Item = {
    getAll: (callback) => {
        db.all('SELECT * FROM items', callback);
    },
    create: (item, callback) => {
        db.run('INSERT INTO items (name, description) VALUES (?, ?)', [item.name, item.description], callback);
    },
    update: (item, callback) => {
        db.run('UPDATE items SET name = ?, description = ? WHERE id = ?', [item.name, item.description, item.id], callback);
    },
    partialUpdate: (id, updates, callback) => {
        const fields = Object.keys(updates).map(key => `${key} = ?`).join(', ');
        const values = Object.values(updates);
        db.run(`UPDATE items SET ${fields} WHERE id = ?`, [...values, id], callback);
    },
    delete: (id, callback) => {
        db.run('DELETE FROM items WHERE id = ?', id, callback);
    }
};

module.exports = Item;
