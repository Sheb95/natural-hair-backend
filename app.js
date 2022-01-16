import express from "express";
// import { restart } from "nodemon";
import naturalHairstyles from "./hairstyles-data.js";
import { updateHairstyleById } from "./models/functions.js";

const app = express();
const port = 3000;
app.use(express.json());

// root path
app.get("/", (req, res) => {
   res.json({ message: "Wazaaaaaaap" });
});
// show all hairstyles
app.get("/hairstyles", (req, res) => {
   res.json({ message: "All hairstyles", payload: naturalHairstyles });
});

// get hairstyle by id
app.get("/hairstyles/:id", function (req, res) {
   const id = Number(req.params.id);
   // function to find hairstyle
   const findHairstyleByID = (id) => {
      return naturalHairstyles.find(function (hairstyle) {
         return hairstyle.id === id;
      });
   };

   const foundHairstyle = findHairstyleByID(id);

   if (foundHairstyle === undefined) {
      res.json({ message: `Hairstyle id ${req.params.id} not found.` });
      return;
   }

   res.json({ message: "Hairstyle found", payload: foundHairstyle });
});

//update hairstyle by id
app.patch("/hairstyles/:id", function (req, res) {
   const id = Number(req.params.id);
   const returnedUpdatedHairStyles = updateHairstyleById(id, req.body);
   res.json({ success: true, payload: returnedUpdatedHairStyles });
});

//delete hairstyle by id
app.delete("/hairstyles/:id", function (req, res) {
   // get id
   // call function that deletes hairstyle and returns the deleted hairstyle
   //res.json ({success: true, payload: deletedItem})
});

app.listen(port, () => {
   console.log(`App listening at http://localhost:${port}`);
});
