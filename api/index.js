const PORT = 5000 || process.env.PORT;
const express = require('express');
const app = express();
const multer = require('multer');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();
app.use(express.json()); //used to be body parser
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoryRoute = require('./routes/categories');

mongoose
	.connect(process.env.MONGO, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then(console.log('connected to mongoDB'))
	.catch((e) => {
		console.log(e);
	});

//multer
const myStorage = multer.diskStorage({
	destination: (req, file, callback) => {
		callback(null, 'images');
	},
	filename: (req, file, callback) => {
		callback(null, req.body.name);
	},
});

const upload = multer({ storage: myStorage });
app.post('/api/upload', upload.single('file'), (req, res) => {
	res.status(200).json('file has been uploaded.');
});

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);
app.use('/api/categories', categoryRoute);

app.listen(PORT, () => {
	console.log('backend is running');
});
