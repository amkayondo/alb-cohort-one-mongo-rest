import postNewUser from "../../controllers/user/postNewUser";

const addNewUser = async (req, res) => {
  const { username, password } = req.body;
  const data = await postNewUser(username, password);
  return data.error
    ? res.status(500).json({
        error: data.error,
      })
    : res.status(201).json({
        data,
      });
};

export default addNewUser;
