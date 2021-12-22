// import db
const db = require("../config/database");

class Student {
    // method untuk query semua data
    static all() {
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM students";
            db.query(sql, function (err, results) {
                resolve(results);
            });
        })
    }
}

// export class student
module.exports = Student;