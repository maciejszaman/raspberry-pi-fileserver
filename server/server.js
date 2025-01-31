const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");
const app = express();
const uuidv4 = require("uuid").v4;
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Serve static files from the 'photos' folder
const photosPath = path.join(__dirname, "../photos");

// Route to serve static files
app.get("/photos/:filename", (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(photosPath, filename);

  // Check if exists
  if (fs.existsSync(filePath)) {
    // Send the file
    res.sendFile(filePath);
  } else {
    // Else, 404
    res.status(404).send("File not found");
  }
});

// placeholder
app.get("/", (req, res) => {
  res.send("200");
});

//Get all photos as a JSON
app.get("/photos", (req, res) => {
  fs.readdir(photosPath, (err, files) => {
    if (err) {
      res.status(500).send("Internal Server Error");
    } else {
      const fileObjects = files.map((file, index) => {
        // Important

        return {
          id: uuidv4(),
          name: file,
          url: `http://localhost:${PORT}/photos/${file}`,
        };
      });
      res.json(fileObjects);
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
