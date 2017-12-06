//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDb server');
  } console.log('Connected to MongoDB server');

/*db.collection('Todos').find().toArray().then((docs) => {
  console.log('TODOS');
  console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
  console.log('Unable to  fetch docs');
});*/
/*db.collection('Todos').find({completed: false}).toArray().then((docs) => {
  //console.log(JSON.stringify(docs, undefined, 2));
  console.log(docs);
}, (err) => {
  console.log('Unable to  fetch docs');
});*/
/*db.collection('Users').find({
  _id: new ObjectID('5a193d1e995a4615202faf2a')
}).toArray().then((docs) => {
  //console.log(JSON.stringify(docs, undefined, 2));
  console.log(docs);
}, (err) => {
  console.log('Unable to  fetch docs');
}); */
db.collection('Users').find().count().then((count) => {
  //console.log(JSON.stringify(docs, undefined, 2));
  console.log(`Todos count ${count}`);
}, (err) => {
  console.log('Unable to  count  docs');
});


});
