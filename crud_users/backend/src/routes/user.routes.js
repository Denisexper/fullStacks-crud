import express from "express"
import UserController from "../controllers/user.controller.js";


const router = express.Router()

const userController = new UserController()

router.post("/create", userController.createUser);
router.get("/get-users", userController.getAllUsers)
router.get("/get-user/:id", userController.getUserById)
router.put("/update-user/:id", userController.updateUser)
router.delete("/delete-user/:id", userController.deleteUser)

export default router;

