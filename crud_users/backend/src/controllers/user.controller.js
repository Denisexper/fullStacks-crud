import User from "../models/user.models.js";

class UserController {

    async createUser (req, res) {
        try {
            const { name , email, phone } = req.body;

            const user = await User.create({ name, email, phone });
    
            res.send(user);

        } catch (error) {
            console.error(error)

            res.status(500).send(error);
        }
    }
    async getAllUsers (req, res) {
        try {
            const users = await User.find().select('-__v');
            res.send({
                status:true,
                data:users
            })
        } catch (error) {
            res.send({
                status:false,
                message:"cannot found the users",
                error
            })
        }
    }
    async getUserById (req, res) {
        try {
            const { id } = req.params;
            const user = await User.findById(id)
            res.send(user)

        } catch (error) {
            res.send({
                status: false,
                message: "cannot found the user",
                error
            })
        }
    }
    async updateUser (req, res) {
        try {
            const { id } = req.params
            const { name, email, phone} = req.body
            const newUser = await User.findByIdAndUpdate(id, {name, email, phone}, {new: true});
            res.send({
                status: true,
                message:"user updating successfull",
                newUser
            })
        } catch (error) {
            res.status(400).send({
                status: false,
                message: "cannot update the user",
                error
            })
        }
    }
    async deleteUser (req, res) {
        try {
            const { id } = req.params;
            const user = await User.findByIdAndDelete(id)
            res.send({
                status: true,
                message: "User deleted successfully"
            })
        } catch (error) {
            res.send({
                status: false,
                message: "Error deleting user",
                error
            })
        }
    }
    
}
export default UserController;