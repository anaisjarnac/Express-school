//Create, Read, Update, Delete
import WilderModel from "../models/wilder";
import { listErrors } from "./../utilities/tools";

const methods = {
  create: (req, res, next) => {
    console.log("Créer un wilder!");
    const { name, city, skills } = req.body;

    WilderModel.init().then(() => {
      const wilder = new WilderModel({
        name,
        city,
        skills,
        //   name: name,
        //   city: city,
        //   skills: skills
      });
      wilder
        .save()
        .then((result) => {
          console.log("success", result);
          res.json({
            success: true,
            result,
            // result: result
          });
        })
        .catch((err) => {
          if (err.errors) {
            let errors = {};
            console.log(err);
            Object.keys(err.errors).map((key) => {
              errors = { ...errors, [key]: err.errors[key].message };
            });
            res.json({
              success: false,
              result: errors,
            });
          } else {
            res.send(
            "hello c'est mort le nom existe déja mon pote"
            )
          }
        });
    });
  },
  find: (req, res) => {
    WilderModel.init().then(() => {
      WilderModel.find()
        .then((result) => {
          console.log("success", result);
          res.json({
            message: "c'est cool",
            result,
          });
        })
        .catch((err) => console.log("erreur", err));
    });
  },
  delete: (req, res) => {
    const { id } = req.params;
    // const id = req.params.id;
    WilderModel.init().then(() => {
      WilderModel.deleteOne({ id })
        .then((result) => {
          console.log("success", result);
          res.json({
            message: "c'est supprimé mon poto",
            result,
          });
        })
        .catch((err) => console.log("erreur", err));
    });
  },
  update: (req, res) => {
    const { id } = req.params;
    // const id = req.params.id;
    WilderModel.init().then(() => {
      WilderModel.updateOne({ id }, req.body)
        .then((result) => {
          console.log("success", result);
          res.json({
            message: "c'est modifié frére",
            result,
          });
        })
        .catch((err) => console.log("erreur", err));
    });
  },
};

export default methods;
