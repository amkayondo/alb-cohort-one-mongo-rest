import UserModel from "../../models/User";

const getUserData = async (userId) => {
  try {
    const data = await UserModel.findOne({ _id: userId });
    return data === null
      ? { error: "user not found" }
      : {
          data: {
            userId: data._id,
            username: data.username,
          },
        };
  } catch (error) {
    console.log("GET USER DATA", error);
  }
};

export default getUserData;
