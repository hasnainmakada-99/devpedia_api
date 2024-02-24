const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

const port = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
const resourceSchema = new mongoose.Schema({
  title: String,
  url: String,
  description: String,
  thumbnail: String,
  publishedDate: String,
  channelName: String,
  toolRelatedTo: String,
});

const Resources = mongoose.model("Resource", resourceSchema);

app.post("/api/post-resources", async (req, res) => {
  try {
    const formData = req.body;
    console.log(formData);
    const resource = new Resources(formData);
    await resource.save();
    res.json({ message: "Your Resource has been posted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error saving resource.");
  }
});

app.get("/api/get-resources", async (req, res) => {
  try {
    const resources = await Resources.find(); // This method will retrieve all the reosurces from the mongodb database
    res.json(resources);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error getting resources.");
  }
});

app.listen(port, (req, res) => {
  console.log(`Server Started at Port ${3000}`);
});
