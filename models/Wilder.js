import mongoose from "mongoose";

const Schema = mongoose.Schema;

const WilderSchema = new Schema(
  {
    name: {
      type: String, 
      required: [true, "Le nom est requis!"],
      unique: true,
      // unique: [true, "Ce nom est déja donné t es naz"],
    },
    // name : String, // forme courte
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
);

export default mongoose.model("Wilder", WilderSchema);
