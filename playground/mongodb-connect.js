const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDb server');
  } console.log('Connected to MongoDB server');

  /*db.collection('Todos').insertOne({
    text: 'Something',
    completed: false
  },(err, result) => {
    if (err) {
      return console.log('Unable to insert todo',err);
    } console.log(JSON.stringify(result.ops, undefined, 2));
  });
  db.close();
})
*/
db.collection('Users').insertOne({
  name: 'Alisha',
  age: 22,
  location: 'Vasai West'
},(err, result) => {
  if (err) {
    return console.log('Unable to insert todo',err);
  } console.log(JSON.stringify(result.ops, undefined, 2));
});
db.close();
});
