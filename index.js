const app = require('./app');
const db = require('./config/db');
const UserModel = require('./model/user.model');

const port = 3000;

// root route
app.get('/',(req,res)=>{
    res.send("Hello World!!!")
});

app.listen(port,()=>{
    console.log(`Server Listning on Port http://localhost:${port}`);
}); 