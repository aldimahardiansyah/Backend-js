// import db
const db = require('../config/database');

class Student {
    static all() {
        const promise = new Promise((resolve, reject) => {
            // melakukan query
            const sql = "SELECT * FROM students";
            db.query(sql, (error, results) => {
                resolve(results);
            });
        });

        return promise;
    }

    static find(id) {
        const promise = new Promise((resolve, reject) => {
            // melakukan query, select by id
            const sql = `SELECT * FROM students WHERE id = ${id}`;
            db.query(sql, (error, results) => {
                resolve(results);
            });
        });

        return promise;
    }

    static create(data) {
        return new Promise((resolve, reject) => {
            // melakukan insert data ke database
            const sql = `INSERT INTO students SET ?`;
            db.query(sql, data, (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(this.find(results.insertId));
                }
            });
        });
    }

    static async update(id, data) {
        // update data
        await new Promise((resolve, reject) => {
            const sql = `UPDATE students SET ? WHERE id = ?`;
            db.query(sql, [data, id], (err, result) => {
                resolve(result);
            });
        });

        // select data by id
        return await this.find(id);
    }

    static delete(id) {
        // query delete
        return new Promise((resolve, reject) => {
            const sql = `DELETE FROM students WHERE id = ?`;
            db.query(sql, id, (err, results) => {
                resolve(results);
            });
        });
    }

}

// expor model
module.exports = Student;