export const getUser = async (req, res) => {
  const { id } = req.params;

  try {
    res.json({ data: { id }, err: null });
  } catch (err) {
    console.error("Error fetching data", err);
    res.status(500).json({ data: null, err });
  }
};
