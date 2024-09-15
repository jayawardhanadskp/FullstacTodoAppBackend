const app = require('./app');
const db = require('./config/db'); // Ensure this sets up the DB connection
const UserModel = require('./model/user.model'); // Ensure this is correct

const port = 3000;

// root route
app.get('/', (req, res) => {
    res.send("Hello World!!!");
});

app.listen(port, () => {
    console.log(`Server Listening on Port http://localhost:${port}`);
});
