// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(
	'mongodb://localhost:27017/TodoApp',
	(err, client) => {
		if (err) {
			return console.log('Unable to connect to MongoDB server');
		}
		console.log('Connected to MongoDB server');
		var db = client.db();
		// db.collection('Todos')
		// 	.deleteMany({ text: 'Eat Lunch' })
		// 	.then(result => {
		// 		console.log(result);
		// 	})
		// 	.catch(error => {
		// 		console.log(error);
		// 	});

		// db.collection('Todos').deleteOne({ text: 'Eat Lunch' })
		// 	.then(result => {
		// 		console.log(result);
		// 	})
		// 	.catch(error => {
		// 		console.log(error);
		// 	});

		db.collection('Todos')
			.findOneAndDelete({ completed: false })
			.then(result => {
				console.log(result);
			})
			.catch(e => {
				console.log(e);
			});

		//   db.close();
	}
);
