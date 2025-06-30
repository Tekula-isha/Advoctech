const fs = require("fs");
const path = require("path");
const axios = require("axios");

exports.analyzeDocument = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    console.log("Received File:", req.file.originalname);

    // Prepare file for sending
    const filePath = path.join(__dirname, "..", req.file.path);
    const fileStream = fs.createReadStream(filePath);

    // Send file to Flask API
    const flaskResponse = await axios.post("http://127.0.0.1:5001/summarize", fileStream, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });

    // Delete the uploaded file after processing
    fs.unlinkSync(filePath);

    // Send Flask API's response to frontend
    res.json({ summary: flaskResponse.data.summary });

  } catch (error) {
    console.error("Error analyzing document:", error);
    res.status(500).json({ error: "Error analyzing document" });
  }
};
