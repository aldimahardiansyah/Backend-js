// import model student
const Student = require('../models/Students');

class StudentController {
    async index(req, res) {
        const student = await Student.all();

        if (student.length !== 0) {
            const data = {
                message: "Menampilkan data student",
                data: student
            }

            return res.status(200).json(data);
        }

        // else
        const data = {
            message: `Data kosong`,
        }

        return res.status(200).json(data);
    }

    async store(req, res) {
        const {
            nama,
            nim,
            jurusan,
            email
        } = req.body;

        // handle validasi
        // jika nama kosong
        if (!nama || !nim || !email || !jurusan) {
            const data = {
                message: "Semua data wajib diisi"
            };
            return res.status(200).json(data);
        }

        // jika nim bukan angka, kirim respon gagal
        else if (isNaN(nim)) {
            const data = {
                message: "Nim harus angka"
            };
            return res.status(422).json(data);
        }

        // else
        // jalankan method create dari Model student
        // kirim data
        const student = await Student.create(req.body);
        const data = {
            message: `Menambahkan data student`,
            data: student
        }
        return res.status(201).json(data);
    }

    async update(req, res) {
        const {
            id
        } = req.params

        const student = await Student.find(id);

        console.log(student[0]);

        if (student[0]) {
            // update data
            const studentUpdated = await Student.update(id, req.body);

            const data = {
                message: `Update data student`,
                data: studentUpdated
            }
            return res.status(200).json(data);
        }

        // kirim data tidak ada
        const data = {
            message: `Data tidak ada`,
        }
        return res.status(404).json(data);
    }

    async destroy(req, res) {
        const {
            id
        } = req.params;

        const student = await Student.find(id);

        if (student[0]) {
            // hapus data
            await Student.delete(id);

            const data = {
                message: `Data berhasil dihapus`,
            }

            return res.status(200).json(data);
        }

        const data = {
            message: `Data tidak ada`,
        }

        return res.status(404).json(data);
    }

    async show(req, res) {
        const {
            id
        } = req.params;

        // cari data by id
        const student = await Student.find(id);

        if (student[0]) {
            const data = {
                message: "Menampilkan data student",
                data: student
            }

            return res.status(200).json(data);
        }

        const data = {
            message: `Data tidak ada`,
        }

        return res.status(404).json(data);
    }
}

// buat object
const object = new StudentController();

module.exports = object;