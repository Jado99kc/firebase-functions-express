import * as functions from "firebase-functions";
import * as express from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";

//? Routes Imports
import NotesRoutes from "./routes/notes.routes";
const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.use("/notes", NotesRoutes);
exports.api = functions.https.onRequest(app);
