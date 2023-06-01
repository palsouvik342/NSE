import express, {Request, Response} from "express";
// to access other appication to send reqest
import cors from 'cors';
// to parse req.body
import bodyParser from 'body-parser';
import getNSEData from "./getNSEData";

const app = express();
const port = 8001;

app.use(cors());
// for application/json content-type
app.use(bodyParser.json());
// for application/x-www-form-urlencoded content-type
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/get-nse-data", async(req:Request,res:Response) => {
    const company_name = req.body.companyName;
    const xdividend_date = req.body.xDividendDate;
     const allNSEData = await getNSEData(company_name, xdividend_date);
    console.log(allNSEData)
    res.json({allNSEData})
})
// app.get("/", (req,res)=>{
//     res.send({name:"souvik"})
// })

app.listen(port)