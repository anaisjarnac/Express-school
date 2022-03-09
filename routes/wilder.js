import express from "express";
import { wilderValidation } from "./../validations"; // accolade si c'est pas exporté par défaut
import wilderController from "./../controllers/wilder"; // On le renomme comme on veux ici pour l'utilisé aprés

const router = express.Router();

router.post(
    "/create",
    wilderValidation.create,
    wilderController.create,
    // methods.create,
  );
  router.get("/", 
  wilderController.find
  // methods.find
  );
  router.delete("/:id", 
  wilderController.delete);
  // methods.delete);
  router.put("/:id", 
  wilderValidation.create,
  wilderController.update
  // methods.update
  );

  export default router;