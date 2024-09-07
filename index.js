const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt"); // You can remove bcrypt since it's no longer needed without login
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/resource_fill.html"); // Directly redirect to resource fill form
});

const port = process.env.PORT || 4000;

mongoose
  .connect(
    "mongodb+srv://hasnainmakada:hasnain123@cluster0.rgffboa.mongodb.net/?retryWrites=true&w=majority"
  )
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
  price: String,
});

const Resource = mongoose.model("Resource", resourceSchema);

app.post("/api/post-resources", async (req, res) => {
  try {
    const formData = req.body;

    formData.toolRelatedTo =
      formData.toolRelatedTo.charAt(0).toUpperCase() +
      formData.toolRelatedTo.slice(1);

    const resource = new Resource(formData);
    await resource.save();
    res.json({ message: "Your Resource has been posted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error saving resource.");
  }
});

app.get("/api/get-resources", async (req, res) => {
  try {
    const resources = await Resource.find();
    res.json(resources);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error getting resources.");
  }
});

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
