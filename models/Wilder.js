import mongoose from "mongoose";

const Schema = mongoose.Schema;

const WilderSchema = new Schema(
  {
    name: {
      type: String, 
      required: [true, "Le nom est requis!"],
      unique: true,
    },
    city: {
      type: String,
      required: [true, "La ville est requise!"],
    },
    skills: [
      {
        title: String,
        vote: Number,
      },
    ],
  },
  { versionningKey: false }
  // versionningKey: false : 
);

export default mongoose.model("Wilder", WilderSchema); //ES6 type module
// module.exports = mongoose.model("Wilder", WilderSchema) //ES5
