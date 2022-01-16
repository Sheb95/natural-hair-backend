import naturalHairstyles from "../hairstyles-data.js";

export function deleteHairstyleById(requestedId) {
   let hairstyles = naturalHairstyles;
   console.log(hairstyles);
   const index = hairstyles.findIndex(function ({ id }) {
      return id === requestedId;
   });

   if (typeof index === "number" && index != -1) {
      console.log("here is the selected hairstyle ", hairstyles[index]);
      hairstyles.splice(index, 1);
      console.log("here are the hairstyles: ", hairstyles);
      return hairstyles[index];
   } else {
      return console.log("Hairstyle does not exist");
   }

   //match requested id with id of hairstyle
   //if there is a match
   //find that hairstyle in the array
   //delete that hairstyle
   //return deleted hairstyle to user
}

deleteHairstyleById(7);

export function updateHairstyleById(requestedId, updates) {
   let hairstyles = naturalHairstyles;
   // console.log("Working", hairstyles);

   const index = hairstyles.findIndex(function ({ id }) {
      return id === requestedId;
   });

   console.log("Array index of requested hairstyle", index);

   if (typeof index === "number" && index != -1) {
      let updatedHairstyle = hairstyles[index];

      //match each hairstyle object key with the key with the updated value
      Object.keys(updatedHairstyle).map((key) => {
         if (Object.keys(updates).includes(key)) {
            updatedHairstyle[key] = updates[key];
         }
      });

      //put that updated hairstyle in the array

      hairstyles = [
         ...hairstyles.slice(0, index),
         updatedHairstyle,
         ...hairstyles.slice(index + 1),
      ];
      return hairstyles[index];
   } else {
      return console.log("Hairstyle not in database");
   }
}

// updateHairstyleById(1, { difficulty: "medium" });
