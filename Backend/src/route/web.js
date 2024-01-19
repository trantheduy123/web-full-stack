import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
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

  router.get("/allcode", userController.getAllCode);

  return app.use("/", router);
};

module.exports = initWebRoutes;
