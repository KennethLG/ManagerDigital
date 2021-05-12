const mongoose = require("mongoose");
const {dbUsername, dbPassword, dbName} = require("../config");

(async ()=> {
	const db = await mongoose.connect(`mongodb+srv://${dbUsername}:${dbPassword}@cluster0.tgrpo.mongodb.net/${dbName}?retryWrites=true&w=majority`, {
		useCreateIndex: true,
		useNewUrlParser: true,
		useUnifiedTopology: true
	});
	console.log(`database connected to ${db.connection.name}`);
})()