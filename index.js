require('dotenv').config();
const express = require('express');
var cors = require('cors')
const mongoose = require('mongoose')
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
const port = process.env.PORT || 5000
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('connected to database')
}).catch((e) => {
    console.log('unable to connect database ')
    console.log(e)
})


//import routes
const userRouter = require('./routers/User.routes');
const MachineRouter = require('./routers/Machine.routes');
const BrokenMachineRouter = require('./routers/BrokenMachine.routes');
const { pingMachines } = require('./utils/ping');
// app.get('/', (req, res) => {
//     res.send("hello mother fucker");
// });
app.use('/user', userRouter);
app.use('/Machine', MachineRouter);
// app.use('/Broken', BrokenMachineRouter);
//pingMachines();

app.listen(port, () => {
    console.log('app is running')
})