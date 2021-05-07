import UserModel from "../../models/User";

const getUser = async (username, password) => {
  try {
    const user = await UserModel.findOne({
      username,
      password,
    });
    return user === null ? { error: "user not found" } : {data: {
        userId: user._id,
        username: user.username
    }};
  } catch (error) {
    console.log("GET USER ERROR", error);
  }
};

export default getUser;
