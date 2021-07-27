const PORT = 5000 || process.env.PORT;
const express = require('express');
const app = express();

const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();
app.use(express.json()); //used to be body parser
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
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

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);

app.listen(PORT, () => {
	console.log('backend is running');
});
