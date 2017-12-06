const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDb server');
  } console.log('Connected to MongoDB server');

 /*db.collection('Users').deleteMany({name: 'Andrew'}).then((result) => {
   console.log(result);
 });
*/

/*db.collection('Users').deleteOne({name: 'Andrew'}).then((result) => {
  console.log(result);
});*/


/*db.collection('Users').findOneAndDelete({age: 25}).then((result) => {
  console.log(result);;
});*/

db.collection('Users').findOneAndDelete({
  _id: new ObjectID('5a1801f5273c3715fc3f0bca')
}).then((result) => {
  console.log(result);
});
});
