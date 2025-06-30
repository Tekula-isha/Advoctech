import { useState } from "react";
import axios from "axios";

function DocAnalyzer() {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle File Selection
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  // Handle Form Submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      alert("⚠️ Please upload a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("document", file);

    setLoading(true);
    setSummary("");

    try {
      const response = await axios.post("http://localhost:5001/summarize", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setSummary(response.data.summary);
    } catch (error) {
      console.error("❌ Error analyzing document:", error);
      setSummary("⚠️ Error analyzing document. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📄 Document Analyzer</h1>
      <p style={styles.description}>
        Upload a document to get a quick summary. Supported formats: <b>PDF, DOCX, TXT</b>.
      </p>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="file"
          onChange={handleFileChange}
          style={styles.fileInput}
          accept=".pdf,.docx,.txt"
        />
        <button type="submit" disabled={loading} style={styles.submitButton}>
          {loading ? "Analyzing..." : "Analyze"}
        </button>
      </form>

      {summary && (
        <div style={styles.summaryBox}>
          <strong>📝 Summary:</strong>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    maxWidth: "600px",
    margin: "auto",
    textAlign: "center",
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "#f4f4f9",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "28px",
    color: "#333",
    marginBottom: "10px",
  },
  description: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "20px",
  },
  form: {
    marginBottom: "20px",
  },
  fileInput: {
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    width: "100%",
    boxSizing: "border-box",
  },
  submitButton: {
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  summaryBox: {
    marginTop: "20px",
    textAlign: "left",
    background: "#fff",
    padding: "15px",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
};

export default DocAnalyzer;