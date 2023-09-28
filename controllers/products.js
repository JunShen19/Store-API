const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "Products" });
};
const getAllProductsStatic = async (req, res) => {
  res.status(200).json({ msg: "Products Static" });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
