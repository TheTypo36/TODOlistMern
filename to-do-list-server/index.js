import express, { urlencoded } from "express";
import 'dotenv/config'
import mongoose from "mongoose";
import routes from "./routes/index.js";
import cors from "cors";
const app = express();
const DATABASE = process.env.DATABASE;
console.log(DATABASE);
const connection_url = DATABASE;
console.log(process.env.PORT);
const port = process.env.PORT || 5005;
app.use(cors());
app.use(express.urlencoded());
app.use(express.json());
app.use("/", routes);

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  //useCreateIndex: true,
  UseUnifiedTopology: true,
});

app.listen(port, () => console.log(`server start at post: ${port}`));
