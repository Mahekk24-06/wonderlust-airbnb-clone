const mongoose = require("mongoose");
const Listing = require("../models/listing");
const initData = require("./data");

const MONGO_URL = "mongodb://127.0.0.1:27017/wonderlust";

async function main() {
  await mongoose.connect(MONGO_URL);
  console.log("Connected to DB");
}

main()
  .then(() => initDB())
  .catch((err) => console.log(err));

const initDB = async () => {
  try {
    await Listing.deleteMany({});

    initData.data = initData.data.map((obj) => ({
      ...obj,
      owner: new mongoose.Types.ObjectId("66b5f6c0f1c123456789abcd"), // any valid id
      geometry: {
        type: "Point",
        coordinates: [77.5946, 12.9716]
      }
    }));

    await Listing.insertMany(initData.data);

    console.log("New data inserted successfully");

    mongoose.connection.close();
  } catch (err) {
    console.log("ERROR WHILE INSERTING:", err);
  }
};