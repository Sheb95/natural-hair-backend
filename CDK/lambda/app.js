import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import awsServerlessExpressMiddleware from "aws-serverless-express/middleware.js";

// import { restart } from "nodemon";
import naturalHairstyles from "./data.js";
import {
   updateHairstyleById,
   getNaturalHairstyles,
   deleteHairstyleById,
   createNewHairstyle,
   findHairstyleByID,
} from "./models/functions.js";

const app = express();
app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("combined"));
app.use(awsServerlessExpressMiddleware.eventContext());
// const port = 3000;
// app.use(express.json());

// root path
app.get("/", (req, res) => {
   res.send({
      statusCode: 200,
      headers: { "Content-Type": "text/plain" },
      body: "Welcome to the root path :)",
   });
});
// show all hairstyles
app.get("/hairstyles", (req, res) => {
   const allHairstyles = getNaturalHairstyles();
   res.send({
      statusCode: 200,
      headers: { "Content-Type": "text/plain" },
      body: allHairstyles,
   });
});

// get hairstyle by id
app.get("/hairstyles/:id", function (req, res) {
   const id = Number(req.params.id);

   const foundHairstyle = findHairstyleByID(id);

   if (foundHairstyle === undefined) {
      res.send({
         statusCode: 200,
         headers: { "Content-Type": "text/plain" },
         body: { message: `Hairstyle id ${req.params.id} not found.` },
      });
      return;
   }
   res.send({
      statusCode: 200,
      headers: { "Content-Type": "text/plain" },
      body: { message: "Hairstyle found", payload: foundHairstyle },
   });
});

export default app;
//update hairstyle by id
// app.patch("/hairstyles/:id", function (req, res) {
//    const id = Number(req.params.id);
//    const returnedUpdatedHairStyles = updateHairstyleById(id, req.body);
//    res.json({ success: true, payload: returnedUpdatedHairStyles });
// });

// //delete hairstyle by id
// app.delete("/hairstyles/:id", function (req, res) {
//    const id = Number(req.params.id);
//    const deletedHairstyle = deleteHairstyleById(id);
//    res.json({
//       success: true,
//       "Deleted hairstyle": deletedHairstyle,
//       "Updated list": naturalHairstyles,
//    });
//    // call function that deletes hairstyle and returns the deleted hairstyle
//    //res.json ({success: true, payload: deletedItem})
// });

// // !!!!! adding empty object
// app.post("/hairstyles", function (req, res) {
//    const newHairstyle = req.body;
//    console.log(newHairstyle);
//    const addedHairstyle = createNewHairstyle(newHairstyle);
//    res.json({ success: true, payload: addedHairstyle, all: naturalHairstyles });
// });

// app.listen(port, () => {
//    console.log(`App listening at http://localhost:${port}`);
// });
