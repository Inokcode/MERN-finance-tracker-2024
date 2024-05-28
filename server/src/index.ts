import express,{Express} from 'express';
import mongoose from 'mongoose';
import FinanceRecordRouter from "./routes/financialrecords";


const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());
const mongoURI: string = "mongodb+srv://regilearn:3XYLkpVhyABZLywA@personalfinancetracker.xrtidp3.mongodb.net/";

mongoose.connect(mongoURI)
.then(()=> console.log("CONNECTED TO MONGODB!"))
.catch((err)=> console.error("FAILED TO CONNECT TO MONGODB:", err));

app.use("/financialrecords",FinanceRecordRouter);

app.listen(port,()=> console.log(`Server Running on Port ${port}`))