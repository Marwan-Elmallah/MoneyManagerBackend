const Account = require("./model.account");

exports.createAccount = async (req, res) => {
  try {
    const { name, description, balance, currency } = req.body;
    const account = new Account({ name, description, balance, currency });
    await account.save();
    res.status(201).json(account);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};