import { Schema, model } from "mongoose";
import UserModel from "../../models/User";

const postNewUser = async (username, password) => {
  try {
    const addUserToDb = await UserModel({
      username,
      password,
    });
    const data = await addUserToDb.save();
    const obj = {};
    obj.userId = data._id;
    obj.username = data.username;
    return obj;
  } catch (error) {
    // console.log("POST NEW USER ERROR: ", error);
    return { error }
  }
};

export default postNewUser;
