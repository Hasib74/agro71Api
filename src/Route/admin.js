const express = require('express');
var app = express();
const auth = require('../Middleware/auth.js');
const multer = require('multer');

const adminController = require('../Controller/Admin/admin.js');

const storage = multer.diskStorage({
	destination: function (req, file, cd) {
		cd(null, './uploads/');
	},
	filename: function (req, file, cd) {
		cd(null, new Date().toISOString() + file.originalname);
	},
});

// const fileFilter = (req, file, cd) => {
// 	if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
// 		cd(null, true);
// 	} else {
// 		cd(null, false);
// 	}
// };

const upload = multer({
	storage: storage,
	limits: {
		fieldSize: 1024 * 1024 * 5,
	},
	//fileFilter: fileFilter,
});

app.post('/login', adminController.logIn);

app.post('/logout', adminController.logout);

app.use(auth, (req, res, next) => {
	//	console.log(req.user.type);

	if (req.user.type == 'super admin') {
		next();
	} else {
		res.send({ message: 'No access' });
	}
});

app.post('/', upload.single('profile'), auth, adminController.create);
app.get('/', auth, adminController.findAll);
app.get('/:id', auth, adminController.findOne);
app.put('/:id', auth, adminController.update);
app.delete('/:id', auth, adminController.delete);

module.exports = app;
