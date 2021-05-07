import getUserData from "../../controllers/user/getUserData";

const getUserProfile = async (req, res) => {
  const data = await getUserData(req.userToken.data.userId);
  return data.error
    ? res.status(400).json({
        error: "user not found",
      })
    : res.status(300).json({
        data: data.data,
      });
};

export default getUserProfile;
