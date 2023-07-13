import { User } from "../../models/index.js";

export const getUser = async (req, res) => {
  const { id } = req.params;

  try {
    if (id.length != 24) {
      return res.status(400).json({ data: null, err: "id length incorrect" });
    }
    const user = await User.findById(id);
    res.json({ data: { user }, err: null });
  } catch (err) {
    console.error("Error fetching data", err);
    res.status(500).json({ data: null, err });
  }
};
