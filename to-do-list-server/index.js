import express, { urlencoded } from "express";
import mongoose from "mongoose";
import routes from "./routes/index.js";
import cors from "cors";
const app = express();
const connection_url =
  "mongodb+srv://thetypo36:36'ashish@cluster0.citfudc.mongodb.net/?retryWrites=true&w=majority";

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
