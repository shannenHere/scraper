import express from 'express';
import router from './index.mjs'; // Use the .mjs extension here

const app = express();
const port = process.env.PORT || 3001;

app.use('/api/', router);

app.get('/', function(req, res){
  res.redirect('/api');
});

app.listen(port, function () {
  console.log('Server started on port', port);
});
