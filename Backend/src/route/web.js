import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import doctorController from "../controllers/doctorController";
import patientController from "../controllers/patientController";
import specialtyController from "../controllers/specialtyController";
let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/about", homeController.getAboutPage);
  router.get("/crud", homeController.getCRUD);
  router.post("/post-crud", homeController.postCRUD);
  router.get("/get-crud", homeController.displayGetCRUD);
  router.get("/edit-crud", homeController.getEditCRUD);
  router.post("/put-crud", homeController.putCRUD);
  router.get("/delete-crud", homeController.deleteCRUD);

  router.post("/api/login", userController.handleLogin);
  router.post("/api/signin", userController.handleSignin);
  router.get("/api/get-all-users", userController.handleGetAllUsers);
  router.post("/api/creat-new-user", userController.handeleCreateNewUser);
  router.put("/api/edit-user", userController.handeleEditUser);
  router.delete("/api/delete-user", userController.handeleDeleteUser);
  router.post("/api/facebook", userController.fbLogin);
  router.post("/api/passwordforgot", userController.forgotPassword);

  router.put("/api/resetpassword", userController.resetPassword);
  router.get("/api/allcode", userController.getAllCode);

  router.get("/api/top-doctor-home", doctorController.getTopDoctorHome);
  router.get("/api/get-all-doctor", doctorController.getAllDoctors);
  router.post("/api/save-infor-doctor", doctorController.postInforDoctor);
  router.get(
    "/api/get-detail-doctor-by-id",
    doctorController.getDetailDoctorById
  );

  router.post("/api/bulk-create-schedule", doctorController.bulkCreateSchedule);

  router.get(
    "/api/get-schedule-doctor-by-date",
    doctorController.getScheduleByDate
  );

  router.get(
    "/api/get-extra-infor-doctor-by-id",
    doctorController.getExtraInforDoctorById
  );

  router.get(
    "/api/get-profile-doctor-by-id",
    doctorController.getProfileDoctorById
  );

  router.post(
    "/api/patient-book-appointment",
    patientController.postBookAppointment
  );

  router.post(
    "/api/verify-book-appointment",
    patientController.postVerifyBookAppoiment
  );

  router.post("/api/create-new-specialty", specialtyController.createSpecialty);

  return app.use("/", router);
};

router.get("/api/get-specialty", specialtyController.getAllSpecialty);
router.get(
  "/api/get-detail-specialty-by-id",
  specialtyController.getDetailSpecialtyById
);

module.exports = initWebRoutes;
