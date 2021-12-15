class StudentController {
    index(req, res) {
        const data = {
            message: "Menampilkan data student",
            data: []
        }

        res.json(data);
    }

    store(req, res) {
        const {
            nama
        } = req.body;
        const data = {
            message: `Menambahkan data student ${nama}`,
            data: []
        }
        res.json(data);
    }

    update(req, res) {
        const {
            id
        } = req.params
        const {
            nama
        } = req.body;

        const data = {
            message: `Mengedit data student ${id} namanya ${nama}`,
            data: []
        }
        res.json(data);
    }

    destroy(req, res) {
        const {
            id
        } = req.params

        const data = {
            message: `Mengapus student ${id}`,
            data: []
        }
        res.json(data);
    }
}

// buat object
const object = new StudentController();

module.exports = object;