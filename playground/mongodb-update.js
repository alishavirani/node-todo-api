const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDb server');
  } console.log('Connected to MongoDB server');

/*db.collection('Todos').findOneAndUpdate({
  _id: new ObjectID('5a18018b2db9221b90d247c5')
}, {
  $set: {
    completed:true
  }
}, {
  returnOrignal: false
}).then((result) => {
  console.log(result);
});*/
db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('5a194b95995a4615202faf3e')
}, {
  $set: {
    name: 'ALISHA'
  },
  $inc: {
    age: 1
  }
}, {
  returnOrignal: false
}).then((result) => {
  console.log(result);
});

});
