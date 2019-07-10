const router = require("express").Router();
const eventsController = require("../../controllers/eventsController");

router.get("/", eventsController.findAll);
router.post("/", eventsController.create);
router.get("/:id", eventsController.findById);
router.put("/:id", eventsController.update);
router.delete("/:id", eventsController.remove);

module.exports = router;
