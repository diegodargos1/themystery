const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");

const SessionController = require("./controllers/SessionController");
const RegisterController = require("./controllers/RegisterController");

const SpotController = require("./controllers/SpotController");
const DashboardController = require("./controllers/DashboardController");
const BookingController = require("./controllers/BookingController");
const MysteryController = require("./controllers/MysteryController");
const ListMysteryController = require("./controllers/ListMysteryController");
const UserMysteryController = require("./controllers/UserMysteryController");
const RatingController = require("./controllers/RatingController");

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post("/register", RegisterController.store);
routes.post("/login", SessionController.store);
routes.post("/mystery", MysteryController.store);
routes.get("/mystery", MysteryController.show);

routes.post("/listmystery", ListMysteryController.store);
routes.get("/listmystery", ListMysteryController.index);

routes.get("/mymystery", UserMysteryController.index);

routes.post("/rating", RatingController.store);
routes.get("/rating", RatingController.show);

// routes.post("/spots", upload.single("thumbnail"), SpotController.store);
// routes.get("/spots", SpotController.index);

// routes.get("/dashboard", DashboardController.show);

// routes.post("/spots/:spot_id/bookings", BookingController.store);

// app.post("/login", (req, res) => {
//     return res.json(req.body);
//   });

//   app.get("/users", (req, res) => {
//     return res.send({ message: "hello idade " + req.query.idade });
//   });

//   app.put("/edit/:id", (req, res) => {
//     return res.json({ message: "id " + req.params.id, body: req.body });
//   });

module.exports = routes;
