export const createUser = async (req, res) => {
  const { name, email } = req.body;

  try {
    res.json({ data: { name, email }, err: null });
  } catch (err) {
    console.error("Error fetching data", err);
    res.status(500).json({ data: null, err });
  }
};
