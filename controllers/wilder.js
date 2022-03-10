//Create, Read, Update, Delete
import WilderModel from "../models/wilder";
import { listErrors } from "./../utilities/tools";

// const methods = {
export default {
  create: (req, res, next) => {
    console.log("Créer un wilder!");
    const { name, city, description, skills } = req.body;

    WilderModel.init().then(() => {
      const wilder = new WilderModel({
        name,
        city,
        description, 
        skills,
        //   name: name,
        //   city: city,
        //   skills: skills
      });
      wilder
        .save()
        .then((result) => {
          res.json({
            success: true,
            result,
            // result: result
          });
        })
        .catch((err) => {
          res.status(400).json({
            success: false,
            result: listErrors(err),
          });
        });
    });
  },

  find: (req, res) => {
    WilderModel.find()
      .then((result) => {
        console.log("success", result);
        res.json({
          message: "c'est cool",
          result,
          success: true,
        });
      })
      .catch((err) => {
        res.json({ success: false, result: listErrors(err) });
      });
  },

  delete: (req, res) => {
    const { id } = req.params;
    // const id = req.params.id;
    WilderModel.deleteOne({ _id: id })
      .then((result) => {
        console.log("success", result);
        res.json({
          message: "c'est supprimé mon poto",
          result,
        });
      })
      .catch((err) => console.log("erreur", err));
  },

  update: (req, res) => {
    const { id } = req.params;
    // car on le met en parametre de l'url
    // const id = req.params.id;
    WilderModel.updateOne({ _id: id }, req.body)
      //_id: id dans mongoDB la clé pour l'id c'est _id, du coup si on met juste id ça bug
      .then((result) => {
        console.log("success", result);
        res.json({
          message: "c'est modifié frére",
          result,
        });
      })
      .catch((err) => console.log("erreur", err));
  },

  // find: (req, res) => {
  //   const { _id } = req.params;
  //   WilderModel.findOne({ _id })
  //     .then((result) => {
  //       if (!result) {
  //         return res.json({
  //           success: false,
  //           result: "Cet identifiant n'existe pas ",
  //         });
  //       }
  //       res.json({ success: true, result });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // },

};

// export default methods;
