import { User } from "../../models/index.js";

export const createUser = async (req, res) => {
  const { name, email } = req.body;

  try {
    const user = await User.create({ name, email });
    res.json({ data: { user, token }, err: null });
  } catch (err) {
    console.error("Error fetching data", err);
    res.status(500).json({ data: null, err });
  }
};
