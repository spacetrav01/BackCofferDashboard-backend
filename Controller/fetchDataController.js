const dataModel = require("../Models/dataModel");
const fetchDataController = async (req, res) => {
  try {
    dataModel.createIndexes();
    const d = dataModel.db.collection("datamodels").find();
    const a = [];
    while (await d.hasNext()) {
      const s = await d.next().then((res) => res);
      a.push(s);
    }
    if (a == []) {
      await res.status(201).send({ data: "null" });
    } else {
      await res.status(200).send({ data: a });
    }
  } catch (error) {
    return await res.status(500).send({ error: error, message: error.message });
  }
};
module.exports = fetchDataController;
