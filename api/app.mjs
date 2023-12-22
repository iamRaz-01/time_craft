// app.js
import express from"express";
import cors from 'cors';
import bodyParser from"body-parser";
import mySql from 'mysql2'
import UserDao from './dao/userDao.mjs'
 
const app = express();
const port = 3030;
const connection = mySql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'timecraft',
});
app.use(cors({
  origin: 'http://localhost:3000',  // Specify allowed origin(s)
  credentials: true,  // Allow credentials (e.g., cookies) to be sent with the request
}));
connection.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

app.use(bodyParser.json());

app.post('/api/timecraft/user/create',(req,res)=>{
  let data = req.body ;
  const dao =  new UserDao()
  dao.createUser(data);
   res.json({mess:"success"})
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


export { app , connection };